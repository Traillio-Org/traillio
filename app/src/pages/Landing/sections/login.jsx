import React from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ChevronRight } from "lucide-react";

const LoginPage = () => {
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
                  <h3 className="text-gray-800 font-semibold mb-1">Track Progress</h3>
                  <p>Monitor your learning journey with detailed analytics</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">AI Insights</h3>
                  <p>Get personalized recommendations for improvement</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">Community</h3>
                  <p>Connect and compete with fellow learners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-blue-50 to-purple-50">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sign In
          </h2>

          <div className="space-y-6">
            {/* Email */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-10 py-3 transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock size={18} />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-10 py-3 transition-all duration-300"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-500 transition-colors">
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group hover:shadow-lg">
              Sign In
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:text-blue-500 transition-colors font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;