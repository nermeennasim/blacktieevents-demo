'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 150) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(result.error || 'error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto bg-gradient-to-br from-purple-900 via-black to-purple-700 p-8 rounded-2xl shadow-lg text-white space-y-6"
    >
      <h2 className="text-3xl font-bold text-center">Get in Touch</h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-3 rounded-xl border border-gray-600 bg-black/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="flex-1 px-4 py-3 rounded-xl border border-gray-600 bg-black/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message (max 150 characters)"
        value={formData.message}
        onChange={handleChange}
        required
        maxLength={150}
        rows={5}
        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-black/20 placeholder-gray-300 text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <div className="text-sm text-gray-400">
        {formData.message.length}/150 characters
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center items-center gap-2 bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>

      <AnimatePresence>
        {status && (
          <motion.p
            key="status"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-center text-sm ${
              status === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {status === 'success'
              ? '🎉 Message sent successfully!'
              : '🚫 Something went wrong. Try again.'}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
