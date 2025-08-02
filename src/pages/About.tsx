import React, { useEffect } from 'react';
import { Layout } from '../components';
import Chatbot from '../components/chatbot/Chatbot';
import SpotifyNowPlaying from '../components/ui/SpotifyNowPlaying';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, []);

  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 about-content">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6 group">
              <img
                src="/assets/images/Avatar.png"
                alt="Chairulridjal"
                className="w-28 h-28 rounded-full border-2 border-terminal-green mx-auto shadow-lg shadow-terminal-green/20 group-hover:shadow-terminal-green/40 group-hover:scale-105 transition-all duration-300 group-hover:opacity-0"
              />
              <img
                src="/assets/images/Avatar-2.png"
                alt="Chairulridjal"
                className="w-28 h-28 rounded-full border-2 border-terminal-green mx-auto shadow-lg shadow-terminal-green/20 group-hover:shadow-terminal-green/40 group-hover:scale-105 transition-all duration-300 absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100"
              />
              <div className="absolute -bottom-1 -right-0 w-6 h-6 bg-terminal-green rounded-full border-2 border-dark-black group-hover:shadow-terminal-green/50 group-hover:shadow-lg transition-shadow duration-300"></div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3 font-family-jakarta">
            Mochamad Chairulridjal
            </h1>
            <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
            I'm a developer passionate about machine learning and renewable energy. I enjoy building real-world tools that make a positive impact.
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center items-center space-x-6 mb-8">
              <a 
                href="mailto:chairulridjal@ieee.org" 
                className="group flex items-center justify-center w-12 h-12 rounded-xl border border-gray-600/50 hover:border-terminal-green/80 hover:shadow-terminal-green/40 hover:shadow-xl transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.4)] hover:scale-110 bg-dark-gray/30 backdrop-blur-sm"
                title="Email"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-terminal-green transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com/in/mochamad-chairulridjal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl border border-gray-600/50 hover:border-terminal-green/80 hover:shadow-terminal-green/40 hover:shadow-xl transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.4)] hover:scale-110 bg-dark-gray/30 backdrop-blur-sm"
                title="LinkedIn"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-terminal-green transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href="https://github.com/chairulridjaal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl border border-gray-600/50 hover:border-terminal-green/80 hover:shadow-terminal-green/40 hover:shadow-xl transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.4)] hover:scale-110 bg-dark-gray/30 backdrop-blur-sm"
                title="GitHub"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-terminal-green transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href="https://instagram.com/chairulridjaal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-xl border border-gray-600/50 hover:border-terminal-green/80 hover:shadow-terminal-green/40 hover:shadow-xl transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.4)] hover:scale-110 bg-dark-gray/30 backdrop-blur-sm"
                title="Instagram"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-terminal-green transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.167 3.632 2.182 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c3.629-.167 5.652-2.182 5.817-5.817C19.988 13.056 20 12.716 20 10s-.012-3.056-.60-4.123C19.773 2.245 17.755.228 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.009 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            {/* Left Column - About Content */}
            <div className="flex flex-col space-y-8 h-full">
              <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                <h2 className="text-2xl font-bold text-white mb-6 font-family-jakarta flex items-center group-hover:text-terminal-green/90 transition-colors">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3 group-hover:shadow-terminal-green/50 group-hover:shadow-md transition-shadow"></span>
                  About Me
                </h2>
                
                <div className="space-y-6">
                  {/* Quick intro */}
                  <div className="bg-terminal-green/5 border-l-4 border-terminal-green/30 pl-4 py-3 rounded-r-lg">
                    <p className="text-gray-300 leading-relaxed">
                      Hey! I'm Ridjal, a developer from Indonesia who's passionate about using 
                      <span className="text-terminal-green font-medium"> AI to tackle climate challenges</span>. 
                      I believe technology should serve both humanity and our planet.
                    </p>
                  </div>

                  {/* Key highlights */}
                  <div className="space-y-4">
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">Current Focus:</span> Building AI models for renewable energy 
                          optimization and leading tech communities at IEEE & GDG on Campus.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">When Not Coding:</span> Exploring renewable energy research, 
                          discovering new music, playing games, and fostering cross-cultural collaboration.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Call to action */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-gray-400 text-sm italic">
                      💬 Want to know more? Ask me anything using the chatbot! →
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills Section - This will expand to fill remaining space */}
              <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20 flex-1">
                <h2 className="text-2xl font-bold text-white mb-6 font-family-jakarta flex items-center group-hover:text-terminal-green/90 transition-colors">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3 group-hover:shadow-terminal-green/50 group-hover:shadow-md transition-shadow"></span>
                  Technical Skills
                </h2>
                
                <div className="space-y-6">
                  {/* Skills categories */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">AI/ML & Data:</span> Python, TensorFlow, PyTorch, 
                          Pandas, NumPy, Scikit-learn, Jupyter
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">Frontend & UI:</span> React, TypeScript, JavaScript, 
                          Tailwind CSS, Next.js, Vite
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">Backend & Database:</span> Node.js, Firebase, 
                          PostgreSQL, MongoDB
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-300 text-sm">
                          <span className="text-white font-medium">Tools & Platform:</span> Git, Docker, AWS, 
                          Vercel, Linux, VS Code
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-4 text-center hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                  <div className="text-2xl font-bold text-terminal-green font-family-jakarta group-hover:scale-110 transition-transform">4+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Years Experience</div>
                </div>
                <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-4 text-center hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                  <div className="text-2xl font-bold text-terminal-green font-family-jakarta group-hover:scale-110 transition-transform">10+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Projects Built</div>
                </div>
                <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-4 text-center hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                  <div className="text-2xl font-bold text-terminal-green font-family-jakarta group-hover:scale-110 transition-transform">∞</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Always Learning</div>
                </div>
              </div>
            </div>

            {/* Right Column - Chatbot */}
            <div className="space-y-8">
              <Chatbot />

              {/* Spotify Now Playing */}
              <SpotifyNowPlaying />
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-12 bg-dark-gray rounded-2xl border border-foreground-800 p-9 text-center hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
            <div className="max-w-3xl mx-auto">
              <svg className="w-12 h-12 text-terminal-green/30 mx-auto mb-6 group-hover:text-terminal-green/50 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              <blockquote className="text-2xl text-gray-300 font-medium italic mb-4 group-hover:text-gray-200 transition-colors">
                "All that you touch you change. All that you change changes you. The only lasting truth is change."
              </blockquote>
              <cite className="text-terminal-green font-family-jakarta">— Octavia E. Butler, Parable of the Sower</cite>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
