
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ResourcesSection from '../components/ResourcesSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        
        <AnimateOnScroll variant="bounceIn" threshold={0.2}>
          <AboutSection />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="fadeInUp" delay={0.2}>
          <ServicesSection />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="bounceInUp" threshold={0.1}>
          <TestimonialsSection />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="fadeInUp" delay={0.1}>
          <ResourcesSection />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="slideInRight">
          <ContactSection />
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="bounceIn" threshold={0.3}>
          <CTASection />
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
