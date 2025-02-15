import React, { useState } from "react";
import {
  Code,
  ChevronRight,
  FileText,
  Book,
  Monitor,
  ExternalLink,
  Sparkles,
  Users,
  BookOpen,
  Icon,
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

  const StatCard = ({ icon: Icon, title, value }) => (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="font-bold text-xl">{value}</p>
        </div>
      </div>
    </div>
  );

  const CourseCard = ({ course }) => (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
      onMouseEnter={() => setHoveredCourse(course.id)}
      onMouseLeave={() => setHoveredCourse(null)}
    >
      <div
        className={`h-48 bg-gradient-to-r ${course.color} relative overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/400/200')]"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-bold text-xl mb-2">{course.title}</h3>
          <p className="text-white/90 text-sm">{course.description}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-sm text-gray-500">Course Modules:</h4>
          <a
            href={course.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <div className="space-y-2">
          {course.sections.map((section) => (
            <a
              key={section.id}
              href={section.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm p-2 rounded-md hover:bg-blue-50 transition-colors group"
            >
              <span className="text-blue-500 mr-2">{section.icon}</span>
              <span className="text-blue-400 group-hover:text-blue-700">
                {section.title}
              </span>
              <ChevronRight className="ml-auto w-4 h-4 text-gray-400 group-hover:text-blue-500" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-w-screen h-full bg-[#eff5ff] overflow-y-scroll">
      <Header title={"Your Courses"} subtitle={"One stop for learning"} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <section className="bg-white rounded-xl overflow-hidden my-8 relative shadow-md">
          <div className="relative z-10 p-8 md:p-12 shadow-xl">
            <div className=" flex flex-col items-center justify-center w-full">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent w-full text-center">
                Learn from the Source
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Access curated learning paths and official documentation for
                modern technology stacks.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/dashboard/courses/cp31">
                  <button
                    className="px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-2 focus:ring-blue-300"
                  >
                    CP Sheet
                  </button>
                </Link>
                <HashLink to="#courses">
                  <button
                    onClick={() => setActiveSection("courses")}
                    className="px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus:ring-2 focus:ring-blue-300"
                  >
                    Browse Courses
                  </button>
                </HashLink>
              </div>
            </div>
          </div>
        </section>

        <section className="shadow-md rounded-xl">
          <Main />
        </section>
        <section className="py-12" id="courses">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">
            Official Documentation Resources
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Learn directly from authoritative sources with our curated learning
            paths
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <section className="my-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Learn With Documentation?
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Get the most up-to-date and accurate information",
                "Learn best practices from technology creators",
                "Master technical documentation navigation",
                "Discover hidden features and capabilities",
                "Build authoritative source reference habits",
                "Progress at your own pace",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <NavBar />
    </div>
  );
};

export default CoursePage;
