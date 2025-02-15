// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Sparkles, Menu, X, ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { title: "About", path: "/about" },
//     { title: "Features", path: "/features" },
//     { title: "Our Team", path: "/OurTeam" },
//   ];

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled ? "bg-white/90 shadow-lg backdrop-blur-lg" : "bg-white/50 backdrop-blur-sm"
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center group">
//             <span className="text-2xl font-bold bg-black bg-clip-text text-transparent
//               group-hover:from-violet-400 group-hover:to-violet-700 transition-all duration-300">
//               TRAILLIO
//             </span>
//           </Link>
          
//           <div className="hidden md:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/80
//                   transition-all duration-300 relative group"
//               >
//                 <span className="relative z-10">{link.title}</span>
//                 <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-600 transform scale-x-0 
//                   group-hover:scale-x-100 transition-transform duration-300"></span>
//               </Link>
//             ))}
            
//             <Link to="/login">
//               <button className="ml-4 px-6 py-2 rounded-lg font-medium
//                 bg-gradient-to-r from-blue-600 to-blue-400 text-white
//                 hover:from-violet-500 hover:to-violet-700
//                 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
//                 Login
//               </button>
//             </Link>
//           </div>

//           <button 
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         <div className={`md:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         } overflow-hidden`}>
//           <div className="py-3 space-y-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="block px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100
//                   transition-all duration-300"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.title}
//               </Link>
//             ))}
//             <Link 
//               to="/login"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="block px-4 py-2 mt-4 rounded-lg text-center font-medium
//                 bg-black text-white
//                 hover:from-violet-500 hover:to-violet-700
//                 transition-all duration-300"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {title : "Home", path: "/"},
    { title: "About", path: "/about" },
    { title: "Features", path: "/features" },
    { title: "Our Team", path: "/team" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins ${
      isScrolled ? "bg-white/90 shadow-lg backdrop-blur-lg" : "bg-white/50 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent
              group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
              TRAILLIO
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/80
                  transition-all duration-300 relative group"
              >
                <span className="relative z-10">{link.title}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 
                  group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
            
            <Link to="/login">
              <button className="ml-4 px-6 py-2 rounded-lg font-medium
                bg-gradient-to-r from-blue-600 to-blue-400 text-white
                hover:from-blue-500 hover:to-blue-300
                transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Login
              </button>
            </Link>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}>
          <div className="py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100
                  transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link 
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 mt-4 rounded-lg text-center font-medium
                bg-gradient-to-r from-blue-600 to-blue-400 text-white
                hover:from-blue-500 hover:to-blue-300
                transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;