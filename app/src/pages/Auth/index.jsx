/**
 * Authentication page
 */

import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../lib/Auth";
import { useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function AuthenticationPage() {
  const { signInOrCreateAccount } = useAuth();
  const navigate = useNavigate();

  const onSuccess = useCallback(
    async (response) => {
      const idToken = response.credential;

      try {
        await signInOrCreateAccount(idToken);

        // Redirect to home page
        navigate("/", { replace: true });
      } catch (e) {
        console.error(e);
        alert("An error occurred while signing in. Please try again.");
      }
    },
    [signInOrCreateAccount]
  );

  const onError = useCallback((e) => {
    console.error(e);
    alert("A GIS error occurred while signing in. Please try again.");
  }, []);

  return (
    <>
      <div className="flex min-h-screen place-items-center">
        <h1>Authenticate</h1>
        <GoogleLogin onSuccess={onSuccess} onError={onError} />
      </div>
    </>
  );
}
