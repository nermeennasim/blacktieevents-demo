'use client';

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

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
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <p className="text-lg italic text-gray-800 mb-4">&quot;{text}&quot;</p>
      <div className="flex items-center">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="rounded-full object-cover mr-4"
          />
        ) : (
          // Fallback icon if no image is provided
          <FaHeart className="w-12 h-12 text-red-500 mr-4" />
        )}
        <div className="text-left">
          <p className="text-xl font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
