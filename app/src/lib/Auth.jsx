import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { request, authRequest } from './HTTPClient';
import Errors from './Errors';
import config from '../config';

// Create context
const AuthContext = createContext(null);

// PKCE functions
export const pkce = {
    generateCodeVerifier: () => {
        const array = new Uint32Array(28);
        window.crypto.getRandomValues(array);
        return Array.from(array, dec => ('0' + dec.toString(16)).substring(-2)).join('');
    },

    getChallengeFromVerifier: async (code_verifier) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(code_verifier);
        const s256 = await window.crypto.subtle.digest('SHA-256', data);

        // Base64 URL encode the hash
        const challenge = btoa(String.fromCharCode.apply(null, new Uint8Array(s256)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        return challenge;
    }
};

// Token storage functions
export const getTokens = () => {
    return JSON.parse(localStorage.getItem('traillio.auth.tokens'));
};

export const setTokens = (value) => {
    if (value === null) {
        localStorage.removeItem('traillio.auth.tokens');
    } else {
        localStorage.setItem('traillio.auth.tokens', JSON.stringify(value));
    }
};

// Provider component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const createAccount = useCallback(async (idToken) => {
        const response = await request(config.api.host + '/auth/create_account', {
            method: 'post',
            json: {
                id_token: idToken
            }
        });
        return response.json();
    }, []);

    const login = useCallback(async (idToken) => {
        // Create new PKCE code verifier and challenge
        const codeVerifier = pkce.generateCodeVerifier();
        const codeChallenge = await pkce.getChallengeFromVerifier(codeVerifier);

        // Get authorization code
        const authResponse = await request(config.api.host + '/auth/authorize', {
            method: 'post',
            json: {
                id_token: idToken,
                code_challenge: codeChallenge,
                client_id: config.auth.client_id,
            }
        });
        const { auth_code } = await authResponse.json();

        // Get tokens
        const tokenResponse = await request(config.api.host + '/auth/tokens', {
            method: 'post',
            json: {
                auth_code,
                code_verifier: codeVerifier,
                client_id: config.auth.client_id
            }
        });
        const tokens = await tokenResponse.json();

        // Save tokens
        setTokens({
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        });

        // Fetch user details initially
        await fetchUser();

        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        };
    }, []);

    const signInOrCreateAccount = useCallback(async (idToken) => {
        try {
            await createAccount(idToken);
            console.log(`[auth] Created a new user account.`);
        } catch (e) {
            if (!(e instanceof Errors.HttpError) || (e instanceof Errors.HttpError && e.status !== 409)) {
                alert("Could not create account due to an error. Please try again.");
                return;
            }
        }

        // Login
        return await login(idToken);
    }, [createAccount, login]);

    const fetchUser = useCallback(async () => {
        // Return cached user if present
        if (currentUser !== null) return currentUser;

        // Make request to get user data
        const response = await authRequest(config.api.host + '/auth/user', {
            method: 'get',
        });
        const { user } = await response.json();

        setCurrentUser(user);
        return user;
    }, [currentUser]);

    const refreshTokens = useCallback(async () => {
        const tokens = getTokens();

        // Check if there are tokens
        if (tokens === null) {
            throw new Errors.UserUnauthenticatedError("User is not logged in.");
        }

        try {
            const response = await request(config.api.host + '/auth/refresh_tokens', {
                method: 'post',
                json: {
                    refresh_token: tokens.refreshToken
                }
            });
            const newTokens = await response.json();

            console.log(`[auth] Tokens refreshed`);

            // Save tokens locally
            setTokens({
                accessToken: newTokens.accessToken,
                refreshToken: newTokens.refreshToken
            });

            return {
                accessToken: newTokens.accessToken,
                refreshToken: newTokens.refreshToken
            };
        } catch (e) {
            if (e instanceof Errors.HttpError && e.status === 401) {
                console.log(`[auth] Access token OR refresh token is invalid, throwing error.`);
                throw new Errors.UserUnauthenticatedError("Invalid auth credentials, please login again.");
            }
            throw e;
        }
    }, []);

    const logout = useCallback(async () => {
        const tokens = getTokens();

        // Check if user is logged in
        if (tokens === null) {
            throw new Errors.UserUnauthenticatedError("User is already logged out.");
        }

        // Log out server side
        await request(config.api.host + '/auth/logout', {
            method: 'post',
            json: {
                refresh_token: tokens.refreshToken
            }
        });

        // Clear tokens
        setTokens(null);

        // Clear state
        setCurrentUser(null);
    }, []);

    const value = {
        currentUser,
        createAccount,
        login,
        signInOrCreateAccount,
        fetchUser,
        refreshTokens,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// A component that enforces authentication before it is rendered
export const ProtectedRoute = ({ children }) => {
    const { fetchUser, currentUser } = useAuth();
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  
    useEffect(() => {
        let isMounted = true;
    
        const checkAuth = async () => {
            try {
                await fetchUser();
            } catch (error) {
                if (!(error instanceof Errors.UserUnauthenticatedError) && !(error instanceof Errors.HttpError && error.status === 404)) {
                    console.error(error);
                    alert(`Error: ${error.message}. Please reload the page.`);
                }
            } finally {
                if (isMounted) setIsCheckingAuth(false);
            }
        };
    
        checkAuth();
    
        return () => {
            isMounted = false;
        };
    }, [fetchUser]);
  
    if (isCheckingAuth) {
        return null; // Add loading spinner here
    }
  
    return currentUser ? children : <Navigate to="/auth" replace />;
};