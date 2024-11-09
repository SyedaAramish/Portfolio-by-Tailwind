// src/pages/HomePage.js 
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-navy-blue text-gray-100 px-6 py-12">
        <section className="container mx-auto flex flex-col items-center justify-center text-center px-6 py-20">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to My Portfolio
          </h1>
          
          {/* Subtitle Text */}
          <p className="text-sm md:text-base text-gray-100 italic mb-6 max-w-2xl">
            I am Syeda Aramish, a passionate developer and designer. Explore my projects, skills, and experiences that showcase my journey in technology and creativity.
          </p>

          {/* Description Text */}
          <p className="text-sm md:text-base text-gray-100 leading-relaxed mb-4 max-w-2xl">
            My work spans a variety of fields, from web development to graphic design. I enjoy turning ideas into reality and constantly strive to improve my skills and knowledge.
          </p>
          <p className="text-sm md:text-base text-gray-100 leading-relaxed mb-8 max-w-2xl">
            I believe in the power of creativity combined with technology to create meaningful experiences. Join me as I share my journey and projects that reflect my passion for innovation and design.
          </p>

          {/* Call-to-Action Button */}
          <Link href="/projects" className="px-8 py-3 bg-blue-700 hover:bg-blue-600 transition-colors rounded-lg text-white font-semibold shadow-md hover:shadow-lg">
            View My Work
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
