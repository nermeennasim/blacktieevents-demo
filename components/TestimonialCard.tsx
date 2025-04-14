'use client';

import React from 'react';

interface TestimonialCardProps {
  text: string;
  name: string;
  position: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  position,
  image,
}) => {
  return (
    <div className="bg-purple-700 text-white-200 p-6 rounded-lg shadow-md w-full md:w-1/3 mx-auto">
      <p className="italic text-white-700 font-bold mb-4">&quot;{text}&quot;</p>
      <div className="flex items-center">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-white">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
