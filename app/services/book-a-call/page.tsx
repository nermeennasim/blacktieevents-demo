import React from 'react';

const BookACall = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-6 p-4">
        <h1 className="text-4xl font-bold">Book a Call</h1>
        <p className="text-xl">
          Schedule a time with us through Google Calendar.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-purple-600 rounded-lg text-lg font-medium hover:bg-purple-700 transition"
        >
          Book Now
        </a>
      </div>
    </main>
  );
};

export default BookACall;
