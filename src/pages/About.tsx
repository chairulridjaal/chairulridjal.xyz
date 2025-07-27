import React from 'react';
import { Layout } from '../components';
import Chatbot from '../components/chatbot/Chatbot';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* Left Column - About Content */}
            <div className="space-y-8">
              <div className="bg-dark-gray rounded-lg border border-gray-700 p-8">
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                  <div className="lg:w-1/3">
                    <img
                      src="https://via.placeholder.com/300x300/131313/00FF41?text=Your+Photo"
                      alt="About me"
                      className="w-full rounded-lg border border-gray-600"
                    />
                  </div>
                  <div className="lg:w-2/3 flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold text-white mb-4 font-family-jakarta">
                      Hello, I'm Chairulridjal
                    </h2>
                    <p className="text-gray-300 mb-4">
                      I'm a passionate developer who loves creating innovative digital solutions. 
                      With a background in modern web technologies, I enjoy building applications 
                      that make a real difference in people's lives.
                    </p>
                    <p className="text-gray-300">
                      When I'm not coding, you can find me exploring new technologies, 
                      reading about AI advancements, or working on creative side projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-gray rounded-lg border border-gray-700 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 font-family-jakarta">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'Tailwind CSS', 'Vite'].map((skill) => (
                        <span
                          key={skill}
                          className="bg-green-900 text-terminal-green px-3 py-1 rounded-full text-sm font-medium border border-green-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 font-family-jakarta">Interests</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Artificial Intelligence & Machine Learning</li>
                      <li>• Web Development & Modern Frameworks</li>
                      <li>• User Experience Design</li>
                      <li>• Open Source Contributions</li>
                      <li>• Technology Innovation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-dark-gray rounded-lg border border-gray-700 p-8">
                <h3 className="text-xl font-semibold text-white mb-4 font-family-jakarta">Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-green-400 pl-4">
                    <h4 className="text-white font-medium">Full-Stack Developer</h4>
                    <p className="text-gray-400 text-sm">2023 - Present</p>
                    <p className="text-gray-300 text-sm mt-2">Building modern web applications with React, TypeScript, and Node.js</p>
                  </div>
                  <div className="border-l-2 border-green-400 pl-4">
                    <h4 className="text-white font-medium">AI/ML Enthusiast</h4>
                    <p className="text-gray-400 text-sm">2022 - Present</p>
                    <p className="text-gray-300 text-sm mt-2">Exploring artificial intelligence and machine learning technologies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Chatbot */}
            <div className="xl:sticky xl:top-8">
              <Chatbot />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
