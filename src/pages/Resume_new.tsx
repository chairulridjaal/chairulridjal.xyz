import React from 'react';
import { Layout } from '../components';

const Resume: React.FC = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Climate Tech Solutions",
      period: "2023 - Present",
      description: "Building modern web applications with React, TypeScript, and Node.js focused on sustainable technology solutions.",
      achievements: [
        "Developed climate monitoring dashboard using React and D3.js",
        "Implemented real-time data visualization for environmental metrics",
        "Built responsive interfaces serving 10,000+ users daily"
      ]
    },
    {
      title: "AI/ML Enthusiast",
      company: "Personal Projects",
      period: "2022 - Present",
      description: "Exploring artificial intelligence and machine learning technologies for environmental applications.",
      achievements: [
        "Created energy optimization algorithms using Python and TensorFlow",
        "Developed predictive models for renewable energy forecasting",
        "Published research on AI applications in climate science"
      ]
    }
  ];

  const education = [
    {
      degree: "Computer Science",
      institution: "University",
      year: "2020-2024",
      description: "Focused on software engineering, AI/ML, and environmental computing"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Vite", "Next.js"],
    "Backend": ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"],
    "AI/ML": ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn"],
    "Tools": ["Git", "Docker", "AWS", "Vercel", "Figma"]
  };

  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4 font-family-jakarta">
              Resume
            </h1>
            <p className="text-xl text-gray-300">
              Full-Stack Developer • Climate Tech Enthusiast • AI/ML Explorer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Experience Section */}
              <div className="bg-dark-gray rounded-2xl border border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 font-family-jakarta">
                  Experience
                </h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-green-400 pl-6">
                      <h3 className="text-xl font-semibold text-white font-family-jakarta">
                        {exp.title}
                      </h3>
                      <div className="text-terminal-green font-medium mb-2">
                        {exp.company} • {exp.period}
                      </div>
                      <p className="text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-terminal-green mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-dark-gray rounded-2xl border border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 font-family-jakarta">
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-green-400 pl-6">
                      <h3 className="text-xl font-semibold text-white font-family-jakarta">
                        {edu.degree}
                      </h3>
                      <div className="text-terminal-green font-medium mb-2">
                        {edu.institution} • {edu.year}
                      </div>
                      <p className="text-gray-300">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Skills & Contact */}
            <div className="space-y-8">
              
              {/* Skills Section */}
              <div className="bg-dark-gray rounded-2xl border border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 font-family-jakarta">
                  Skills
                </h2>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-white mb-3 font-family-jakarta">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <span
                            key={skill}
                            className="bg-green-900 text-terminal-green px-3 py-1 rounded-full text-sm font-medium border border-green-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact & Links */}
              <div className="bg-dark-gray rounded-2xl border border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 font-family-jakarta">
                  Contact
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2 font-family-jakarta">Email</h3>
                    <p className="text-gray-300">contact@chairulridjal.xyz</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 font-family-jakarta">Location</h3>
                    <p className="text-gray-300">Indonesia</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 font-family-jakarta">Links</h3>
                    <div className="space-y-2">
                      <a href="#" className="block text-terminal-green hover:text-green-300 transition-colors">
                        GitHub →
                      </a>
                      <a href="#" className="block text-terminal-green hover:text-green-300 transition-colors">
                        LinkedIn →
                      </a>
                      <a href="#" className="block text-terminal-green hover:text-green-300 transition-colors">
                        Portfolio →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Resume */}
              <div className="bg-dark-gray rounded-2xl border border-gray-700 p-8 text-center">
                <button className="w-full bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors border border-green-600 font-family-jakarta">
                  Download PDF Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
