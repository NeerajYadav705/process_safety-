
import { Link } from 'react-router-dom';
import { Shield, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <Shield className="h-8 w-8 text-primary" />
               */}
               <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              src="/assets/logo2.png"
              alt="Process Safety Support Logo"
              className="h-36 w-auto" // adjust size as needed
            
            />
          </Link>
              {/* <span className="text-xl font-bold">Process Safety Support</span> */}
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading process safety consultancy providing comprehensive risk management,
              insurance studies, and training solutions for the oil & gas industry.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Sunil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-white transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:enquiry@processsafetysupport.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  enquiry@processsafetysupport.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Process Safety Support. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
