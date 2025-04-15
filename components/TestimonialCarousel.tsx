'use client';

import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  text: string;
  name: string;
  position: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'This service was amazing! My event was unforgettable.',
    name: 'John Doe',
    position: 'CEO, Example Inc.',
  },
  {
    text: 'The experience exceeded my expectations. Truly outstanding!',
    name: 'Jane Smith',
    position: 'Founder, Startup Co.',
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
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      className="max-w-xl mx-auto bg-black p-6 rounded shadow-md flex flex-col space-y-4"
      // background comes from inline style "url('/assets/dj-bg-1.jpg')" if used
      // If you don't want an image, remove the backgroundImage style.
      // If you want bg none, you can use bg-transparent as well.
      style={{ backgroundImage: 'none' }} // or remove this line entirely for just bg-black
    >
      <div className="relative z-10 p-4 mx-auto bg-black bg-opacity-50 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="mb-6">
          <TestimonialCard {...testimonials[currentIndex]} />
        </div>
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
}
export default TestimonialsCarousel;

