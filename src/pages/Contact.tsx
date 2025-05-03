
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import AnimateOnScroll from '../components/AnimateOnScroll';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <AnimateOnScroll variant="fadeInDown">
          <div className="bg-gradient-to-r from-accounting-700 to-accounting-800 text-white py-16">
            <div className="container-section">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-accounting-100">
                  Have questions or ready to get started? Reach out to our team of financial experts.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="bounceInUp" delay={0.2}>
          <ContactSection />
        </AnimateOnScroll>
        
        {/* Map Section */}
        <AnimateOnScroll variant="fadeInUp" delay={0.4}>
          <div className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-96 w-full">
                {/* Replace with actual Google Maps embed or another map service */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Map Location: 123 Finance Street, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
