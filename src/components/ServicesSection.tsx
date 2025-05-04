
import React from 'react';
import { Calculator, FileText, TrendingUp, CheckCircle, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 'tax-planning',
      icon: <Calculator size={32} className="text-accounting-600" />,
      title: 'Tax Planning & Preparation',
      description: 'Strategic tax planning and accurate preparation for businesses and individuals to minimize tax burden while ensuring full compliance.',
      features: ['Tax Strategy Development', 'Business & Individual Returns', 'IRS Representation', 'Tax Credits Identification']
    },
    {
      id: 'bookkeeping',
      icon: <FileText size={32} className="text-accounting-600" />,
      title: 'Bookkeeping Services',
      description: 'Comprehensive bookkeeping solutions that keep your financial records accurate, up-to-date, and compliant with regulations.',
      features: ['Daily Transaction Recording', 'Financial Statement Preparation', 'Accounts Receivable/Payable', 'Payroll Processing']
    },
    {
      id: 'financial-advisory',
      icon: <TrendingUp size={32} className="text-accounting-600" />,
      title: 'Financial Advisory',
      description: 'Expert financial guidance to help you make informed decisions, optimize operations, and achieve your business goals.',
      features: ['Cash Flow Management', 'Budget Development', 'Financial Forecasting', 'Investment Analysis']
    },
    {
      id: 'audit',
      icon: <CheckCircle size={32} className="text-accounting-600" />,
      title: 'Audit & Assurance',
      description: 'Independent audit services that provide assurance on your financial statements and internal control systems.',
      features: ['Financial Statement Audits', 'Internal Control Reviews', 'Compliance Audits', 'Due Diligence']
    },
    {
      id: 'business',
      icon: <Landmark size={32} className="text-accounting-600" />,
      title: 'Business Consulting',
      description: 'Strategic business consulting to optimize operations, improve profitability, and facilitate sustainable growth.',
      features: ['Business Structure Optimization', 'Process Improvement', 'Growth Strategy Development', 'Merger & Acquisition Advisory']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive financial services designed to support your business at every stage of growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="service-card flex flex-col h-full service-card-hover"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-accounting-800">{service.title}</h3>
              <p className="text-gray-600 mb-5 flex-grow">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accounting-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={`/services#${service.id}`} className="text-accounting-600 font-medium hover:underline inline-flex items-center mt-auto">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
