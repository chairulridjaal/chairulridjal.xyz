import React, { useEffect } from 'react';
import { Layout } from '../components';

const Projects: React.FC = () => {
  useEffect(() => {
    // Simple, immediate scroll to top
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Personal Website',
      description: 'A modern personal website built with React, TypeScript, and Tailwind CSS. Features AI chatbot integration, Spotify API, and multilingual support.',
      image: 'src/assets/images/HerdSphere Logo_ Livestock Management Solution.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'OpenRouter AI'],
      github: '#',
      demo: '#',
      status: 'Active',
    },
    {
      id: 2,
      title: 'AI Chatbot Integration',
      description: 'Intelligent chatbot powered by GPT-4o-mini through OpenRouter API. Supports multilingual conversations and provides personalized responses.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/00FF41?text=AI+Chatbot',
      technologies: ['OpenRouter API', 'GPT-4o-mini', 'React', 'TypeScript'],
      github: '#',
      demo: '#',
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Machine Learning Projects',
      description: 'Collection of ML projects focusing on renewable energy optimization and data analysis. Built with Python and modern ML frameworks.',
      image: 'https://via.placeholder.com/400x250/1a1a1a/00FF41?text=ML+Projects',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      github: '#',
      demo: '#',
      status: 'In Progress',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-gray border border-terminal-green/30 mb-6 group hover:border-terminal-green/60 transition-all duration-300 shadow-lg hover:shadow-terminal-green/20">
              <svg className="w-8 h-8 text-terminal-green group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 font-family-jakarta">
              My Projects
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A showcase of my development journey, from web applications to AI integrations. 
              Each project represents a step forward in my continuous learning process.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-dark-gray rounded-2xl border border-foreground-800 overflow-hidden hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                      project.status === 'Completed' 
                        ? 'bg-terminal-green/20 text-terminal-green border-terminal-green/40' 
                        : project.status === 'Active'
                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/40'
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title with Terminal Prompt */}
                  <div className="flex items-center mb-3">
                    <span className="text-terminal-green mr-2 font-mono text-sm">$</span>
                    <h3 className="text-xl font-semibold text-white font-family-jakarta group-hover:text-terminal-green/90 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-terminal-green/10 text-terminal-green px-3 py-1 rounded-lg text-xs border border-terminal-green/30 group-hover:bg-terminal-green/20 group-hover:shadow-terminal-green/30 group-hover:shadow-sm transition-all font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 bg-foreground-800/50 text-gray-300 px-4 py-2.5 rounded-xl hover:bg-terminal-green/10 hover:text-terminal-green hover:border-terminal-green/30 transition-all duration-300 text-sm text-center border border-foreground-700 hover:shadow-terminal-green/20 hover:shadow-lg font-medium"
                    >
                      <span className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        Code
                      </span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 bg-terminal-green/10 text-terminal-green px-4 py-2.5 rounded-xl hover:bg-terminal-green/20 hover:shadow-terminal-green/40 hover:shadow-lg transition-all duration-300 text-sm text-center border border-terminal-green/30 hover:border-terminal-green/50 font-medium"
                    >
                      <span className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 text-center hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
            {/* Terminal Header */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-terminal-green/10 border border-terminal-green/30 group-hover:bg-terminal-green/20 transition-colors">
                <svg className="w-6 h-6 text-terminal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4 font-family-jakarta group-hover:text-terminal-green/90 transition-colors">
              More Projects in Development
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm constantly working on new projects and learning new technologies. 
              Follow my GitHub to stay updated with my latest work and contributions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-terminal-green/10 text-terminal-green px-6 py-3 rounded-xl hover:bg-terminal-green/20 hover:shadow-terminal-green/40 hover:shadow-lg transition-all duration-300 border border-terminal-green/30 hover:border-terminal-green/50 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View All Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-foreground-800/50 text-gray-300 px-6 py-3 rounded-xl hover:bg-terminal-green/10 hover:text-terminal-green hover:border-terminal-green/30 transition-all duration-300 border border-foreground-700 hover:shadow-terminal-green/20 hover:shadow-lg font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
