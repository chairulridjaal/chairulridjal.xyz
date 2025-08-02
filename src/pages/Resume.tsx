import React, { useEffect } from 'react';
import { Layout } from '../components';
import AvatarImage from '../assets/images/Avatar.png';
import AvatarImage2 from '../assets/images/Avatar-2.png';

const Resume: React.FC = () => {
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

  const experiences = [
    {
      title: "President",
      company: "IEEE IPB Student Branch",
      period: "2024 - Present",
      description: "Leading technology-driven programs with impact-focused initiatives across renewable energy, AI, and STEM education.",
      achievements: [
        "Launched Project 2025: Blueprint for Innovation to align IEEE IPB with SDGs",
        "Organized ComVIEEEx: an industry visit program promoting tech-industry collaboration",
        "Coordinated biweekly Tech Insight series focused on AI, clean energy, and SDG progress"
      ]
    },
    {
      title: "Software Developer",
      company: "FydeLabs (Remote)",
      period: "2023 - 2024",
      description: "Optimized AI-powered treasury systems for Web3 platforms, focused on automation and financial efficiency.",
      achievements: [
        "Built Python tools for liquidity optimization and risk management",
        "Improved system speed and reduced asset misallocation by 30%",
        "Worked in a fast-paced remote team using Git, Docker, and REST APIs"
      ]
    },
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "IPB University, Indonesia",
      year: "2023 - 2027 (Expected)",
      gpa: "3.85/4.0",
      description: "Focus on software development, AI for sustainability, and energy technology systems. Specialized in machine learning applications for renewable energy optimization."
    },
  ];

  const achievements = [
  {
    title: "Indonesia's Delegate – World Youth Festival, Russia",
    year: "2024",
    link: "https://fest2024.com/",
    icon: "🌐",
  },
  {
    title: "Indonesia's Delegate – Hitachi Young Leaders Initiative, Bali",
    year: "2024",
    link: "https://www.hitachi.com/society/global/hyli/",
    icon: "🌏",
  },
  {
    title: "Global Youth Representative – Renew Our Power Gathering, Brazil",
    year: "2025",
    link: "https://renewourpower.org/",
    icon: "⚡",
  },
  {
    title: "Beasiswa Unggulan Scholarship Recipient",
    year: "2023–2027",
    link: "https://beasiswaunggulan.kemdikbud.go.id/",
    icon: "🎓",
  },
];


  const skills = {
    "AI/ML & Data": ["Python", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "Jupyter"],
    "Frontend & UI": ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js", "Vite"],
    "Backend & Database": ["Node.js", "Express", "Firebase", "PostgreSQL", "MongoDB"],
    "Tools & Platform": ["Git", "Docker", "AWS", "Vercel", "Linux", "VS Code", "Figma"]
  };

  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 resume-content">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-gray border border-terminal-green/30 mb-6 group hover:border-terminal-green/60 transition-all duration-300 shadow-lg hover:shadow-terminal-green/20">
              <svg className="w-8 h-8 text-terminal-green group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 plus-jakarta-sans">
              Resume
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of my professional journey, technical expertise, 
              and achievements in software development and tech leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="xl:col-span-2 space-y-8">

              {/* Experience Section */}
              <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                <h2 className="text-2xl font-bold text-white mb-6 plus-jakarta-sans flex items-center group-hover:text-terminal-green/90 transition-colors">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3 group-hover:shadow-terminal-green/50 group-hover:shadow-md transition-shadow"></span>
                  Professional Experience
                </h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                      {/* Timeline line */}
                      {index !== experiences.length - 1 && (
                        <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-terminal-green/30"></div>
                      )}
                      
                      <div className="flex items-start space-x-4">
                        {/* Timeline dot */}
                        <div className="flex-shrink-0 w-6 h-6 bg-terminal-green rounded-full border-2 border-dark-black flex items-center justify-center mt-1">
                          <div className="w-2 h-2 bg-dark-black rounded-full"></div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white plus-jakarta-sans group-hover:text-terminal-green/90 transition-colors">
                              {exp.title}
                            </h3>
                            <span className="text-terminal-green font-medium text-sm bg-terminal-green/10 px-3 py-1 rounded-full border border-terminal-green/30 mt-1 sm:mt-0">
                              {exp.period}
                            </span>
                          </div>
                          
                          <div className="text-terminal-green/80 font-medium mb-3">
                            {exp.company}
                          </div>
                          
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                          
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-terminal-green rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {achievement}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                <h2 className="text-2xl font-bold text-white mb-6 plus-jakarta-sans flex items-center group-hover:text-terminal-green/90 transition-colors">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3 group-hover:shadow-terminal-green/50 group-hover:shadow-md transition-shadow"></span>
                  Education
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-terminal-green/30 pl-6 hover:border-terminal-green/60 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white plus-jakarta-sans">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-4 mt-1 sm:mt-0">
                          <span className="text-terminal-green font-medium text-sm bg-terminal-green/10 px-3 py-1 rounded-full border border-terminal-green/30">
                            GPA: {edu.gpa}
                          </span>
                          <span className="text-terminal-green font-medium">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                      <div className="text-terminal-green/80 font-medium mb-3">
                        {edu.institution}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                <h2 className="text-2xl font-bold text-white mb-6 plus-jakarta-sans flex items-center group-hover:text-terminal-green/90 transition-colors">
                  <span className="w-2 h-2 bg-terminal-green rounded-full mr-3 group-hover:shadow-terminal-green/50 group-hover:shadow-md transition-shadow"></span>
                  Key Achievements
                </h2>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-foreground-800/20 transition-all duration-200 group/item">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{achievement.icon}</span>
                        <h3 className="text-base font-medium text-white plus-jakarta-sans">
                          {achievement.title}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-terminal-green text-sm font-medium">
                          {achievement.year}
                        </span>
                        <a 
                          href={achievement.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-terminal-green hover:text-green-300 transition-colors opacity-0 group-hover/item:opacity-100"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Profile & Skills & Contact */}
            <div className="space-y-8">
              
              {/* Profile Section */}
              <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                <div className="text-center">
                  <div className="relative inline-block mb-6 group">
                    <img
                      src={AvatarImage}
                      alt="Mochamad Chairulridjal"
                      className="w-28 h-28 rounded-full border-2 border-terminal-green mx-auto shadow-lg shadow-terminal-green/20 group-hover:shadow-terminal-green/40 group-hover:scale-105 transition-all duration-300 group-hover:opacity-0"
                    />
                    <img
                      src={AvatarImage2}
                      alt="Mochamad Chairulridjal"
                      className="w-28 h-28 rounded-full border-2 border-terminal-green mx-auto shadow-lg shadow-terminal-green/20 group-hover:shadow-terminal-green/40 group-hover:scale-105 transition-all duration-300 absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100"
                    />
                    <div className="absolute -bottom-1 -right-0 w-6 h-6 bg-terminal-green rounded-full border-2 border-dark-black group-hover:shadow-terminal-green/50 group-hover:shadow-lg transition-shadow duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 plus-jakarta-sans group-hover:text-terminal-green/90 transition-colors">
                    Mochamad Chairulridjal
                  </h3>
                  <p className="text-terminal-green/80 font-medium mb-4">
                    Software Developer & Tech Leader
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Passionate about building sustainable technology solutions and leading innovative projects. 
                    Currently focused on AI/ML applications for renewable energy and Web3 development.
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                <h2 className="text-2xl font-bold text-white mb-6 plus-jakarta-sans group-hover:text-terminal-green/90 transition-colors">
                  Technical Skills
                </h2>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-white mb-3 plus-jakarta-sans">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <span
                            key={skill}
                            className="bg-terminal-green/10 text-terminal-green px-3 py-1 rounded-full text-sm font-medium border border-terminal-green/30 hover:bg-terminal-green/20 hover:scale-105 transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                <h2 className="text-2xl font-bold text-white mb-6 plus-jakarta-sans group-hover:text-terminal-green/90 transition-colors">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 plus-jakarta-sans group-hover:text-terminal-green/80 transition-colors">Email</h3>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm">chairulridjal@ieee.org</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 plus-jakarta-sans group-hover:text-terminal-green/80 transition-colors">Location</h3>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm">Jakarta, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-terminal-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-white font-semibold mb-2 plus-jakarta-sans group-hover:text-terminal-green/80 transition-colors">Links</h3>
                      <div className="space-y-2">
                        <a href="https://github.com/chairulridjaal" target="_blank" rel="noopener noreferrer" className="block text-terminal-green hover:text-green-300 hover:ml-2 transition-all duration-200 text-sm">
                          GitHub →
                        </a>
                        <a href="https://linkedin.com/in/mochamad-chairulridjal/" target="_blank" rel="noopener noreferrer" className="block text-terminal-green hover:text-green-300 hover:ml-2 transition-all duration-200 text-sm">
                          LinkedIn →
                        </a>
                        <a href="/" className="block text-terminal-green hover:text-green-300 hover:ml-2 transition-all duration-200 text-sm">
                          Portfolio →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Resume */}
              <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 text-center hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                <button className="w-full bg-terminal-green/10 text-terminal-green px-6 py-3 rounded-xl hover:bg-terminal-green/20 hover:shadow-terminal-green/30 hover:shadow-lg transition-all duration-300 border border-terminal-green/30 plus-jakarta-sans group-hover:scale-105 font-medium">
                  <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
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
