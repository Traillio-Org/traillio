import React, { useState } from "react";
import {
  Code,
  ChevronRight,
  FileText,
  Book,
  Monitor,
  ExternalLink,
  Target,
  GraduationCap,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 rounded-xl">
      <div className="mb-4 p-3 rounded-full bg-blue-50">
        <Icon className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed max-w-sm">{description}</p>
    </div>
  );
}

function Main() {
  const features = [
    {
      icon: Target,
      title: "Explore new skills",
      description:
        "Access 10,000+ courses in AI, business, technology, and more.",
    },
    {
      icon: GraduationCap,
      title: "Earn valuable credentials",
      description:
        "Get certificates for every course you finish and boost your chances of getting hired after your trial ends at no additional cost.",
    },
    {
      icon: Star,
      title: "Learn from the best",
      description:
        "Take your skills to the next level with expert-led courses and Coursera Coach, your AI-powered guide.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 rounded-xl py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Invest in your career
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-2.5">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
const CoursePage = () => {
  const [activeSection, setActiveSection] = useState("courses");
  const [hoveredCourse, setHoveredCourse] = useState(null);

  // Course data remains the same as in original
  const courses = [
    {
      id: "web-dev",
      title: "Full Stack Web Development",
      description:
        "Master front-end and back-end technologies to build complete web applications",
      image: "web-dev",
      color: "from-blue-500 to-cyan-400",
      docsUrl: "https://developer.mozilla.org/en-US/docs/Web",
      sections: [
        {
          id: "html-css",
          title: "HTML & CSS Fundamentals",
          icon: <Monitor size={16} />,
          docsUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          id: "javascript",
          title: "JavaScript & DOM Manipulation",
          icon: <Code size={16} />,
          docsUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          id: "react",
          title: "React.js Framework",
          icon: <Code size={16} />,
          docsUrl: "https://reactjs.org/docs/getting-started.html",
        },
        {
          id: "node",
          title: "Node.js & Express",
          icon: <Code size={16} />,
          docsUrl: "https://nodejs.org/en/docs/",
        },
        {
          id: "database",
          title: "Databases & ORM",
          icon: <FileText size={16} />,
          docsUrl: "https://sequelize.org/master/",
        },
      ],
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description:
        "Learn to build intelligent systems and analyze complex data sets",
      image: "ai-ml",
      color: "from-purple-500 to-pink-400",
      docsUrl: "https://pytorch.org/docs/stable/index.html",
      sections: [
        {
          id: "python",
          title: "Python for Data Science",
          icon: <Code size={16} />,
          docsUrl: "https://docs.python.org/3/tutorial/",
        },
        {
          id: "data-analysis",
          title: "Data Analysis & Visualization",
          icon: <FileText size={16} />,
          docsUrl: "https://pandas.pydata.org/docs/",
        },
        {
          id: "ml-basics",
          title: "Machine Learning Fundamentals",
          icon: <Book size={16} />,
          docsUrl: "https://scikit-learn.org/stable/documentation.html",
        },
        {
          id: "deep-learning",
          title: "Deep Learning & Neural Networks",
          icon: <Book size={16} />,
          docsUrl: "https://www.tensorflow.org/api_docs",
        },
        {
          id: "ml-deployment",
          title: "ML Model Deployment",
          icon: <Monitor size={16} />,
          docsUrl: "https://www.tensorflow.org/tfx/guide",
        },
      ],
    },
    {
      id: "app-dev",
      title: "Mobile App Development",
      description:
        "Create cross-platform mobile applications for iOS and Android",
      image: "app-dev",
      color: "from-green-500 to-emerald-400",
      docsUrl: "https://reactnative.dev/docs/getting-started",
      sections: [
        {
          id: "react-native",
          title: "React Native Basics",
          icon: <Code size={16} />,
          docsUrl: "https://reactnative.dev/docs/components-and-apis",
        },
        {
          id: "flutter",
          title: "Flutter Framework",
          icon: <Code size={16} />,
          docsUrl: "https://flutter.dev/docs",
        },
        {
          id: "ui-design",
          title: "Mobile UI/UX Design",
          icon: <Monitor size={16} />,
          docsUrl: "https://material.io/design",
        },
        {
          id: "state-management",
          title: "State Management",
          icon: <Code size={16} />,
          docsUrl: "https://redux.js.org/introduction/getting-started",
        },
        {
          id: "app-publishing",
          title: "App Store Publishing",
          icon: <FileText size={16} />,
          docsUrl: "https://developer.apple.com/documentation/",
        },
      ],
    },
  ];
};

export default CoursePage;
