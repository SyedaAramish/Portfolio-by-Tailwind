import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-navy-blue text-gray-100 px-6 py-12">
        <section className="container mx-auto flex flex-col items-center md:flex-row gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/images/pic.jpg"
              alt="Profile"
              width={300} // Adjust width and height as needed
              height={300}
              className="rounded-2xl border-2 border-white-400 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Me</h1>
            <p className="text-lg leading-relaxed mb-4">
              Hello! I am <span className="text-teal-400 font-semibold">Syeda Aramish</span>, a dedicated and passionate student currently exploring the intersection of technology, design, and creativity. My journey involves blending my technical knowledge with innovative ideas to build captivating projects.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I have a strong interest in computer science and love applying my skills to real-world projects. Whether it is developing web applications or working on design layouts, I strive to push my limits and continuously learn.
            </p>
            <p className="text-lg leading-relaxed">
              My ambition is to contribute to impactful work and develop a well-rounded skill set that sets me apart. Join me in discovering the projects and experiences that make up my story.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
