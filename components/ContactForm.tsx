// app/components/ContactForm.tsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 150) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://formspree.io/f/xnnpweal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to send. Try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-black p-6 rounded shadow-md flex flex-col space-y-4"
    >
      <h2 className="text-2xl font-semibold text-white-800">Contact Us</h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message (max 150 characters)"
        value={formData.message}
        onChange={handleChange}
        required
        maxLength={150}
        className="w-full px-4 py-2 border border-gray-300 rounded resize-none"
        rows={5}
      />

      <div className="text-sm text-gray-500">
        {formData.message.length}/150 characters
      </div>

      <button
        type="submit"
        className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Send Message
      </button>

      {status && (
        <p
          className={`text-sm text-center ${
            status.includes('success') ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
