import { Target, Users, Shield, Award, LineChart, Sparkles, Heart, Globe } from "lucide-react";
import Navbar from "../components/navbar.jsx";

const AboutSection = ({ title, children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 py-16 ${className} animate-fade-up`}>
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
      bg-clip-text text-transparent mb-12 text-center transform hover:scale-105 transition-all duration-500">
      {title}
    </h2>
    {children}
  </div>
);

const ValueCard = ({ icon: Icon, title, description, index }) => (
  <div 
    className="group bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-500 
      transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50
      border border-gray-100 animate-fade-up"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 
      flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 
      transition-all duration-500 shadow-lg">
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

const FloatingElement = ({ delay, duration, size }) => (
  <div
    className="absolute rounded-full opacity-20 animate-float"
    style={{
      height: size,
      width: size,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: delay,
      animationDuration: duration,
      background: `linear-gradient(to right, 
        rgba(147, 197, 253, 0.3),
        rgba(167, 139, 250, 0.3)
      )`,
      filter: 'blur(1rem)'
    }}
  />
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <Navbar />

      {/* Background Animation */}
      <div className="fixed inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <FloatingElement
            key={i}
            delay={`${Math.random() * 4}s`}
            duration={`${Math.random() * 10 + 20}s`}
            size={`${Math.random() * 4 + 2}rem`}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
            <div className="absolute inset-0 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-purple-200/30 rounded-full blur-3xl transform translate-x-32 animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center animate-fade-down">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-600 to-purple-600 mb-8
              transform hover:scale-105 transition-all duration-500">
              About Traillio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed 
              animate-fade-up" style={{ animationDelay: '300ms' }}>
              Empowering individuals and teams to track, analyze, and visualize their progress 
              with intuitive tools and powerful insights.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <AboutSection title="Our Mission">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={Target}
            title="Purpose-Driven"
            description="We believe in making progress tracking accessible and meaningful for everyone, helping you achieve your goals with clarity and confidence."
            index={0}
          />
          <ValueCard
            icon={Users}
            title="Community-Focused"
            description="Building a supportive community where users can share experiences, celebrate achievements, and inspire each other's growth."
            index={1}
          />
          <ValueCard
            icon={Shield}
            title="Trust & Security"
            description="Committed to protecting your data with industry-leading security measures while maintaining complete transparency."
            index={2}
          />
        </div>
      </AboutSection>

      {/* Features Section */}
      <AboutSection title="Why Choose Traillio" className="bg-white/80 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
            icon={LineChart}
            title="Smart Analytics & Unified Tracking"
            description="Cross-Platform Integration – Track and analyze your progress across multiple platforms in one place."
            index={0}
          />
          <ValueCard
            icon={Sparkles}
            title="Intuitive Design"
            description="We believe that analytics should be insightful, not overwhelming. Our Intuitive Design ensures a smooth, engaging, and distraction-free experience."
            index={1}
          />
          <ValueCard
            icon={Heart}
            title="Leaderboard Ranking"
            description="Our Leaderboard Ranking system isn't just about numbers—it's about personalized progress tracking that helps you grow with college-based and global rankings."
            index={2}
          />
          <ValueCard
            icon={Globe}
            title="Smart Coding Assistant"
            description="Stuck on a problem? Our AI-Powered Chatbot provides smart, step-by-step hints tailored to your thought process—without spoiling the solution!"
            index={3}
          />
        </div>
      </AboutSection>

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

export default AboutPage;