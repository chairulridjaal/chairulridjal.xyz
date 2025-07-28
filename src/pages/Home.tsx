import React from 'react';
import { Layout, Terminal, FileLink, JarvisOrb } from '../components';

const Home: React.FC = () => {
  const commands = [
    {
      command: 'whoami',
      output: (
        <div>
          <div className="text-white text-lg sm:text-xl">&gt; Mochamad Chairulridjal Nurvikri</div>
          <div className="text-white ml-4 text-he sm:text-lg lg:text-xl">↳ Building the future where code meets climate.</div>
        </div>
      )
    },
    {
      command: 'mission',
      output: (
        <div>
          <div className="text-white text-lg sm:text-xl">
            &gt; <span className="italic">Advancing Technology for Humanity</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <Layout>
      {/* Terminal content */}
      <div className="min-h-[calc(90vh-80px)] flex items-start pt-45 px-4 sm:px-1 lg:px-3 xl:px-6">
        <div className="w-full max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side - Terminal */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <Terminal commands={commands} />

              {/* Navigation links below terminal */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-start gap-4 sm:gap-6">
                <FileLink to="/about" fileName="about.md" />
                <FileLink to="/projects" fileName="projects.py" />
              </div>
            </div>

            {/* Right side - Jarvis Orb (Desktop only) */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center pl-8">
              <div className="relative">
                <JarvisOrb />
                
                {/* Ambient background glow */}
                <div className="absolute inset-0 bg-terminal-green/2 rounded-full blur-3xl scale-110 -z-10"></div>
              </div>
            </div>

          </div>
          
          {/* Floating orb for ultra-wide screens */}
          <div className="hidden 2xl:block absolute -right-32 top-1/2 transform -translate-y-1/2 opacity-20 pointer-events-none">
            <div className="w-96 h-96 bg-terminal-green/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
