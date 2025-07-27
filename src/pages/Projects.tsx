import React from 'react';
import { Layout } from '../components';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Website',
      description: 'A modern personal website built with React, Vite, and Tailwind CSS',
      image: 'https://via.placeholder.com/400x250/00FF41/000000?text=Personal+Website',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'AI Chatbot (Coming Soon)',
      description: 'An intelligent chatbot that can answer questions about me and my work',
      image: 'https://via.placeholder.com/400x250/00FF41/000000?text=AI+Chatbot',
      technologies: ['React', 'AI/ML', 'Natural Language Processing'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Project Placeholder',
      description: 'This is where your next amazing project will be showcased',
      image: 'https://via.placeholder.com/400x250/00FF41/000000?text=Your+Project',
      technologies: ['Technology', 'Stack', 'Here'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2 text-center font-family-jakarta">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Here are some of the projects I've been working on
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-dark-gray rounded-2xl border border-gray-700 overflow-hidden hover:border-green-400 transition-colors"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 font-family-jakarta">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-green-900 text-terminal-green px-2 py-1 rounded text-sm border border-green-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors text-sm border border-gray-600"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm border border-green-600"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4 font-family-jakarta">
              More Projects Coming Soon!
            </h2>
            <p className="text-gray-300 mb-8">
              I'm always working on something new. Check back soon for more projects.
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600"
            >
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
