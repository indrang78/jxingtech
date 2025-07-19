import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-oxford-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-azure rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JX</span>
              </div>
              <span className="font-bold text-xl">JXING Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Simplifying complex tech through automation, AI, and human expertise. 
              Growth-driven digital solutions for small to mid-sized businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-azure transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-azure transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:hello@jxingtech.com" className="text-gray-400 hover:text-azure transition-smooth">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-azure transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-azure transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-azure transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-azure transition-smooth">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-azure" />
                <span className="text-gray-300">hello@jxingtech.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-azure" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-azure" />
                <span className="text-gray-300">Remote-First Global Team</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-marian-blue mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 JXING Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;