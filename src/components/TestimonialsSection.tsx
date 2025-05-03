
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, InnovateRetail',
      content: 'FiscalFlow transformed our financial management. Their strategic tax planning saved us thousands while their proactive advice helped us make informed business decisions. They truly care about our success.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Brown',
      position: 'Founder, TechStart Solutions',
      content: 'As a tech startup, we needed financial guidance that could grow with us. The team at FiscalFlow has been with us every step of the way, from initial bookkeeping to complex financial strategy as we scaled.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Williams',
      position: 'Operations Director, HealthPro Services',
      content: 'The expertise and personal attention we receive from FiscalFlow is unmatched. They handle our complex healthcare accounting needs with precision and always make us feel like their top priority.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Chen',
      position: 'CFO, GreenBuild Construction',
      content: 'Working with FiscalFlow has been a game-changer for our construction business. Their industry-specific knowledge and attention to detail have improved our financial processes and profitability.',
      rating: 5
    },
    {
      id: 5,
      name: 'Amanda Rodriguez',
      position: 'Owner, Artisan Cafe Chain',
      content: 'Managing multiple locations became so much easier with FiscalFlow. Their bookkeeping services are efficient and accurate, and their financial insights have helped us expand smartly.',
      rating: 4
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Display 3 testimonials on desktop, 1 on mobile
  const visibleTestimonials = [];
  for (let i = 0; i < 3; i++) {
    visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
  }

  return (
    <section className="py-20 bg-accounting-100">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Discover why businesses trust FiscalFlow with their financial management and accounting needs.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-current" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} size={18} className="text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-accounting-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Testimonial */}
          <div className="md:hidden">
            <div className="testimonial-card">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-current" />
                ))}
                {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i + testimonials[currentIndex].rating} size={18} className="text-gray-300" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonials[currentIndex].content}"</p>
              <div>
                <h4 className="font-semibold text-accounting-800">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-accounting-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-accounting-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
