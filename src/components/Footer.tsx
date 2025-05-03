
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accounting-dark text-white">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">
              Fiscal<span className="text-accounting-400">Flow</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Professional accounting services tailored to help your business grow and succeed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accounting-400" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accounting-400" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accounting-400" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accounting-400" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-accounting-400">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accounting-400">Our Services</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-accounting-400">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accounting-400">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-accounting-400">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#tax-planning" className="text-gray-300 hover:text-accounting-400">Tax Planning & Preparation</Link></li>
              <li><Link to="/services#bookkeeping" className="text-gray-300 hover:text-accounting-400">Bookkeeping Services</Link></li>
              <li><Link to="/services#financial-advisory" className="text-gray-300 hover:text-accounting-400">Financial Advisory</Link></li>
              <li><Link to="/services#audit" className="text-gray-300 hover:text-accounting-400">Audit & Assurance</Link></li>
              <li><Link to="/services#business" className="text-gray-300 hover:text-accounting-400">Business Consulting</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 text-accounting-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Finance Street, Suite 300<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-accounting-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-accounting-400 flex-shrink-0" />
                <span className="text-gray-300">info@fiscalflow.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {currentYear} FiscalFlow Accounting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
