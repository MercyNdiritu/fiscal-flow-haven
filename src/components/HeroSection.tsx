
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-accounting-100 to-white pt-32 pb-20">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accounting-dark leading-tight">
              Financial Clarity for Your <span className="text-accounting-600">Business Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Expert accounting solutions tailored to help your business thrive. We handle the numbers so you can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center">
                Get Started <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/services" className="btn-secondary flex items-center justify-center">
                Our Services
              </Link>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md inline-flex items-center mt-8 border border-gray-100">
              <Calculator size={24} className="text-accounting-500 mr-3" />
              <div>
                <span className="block text-sm font-semibold">Need a quick calculation?</span>
                <Link to="/resources#calculators" className="text-accounting-600 hover:underline text-sm">
                  Try our free financial calculators
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-accounting-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accounting-500 rounded-full opacity-10"></div>
            
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-accounting-700 font-bold text-xl mb-4">Why Businesses Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-accounting-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-accounting-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Expert Tax Strategy</span>
                    <p className="text-sm text-gray-500">Minimize tax burden legally and effectively</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-accounting-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-accounting-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Personalized Service</span>
                    <p className="text-sm text-gray-500">Solutions tailored to your unique business needs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-accounting-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-accounting-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold">Financial Insights</span>
                    <p className="text-sm text-gray-500">Data-driven decisions for better outcomes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,165.51,111.44,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
