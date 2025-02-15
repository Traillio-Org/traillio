import React from "react";
import { Target, Users, Shield, Award, LineChart, Sparkles, Heart, Globe } from "lucide-react";

const AboutSection = ({ title, children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 py-16 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
      {title}
    </h2>
    {children}
  </div>
);

const TeamMember = ({ name, role, image }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white p-6 hover:shadow-xl transition-all duration-300">
    <div className="relative z-10">
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <img 
          src={`/api/placeholder/96/96`} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{name}</h3>
      <p className="text-gray-600 text-center">{role}</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Hero Section */}
      <div className="relative pt-32 pb-32 overflow-hidden"> {/* Changed pt-16 to pt-32 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
            <div className="absolute inset-0 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-purple-200/30 rounded-full blur-3xl transform translate-x-32 animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              About Traillio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering individuals and teams to track, analyze, and visualize their progress with intuitive tools and powerful insights.
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
          />
          <ValueCard
            icon={Users}
            title="Community-Focused"
            description="Building a supportive community where users can share experiences, celebrate achievements, and inspire each other's growth."
          />
          <ValueCard
            icon={Shield}
            title="Trust & Security"
            description="Committed to protecting your data with industry-leading security measures while maintaining complete transparency."
          />
        </div>
      </AboutSection>

      {/* Features Section */}
      <AboutSection title="Why Choose Traillio" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
            icon={LineChart}
            title="Smart Analytics"
            description="Advanced tracking algorithms that provide meaningful insights into your progress patterns."
          />
          <ValueCard
            icon={Sparkles}
            title="Intuitive Design"
            description="Clean, modern interface that makes tracking and visualization effortless and enjoyable."
          />
          <ValueCard
            icon={Heart}
            title="Personalized Experience"
            description="Customizable dashboards and tracking methods that adapt to your unique needs and preferences."
          />
          <ValueCard
            icon={Globe}
            title="Global Reach"
            description="Supporting users worldwide with multi-language support and region-specific features."
          />
        </div>
      </AboutSection>


      {/* Stats Section */}
      <AboutSection title="Our Impact" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "100K+", label: "Active Users" },
            { value: "5M+", label: "Tasks Tracked" },
            { value: "150+", label: "Countries" },
            { value: "98%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-xl hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </AboutSection>
    </div>
  );
};

export default AboutPage;