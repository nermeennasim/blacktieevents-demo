'use client';

import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  text: string;
  name: string;
  position: string;
  image?: string;
}

// Example testimonials – update these to your actual content.
const testimonials: Testimonial[] = [
  {
    text: 'This service was amazing! My event was unforgettable.',
    name: 'John Doe',
    position: 'CEO, Example Inc.',
    // Uncomment next line if you have an image: image: "/assets/testimonial-1.jpg",
  },
  {
    text: 'The experience exceeded my expectations. Truly outstanding!',
    name: 'Jane Smith',
    position: 'Founder, Startup Co.',
    // image: "/assets/testimonial-2.jpg",
  },
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="relative h-96 flex items-center justify-center bg-center"
      style={{ backgroundImage: 'url("/assets/dj-bg-1.jpg")' }}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"       

        style={{ opacity: 0.5 }}
      ></div>
      <div className="relative z-10 p-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          What Our Clients Say
        </h2>
        <div className="mb-6">
          <TestimonialCard {...testimonials[currentIndex]} />
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition"
          >
            &#8592;
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
