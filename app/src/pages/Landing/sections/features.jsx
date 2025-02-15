import React from "react";
import { Brain, Trophy, BookOpen, Newspaper, Timer, CheckCircle, Target, LineChart } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, gradient, delay }) => {
  return (
    <div className={`group relative bg-white rounded-xl overflow-hidden shadow-lg 
      hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 
      animate-fade-in-up ${delay}`}>
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-5 
        transition-opacity duration-500`} />
      
      <div className="p-8 relative">
        {/* Icon Container */}
        <div className={`w-14 h-14 ${gradient} rounded-xl mb-6 p-3 
          transform group-hover:scale-110 transition-transform duration-300 
          shadow-lg`}>
          <Icon className="w-full h-full text-white" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 
            transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 group-hover:text-gray-700 line-height-relaxed">
            {description}
          </p>
        </div>

        {/* Hover Effect Line */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 
          to-purple-500 group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Interactive Focus Timer",
      description: "Stay focused with our dynamic, gamified timer featuring soothing water flow animations, XP system, and progress tracking. Perfect for maintaining productivity.",
      icon: Timer,
      gradient: "bg-gradient-to-r from-blue-600 to-cyan-600",
      delay: "delay-0"
    },
    {
      title: "Smart Task Manager",
      description: "Organize your learning journey with our intelligent task tracking system featuring priority management and real-time progress monitoring.",
      icon: CheckCircle,
      gradient: "bg-gradient-to-r from-purple-600 to-pink-600",
      delay: "delay-100"
    },
    {
      title: "AI-Powered Progress Prediction",
      description: "Our advanced AI algorithms analyze your coding patterns to predict growth trajectories and provide personalized learning recommendations.",
      icon: Brain,
      gradient: "bg-gradient-to-r from-green-600 to-teal-600",
      delay: "delay-200"
    },
    {
      title: "College Leaderboard",
      description: "Compete with peers and track your position across different colleges nationwide. Earn badges and showcase your achievements.",
      icon: Trophy,
      gradient: "bg-gradient-to-r from-yellow-600 to-orange-600",
      delay: "delay-300"
    },
    {
      title: "Progress Analysis",
      description: "Track your performance across different programming domains with detailed metrics, visualizations, and improvement suggestions.",
      icon: LineChart,
      gradient: "bg-gradient-to-r from-red-600 to-rose-600",
      delay: "delay-400"
    },
    {
      title: "Problem-Solving Tracker",
      description: "Monitor your problem-solving journey with our intelligent tracking system. Get insights into your solving patterns and areas for improvement.",
      icon: Target,
      gradient: "bg-gradient-to-r from-indigo-600 to-purple-600",
      delay: "delay-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-blue-400/30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 
            bg-clip-text text-transparent transform hover:scale-105 transition-all duration-300">
            Features
          </h1>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
              blur-xl opacity-10" />
            <h2 className="relative text-3xl font-bold text-gray-800 mb-6">
              Enhance Your Coding Journey
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover powerful tools designed to boost your productivity and track your progress effectively.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={feature.delay}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg
            transform hover:scale-105 transition-all duration-300">
            <p className="text-lg text-transparent bg-gradient-to-r from-blue-600 to-purple-600 
              bg-clip-text font-medium italic">
              "Transform your coding journey with focused learning and intelligent tracking"
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Features;