// src/pages/project/page.tsx
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const ProjectPage = () => {
  const projects = [
    {
      name: 'RESUME BY ARAMISH',
      description: 'An innovative solution to simplify tasks and enhance productivity.',
      githubLink: 'https://github.com/SyedaAramish/Resume-By-Aramish.git',
    },
    {
      name: 'FOOD WEBSITE BY ARAMISH',
      description: 'A creative project that combines technology with design principles.',
      githubLink: 'https://github.com/SyedaAramish/food-website.git',
    },
    {
      name: 'BLOG WEBSITE BY ARAISH',
      description: 'An experimental project exploring new ideas in web development.',
      githubLink: 'https://github.com/SyedaAramish/assignment-04.git',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-navy-blue text-gray-100 px-6 py-12">
        <section className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Aramish`&#39;`s Projects</h1>
          <p className="text-lg mb-12">Explore some of my projects and see my work on GitHub.</p>

          {/* Project Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:bg-gray-800"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3">{project.name}</h2>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                </div>

                {/* GitHub Link Hover Effect */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-75 transition-opacity"
                >
                  <span className="text-lg font-semibold text-teal-400">View on GitHub</span>
                </a>
              </div>
            ))}
          </div>

          {/* "For More Projects" Button */}
          <a
            href="https://github.com/SyedaAramish?tab=repositories" // Replace with your GitHub username
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-full shadow-lg transition-colors"
          >
            For More Projects
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
