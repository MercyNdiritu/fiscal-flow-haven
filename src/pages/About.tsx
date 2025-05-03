
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import CTASection from '../components/CTASection';
import AnimateOnScroll from '../components/AnimateOnScroll';
import CountUp from '../components/CountUp';

const About = () => {
  const team = [
    {
      name: 'Jennifer Martinez',
      position: 'CEO & Founder',
      bio: 'CPA with 20+ years experience in corporate accounting and tax strategy.',
      image: 'https://source.unsplash.com/random/200x200/?woman,professional,1'
    },
    {
      name: 'Michael Roberts',
      position: 'Chief Financial Advisor',
      bio: 'Former Wall Street analyst specializing in financial forecasting and investment strategy.',
      image: 'https://source.unsplash.com/random/200x200/?man,professional,2'
    },
    {
      name: 'Sarah Wilson',
      position: 'Tax Director',
      bio: 'Tax attorney with expertise in corporate and small business tax optimization.',
      image: 'https://source.unsplash.com/random/200x200/?woman,professional,3'
    },
    {
      name: 'David Chen',
      position: 'Audit Manager',
      bio: 'Certified auditor with experience in both public and private sectors.',
      image: 'https://source.unsplash.com/random/200x200/?man,professional,4'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-accounting-700 to-accounting-800 text-white py-16">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About FiscalFlow</h1>
              <p className="text-xl text-accounting-100">
                Our mission is to provide exceptional financial services that help businesses achieve clarity, compliance, and growth.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-accounting-dark">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, FiscalFlow began with a simple vision: to transform how businesses approach their finances. Our founder, Jennifer Martinez, recognized that many businesses struggled with complex financial systems that provided little insight or strategic value.
              </p>
              <p className="text-gray-600 mb-4">
                Starting with just three dedicated professionals, we built a reputation for combining technical excellence with personalized service. Today, FiscalFlow has grown into a team of over 30 finance professionals serving hundreds of clients across various industries.
              </p>
              <p className="text-gray-600">
                Despite our growth, we maintain our founding principle: delivering financial clarity that empowers our clients to make confident business decisions and achieve sustainable growth.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-0 -left-4 w-72 h-72 bg-accounting-300 rounded-full opacity-20 blur-xl"></div>
              <img 
                src="https://source.unsplash.com/random/600x400/?office,meeting" 
                alt="FiscalFlow team meeting" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="bg-gray-50 py-16 mt-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-accounting-dark">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and represent our commitment to our clients and community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Shield size={40} className="text-accounting-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-accounting-800">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest ethical standards in all our interactions and financial practices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Award size={40} className="text-accounting-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-accounting-800">Excellence</h3>
                <p className="text-gray-600">
                  We strive for exceptional quality in our services, continuously developing our expertise.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Users size={40} className="text-accounting-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-accounting-800">Partnership</h3>
                <p className="text-gray-600">
                  We build collaborative relationships, understanding each client's unique challenges and goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp size={40} className="text-accounting-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-accounting-800">Innovation</h3>
                <p className="text-gray-600">
                  We embrace modern solutions and creative thinking to solve complex financial challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Leadership Team */}
        <AnimateOnScroll variant="bounceIn" threshold={0.2}>
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-accounting-dark">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals who lead our company and ensure we deliver exceptional service to our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-accounting-800">{member.name}</h3>
                    <p className="text-accounting-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
        
        {/* Stats Section with CountUp */}
        <AnimateOnScroll variant="bounceIn" threshold={0.2}>
          <div className="bg-accounting-100 py-16 mt-16">
            <div className="container-section">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-accounting-dark">Our Impact</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  A track record of excellence in providing financial services and solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                  <h3 className="text-accounting-800 font-bold text-4xl">
                    <CountUp end={15} suffix="+" />
                  </h3>
                  <p className="text-gray-600 mt-2">Years Experience</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                  <h3 className="text-accounting-800 font-bold text-4xl">
                    <CountUp end={500} suffix="+" duration={2500} />
                  </h3>
                  <p className="text-gray-600 mt-2">Satisfied Clients</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                  <h3 className="text-accounting-800 font-bold text-4xl">
                    <CountUp end={12} duration={1500} />
                  </h3>
                  <p className="text-gray-600 mt-2">Certified Experts</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                  <h3 className="text-accounting-800 font-bold text-4xl">
                    <CountUp end={98} suffix="%" duration={2200} />
                  </h3>
                  <p className="text-gray-600 mt-2">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        
        {/* Credentials & Certifications */}
        <div className="bg-accounting-100 py-16 mt-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-accounting-dark">Our Credentials</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                FiscalFlow maintains the highest professional standards. Our team includes professionals certified by leading financial institutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-accounting-700 rounded-full flex items-center justify-center text-white mb-4">
                  CPA
                </div>
                <h3 className="text-lg font-bold text-accounting-800 text-center">Certified Public Accountants</h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-accounting-700 rounded-full flex items-center justify-center text-white mb-4">
                  CFP
                </div>
                <h3 className="text-lg font-bold text-accounting-800 text-center">Certified Financial Planners</h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-accounting-700 rounded-full flex items-center justify-center text-white mb-4">
                  EA
                </div>
                <h3 className="text-lg font-bold text-accounting-800 text-center">Enrolled Agents</h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-accounting-700 rounded-full flex items-center justify-center text-white mb-4">
                  MBA
                </div>
                <h3 className="text-lg font-bold text-accounting-800 text-center">Masters of Business Administration</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
      <Footer />
    </>
  );
};

export default About;
