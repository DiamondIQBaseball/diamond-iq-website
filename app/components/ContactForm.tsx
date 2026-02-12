'use client';

import { useState } from 'react';
import { submitContact } from '../actions/contact';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    const result = await submitContact(formData);

    if (result.error) {
      setErrorMessage(result.error);
      setStatus('error');
    } else {
      setStatus('success');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center">
        <div className="text-cyan-400 text-lg font-medium mb-2">Thanks for reaching out!</div>
        <p className="text-gray-400">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="w-full max-w-md space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3
          placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3
          placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3
          placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-700 text-black
          font-semibold py-3 rounded-lg transition"
      >
        {status === 'loading' ? 'Sending...' : 'Get in Touch'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">{errorMessage}</p>
      )}
    </form>
  );
}
