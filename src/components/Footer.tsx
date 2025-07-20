import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-oxford-blue text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-azure rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JX</span>
              </div>
              <span className="font-bold text-xl">JXING Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Growth-driven digital solutions for SMEs. Turning complex tech into simple, 
              scalable outcomes through automation, AI, and human expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/jxing-tech-group" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-azure transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/jxingtech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-azure transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:hello@jxingtech.my" className="text-gray-400 hover:text-azure transition-smooth">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Section 1: Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-azure transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-azure transition-smooth">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-azure transition-smooth">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-azure transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/website-design" className="text-gray-300 hover:text-azure transition-smooth">
                  Website Design & Development
                </Link>
              </li>
              <li>
                <Link to="/services/content-seo" className="text-gray-300 hover:text-azure transition-smooth">
                  SEO & Brand Storytelling
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-gray-300 hover:text-azure transition-smooth">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link to="/services/paid-ads" className="text-gray-300 hover:text-azure transition-smooth">
                  Paid Ads Management
                </Link>
              </li>
              <li>
                <Link to="/services/crm-automation" className="text-gray-300 hover:text-azure transition-smooth">
                  CRM & Automation
                </Link>
              </li>
              <li>
                <Link to="/services/behavioral-automation" className="text-gray-300 hover:text-azure transition-smooth">
                  Behavioral Automation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-integration" className="text-gray-300 hover:text-azure transition-smooth">
                  AI Integration & Agent Dev
                </Link>
              </li>
              <li>
                <Link to="/services/repurposing" className="text-gray-300 hover:text-azure transition-smooth">
                  Content Repurposing
                </Link>
              </li>
              <li>
                <Link to="/services/content-distribution" className="text-gray-300 hover:text-azure transition-smooth">
                  Journey-Driven Distribution
                </Link>
              </li>
              <li>
                <Link to="/services/website-care" className="text-gray-300 hover:text-azure transition-smooth">
                  Website Care & Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Resources & Clients */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-azure transition-smooth">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/website-growth-playbook" className="text-gray-300 hover:text-azure transition-smooth">
                  Website Growth Playbook
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-azure transition-smooth">
                  Help / FAQ
                </Link>
              </li>
            </ul>
            
            <h4 className="font-semibold text-base mb-3">Clients</h4>
            <Button variant="xanthous" size="sm" asChild>
              <a href="https://clients.jxingtech.com/" target="_blank" rel="noopener noreferrer">
                Client Dashboard Access
              </a>
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        

        {/* Bottom Bar */}
        <div className="border-t border-marian-blue pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 JXING Tech Group Sdn. Bhd. All rights reserved. Powered by JXING Tech Group Sdn. Bhd.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-azure transition-smooth text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-azure transition-smooth text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;