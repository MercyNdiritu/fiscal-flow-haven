
import React from 'react';
import { Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="section-title">About FiscalFlow</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience, FiscalFlow offers expert accounting and financial services to businesses of all sizes. We combine industry expertise with a personal approach to help our clients achieve financial clarity and business growth.
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4">
                  <Shield size={24} className="text-accounting-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-accounting-800">Professional Excellence</h3>
                  <p className="text-gray-600">
                    Our team of certified professionals brings years of expertise and industry knowledge to every client relationship.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Users size={24} className="text-accounting-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-accounting-800">Client-Centered Approach</h3>
                  <p className="text-gray-600">
                    We develop deep relationships with our clients, understanding their unique needs to deliver tailored solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Clock size={24} className="text-accounting-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-accounting-800">Timely & Reliable</h3>
                  <p className="text-gray-600">
                    We understand the importance of deadlines in financial matters and pride ourselves on being consistently reliable.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 top-0 -left-4 w-72 h-72 bg-accounting-300 rounded-full opacity-20 blur-xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6 transform translate-y-6">
                  <h4 className="text-accounting-800 font-bold text-4xl">15+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-accounting-600 rounded-lg shadow-md p-6 text-white">
                  <h4 className="font-bold text-4xl">500+</h4>
                  <p>Satisfied Clients</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-accounting-800 rounded-lg shadow-md p-6 text-white">
                  <h4 className="font-bold text-4xl">12</h4>
                  <p>Certified Experts</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 transform translate-y-6">
                  <h4 className="text-accounting-800 font-bold text-4xl">98%</h4>
                  <p className="text-gray-600">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
