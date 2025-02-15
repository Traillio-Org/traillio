import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "@/lib/Auth";
import { useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { signInOrCreateAccount } = useAuth();
  const navigate = useNavigate();

  const onSuccess = useCallback(
    async (response) => {
      const idToken = response.credential;

      try {
        await signInOrCreateAccount(idToken);

        // Redirect to home page
        navigate("/dashboard", { replace: true });
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
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="w-full max-w-[900px] flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-xl">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back!
            </h1>
            <h2 className="text-xl font-semibold text-gray-700">
              To Our Progress Tracker
            </h2>
            <p className="mt-4 text-sm text-gray-600 italic border-l-2 border-blue-500 pl-4">
              "From Small Steps to Giant Leaps: Illuminate Your Progress!"
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">
                    Track Progress
                  </h3>
                  <p>Monitor your learning journey with detailed analytics</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">
                    AI Insights
                  </h3>
                  <p>Get personalized recommendations for improvement</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">
                    Community
                  </h3>
                  <p>Connect and compete with fellow learners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="flex justify-center items-center w-full h-full">
            <GoogleLogin onSuccess={onSuccess} onError={onError}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
