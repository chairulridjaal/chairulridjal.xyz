import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! This is just a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          I'd love to hear from you! Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send me a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-gray-900">your.email@example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📱</span>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-gray-900">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-900">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Connect with me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🤖</span>
                <h3 className="text-lg font-semibold text-gray-900">
                  AI Chatbot Coming Soon!
                </h3>
              </div>
              <p className="text-gray-600">
                Soon you'll be able to chat with an AI version of me that can answer 
                questions about my work, experience, and projects. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
