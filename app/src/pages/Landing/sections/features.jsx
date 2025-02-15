import NavBar from "../components/navbar";
import { Brain, Trophy, BookOpen, Newspaper, Timer, CheckCircle, Target, LineChart } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, gradient, index }) => {
  return (
    <div 
      className="group bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-500 
        transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50
        border border-gray-100 animate-fade-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={`w-14 h-14 ${gradient} rounded-2xl 
        flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 
        transition-all duration-500 shadow-lg`}>
        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 
        transition-colors duration-500">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 
        transition-colors duration-500">
        {description}
      </p>
    </div>
  );
};

const FloatingElement = ({ delay, duration, size }) => (
  <div
    className="absolute rounded-full opacity-30 animate-float"
    style={{
      height: size,
      width: size,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: delay,
      animationDuration: duration,
      background: `linear-gradient(to right, 
        rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, 255, 0.1),
        rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, 255, 0.1)
      )`,
      filter: 'blur(1rem)'
    }}
  />
);

const Features = () => {
  const features = [
    {
      title: "Interactive Focus Timer",
      description: "Stay focused with our dynamic, gamified timer featuring soothing water flow animations, XP system, and progress tracking. Perfect for maintaining productivity.",
      icon: Timer,
      gradient: "bg-gradient-to-r from-blue-600 to-cyan-600",
    },
    {
      title: "Stress Level Calculator ",
      description: "Our ML-driven Stress Level Calculator analyzes coding patterns and performance to provide smart insights, keeping you productive and motivated.",
      icon: CheckCircle,
      gradient: "bg-gradient-to-r from-purple-600 to-pink-600",
    },
    {
      title: "AI-Powered Progress Prediction",
      description: "Our advanced AI algorithms analyze your coding patterns to predict growth trajectories and provide personalized learning recommendations.",
      icon: Brain,
      gradient: "bg-gradient-to-r from-green-600 to-teal-600",
    },
    {
      title: "College Leaderboard",
      description: "Compete with peers and track your position across different colleges nationwide. Earn badges and showcase your achievements.",
      icon: Trophy,
      gradient: "bg-gradient-to-r from-yellow-600 to-orange-600",
    },
    {
      title: "Intuitive Design – Seamlessly Navigate Your Coding Journey",
      description: "We believe that analytics should be insightful, not overwhelming. Our Intuitive Design ensures a smooth, engaging, and distraction-free experience, making it easier than ever to track, analyze, and improve your coding skills.",
      icon: LineChart,
      gradient: "bg-gradient-to-r from-red-600 to-rose-600",
    },
    {
      title: "Problem-Solving Tracker",
      description: "Monitor your problem-solving journey with our intelligent tracking system. Get insights into your solving patterns and areas for improvement.",
      icon: Target,
      gradient: "bg-gradient-to-r from-indigo-600 to-purple-600",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <NavBar />
      
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <FloatingElement
            key={i}
            delay={`${Math.random() * 3}s`}
            duration={`${Math.random() * 5 + 3}s`}
            size={`${Math.random() * 4 + 1}rem`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 
            bg-clip-text text-transparent transform hover:scale-105 transition-all duration-500
            tracking-tight animate-fade-down">
            Features
          </h1>
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
              blur-2xl opacity-10 scale-150" />
            <h2 className="relative text-4xl font-bold text-gray-800 mb-6">
              Enhance Your Coding Journey
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-up"
             style={{ animationDelay: '300ms' }}>
            Discover powerful tools designed to boost your productivity and track your progress effectively.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-24 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-block p-8 rounded-3xl bg-white/90 backdrop-blur-xl shadow-xl
            transform hover:scale-105 transition-all duration-500 border border-gray-100">
            <p className="text-xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 
              bg-clip-text font-medium italic leading-relaxed">
              "Transform your coding journey with focused learning and intelligent tracking"
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-fade-up {
          animation: fade-up 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-down {
          animation: fade-down 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Features;