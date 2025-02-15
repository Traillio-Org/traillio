import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", path: "/features" },
      { name: "LeaderBoard", path: "/leaderboard" },
      { name: "Updates", path: "/updates" },
      { name: "Beta Program", path: "/beta" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Press Kit", path: "/press" },
      { name: "Contact", path: "/contact" },
    ],
    resources: [
      { name: "Blog", path: "/blog" },
      { name: "Documentation", path: "/docs" },
      { name: "Community", path: "/community" },
      { name: "Help Center", path: "/help" },
    ],
    legal: [
      { name: "Privacy", path: "/privacy" },
      { name: "Terms", path: "/terms" },
      { name: "Security", path: "/security" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, path: "#", label: "Facebook" },
    { icon: Twitter, path: "#", label: "Twitter" },
    { icon: Instagram, path: "#", label: "Instagram" },
    { icon: Linkedin, path: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block group">
              <span
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
                group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"
              >
                TRAILLIO
              </span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Track your progress, achieve your goals, and celebrate your
              journey with Traillio's innovative progress tracking platform.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:contact@traillio.com"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                contact@traillio.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (123) 456-7890
              </a>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                Nit Agartala, Tripura, India
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-900 font-semibold uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-8 pb-12">
          <div className="max-w-md">
            <h3 className="text-gray-900 font-semibold mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Stay updated with the latest features and releases.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white
                  hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            © {year} Traillio. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.path}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:text-blue-600 
                    hover:bg-blue-50 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
