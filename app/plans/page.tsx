import React from 'react';
import Link from 'next/link';

const plans = [
  {
    id: 'plan1',
    title: 'DJ Service with Music',
    description:
      'We provide a top-notch DJ service focusing solely on live music mixing. Enjoy premium entertainment for your event.',
    downPayment: '$100',
    balance: '$200 (due one day before the event)',
  },
  {
    id: 'plan2',
    title: 'DJ Service with Event Organizer',
    description:
      'An all-in-one solution where our DJ service is paired with professional event planning and coordination. Perfect for a seamless experience.',
    downPayment: '$150',
    balance: '$250 (due one day before the event)',
  },
  {
    id: 'plan3',
    title: 'DJ Service with Lights & Extra Screen',
    description:
      'Enhance your event with dynamic lighting and an extra screen for visuals—along with our signature DJ service.',
    downPayment: '$200',
    balance: '$300 (due one day before the event)',
  },
];

export default function Plans() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
                <p className="mb-4">{plan.description}</p>
                <p className="mb-1">
                  <span className="font-bold">Down Payment:</span>{' '}
                  {plan.downPayment}
                </p>
                <p>
                  <span className="font-bold">Balance:</span> {plan.balance}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href={`/checkout?plan=${plan.id}`}
                  className="block text-center bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition"
                >
                  Select &amp; Pay Down Payment Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
