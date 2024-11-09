// src/pages/ContactPage.js
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-navy-blue text-gray-100 px-6 py-12 flex flex-col items-center">
        <section className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-gray-300 text-sm md:text-base mb-12 max-w-xl mx-auto">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form below.
          </p>
  
          {/* Contact Form */}
          <form className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-md bg-gray-900 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                placeholder="Your Name"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-md bg-gray-900 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                placeholder="Your Email"
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-md bg-gray-900 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                placeholder="Your Message"
              />
            </div>
  
            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-500 hover:bg-teal-400 transition-colors rounded-md text-black font-semibold shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
