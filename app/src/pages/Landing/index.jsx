import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Menu, ChevronDown } from "lucide-react";
import Navbar from "./components/navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <main className="pt-16 w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl">
          <div className="absolute inset-0 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 bg-purple-200/30 rounded-full blur-3xl transform translate-x-32 animate-pulse delay-700"></div>
          <div className="absolute inset-0 bg-pink-200/20 rounded-full blur-3xl transform -translate-x-32 animate-pulse delay-1000"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-bounce delay-300"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-bounce delay-700"></div>
        
        <div className="text-center z-10 px-4">
          {/* Main Title with Enhanced Animation */}
          <div className="relative">
            <h1 className="uppercase text-7xl md:text-9xl leading-none tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-x transition-all duration-500 hover:scale-105 hover:drop-shadow-lg">
              TRAILLIO
            </h1>
            
            {/* Glowing Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20 blur-3xl group-hover:opacity-30 transition-all duration-500"></div>
          </div>

          {/* Enhanced Subtitle */}
          <h2 className="uppercase text-2xl md:text-3xl mt-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800 transition-opacity duration-300">
            Progress Tracker
          </h2>

          {/* Enhanced Progress Quote */}
          <p className="mt-8 text-xl italic text-gray-600 max-w-2xl mx-auto transition-all duration-300 hover:text-gray-800 leading-relaxed">
            "From Small Steps to Giant Leaps: 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Illuminate Your Progress!
            </span>"
          </p>

          {/* Enhanced Buttons Container */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Enhanced Get Started Button */}
            <Link to="/login">
              <button className="group px-10 py-4 text-lg font-semibold tracking-wide rounded-2xl relative overflow-hidden transition-all duration-500
                bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white
                hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25
                flex items-center gap-3">
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </Link>

            {/* Enhanced Features Button */}
            <Link to="/features">
              <button className="group px-10 py-4 text-lg font-semibold tracking-wide rounded-2xl relative overflow-hidden transition-all duration-500
                bg-white text-gray-800 border-2 border-gray-100
                hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-100
                flex items-center gap-3">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">Features</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform relative z-10 text-purple-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

/* Add these to your global CSS for the gradient animation */
