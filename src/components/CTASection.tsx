
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-accounting-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your financial management?</h2>
          <p className="text-lg md:text-xl mb-8 text-accounting-100">
            Schedule a free consultation with our experts and discover how FiscalFlow can support your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white text-accounting-700 hover:bg-accounting-100 px-8 py-3 rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center">
              Schedule Consultation <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/services" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
