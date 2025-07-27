import React from 'react';
import { Layout, Terminal, FileLink } from '../components';

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
      <div className="min-h-[calc(90vh-80px)] flex items-center px-4 sm:px-1 lg:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:ml-8 xl:ml-16">
          <div className="flex flex-col items-start">
            <Terminal commands={commands} />

            {/* Navigation links below terminal */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-start gap-4 sm:gap-6">
              <FileLink to="/about" fileName="about.md" />
              <FileLink to="/projects" fileName="projects.py" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
