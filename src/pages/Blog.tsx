import React from 'react';
import { Layout } from '../components';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Climate-Tech Solutions with Code",
      date: "2025-01-15",
      excerpt: "How I'm using technology to tackle climate challenges and create sustainable solutions for the future.",
      readTime: "5 min read",
      tags: ["climate-tech", "sustainability", "javascript"]
    },
    {
      id: 2,
      title: "My Journey into Full-Stack Development",
      date: "2025-01-10",
      excerpt: "From learning my first programming language to building complex web applications - here's my story.",
      readTime: "7 min read",
      tags: ["career", "web-development", "react"]
    },
    {
      id: 3,
      title: "The Future of AI in Environmental Science",
      date: "2025-01-05",
      excerpt: "Exploring how artificial intelligence can revolutionize environmental research and conservation efforts.",
      readTime: "6 min read",
      tags: ["AI", "environment", "machine-learning"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12 text-center font-family-jakarta">
            Blog Posts
          </h1>
          
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-white mb-2 md:mb-0 font-family-jakarta group-hover:text-terminal-green/90 transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-terminal-green/10 text-terminal-green px-3 py-1 rounded-full text-sm font-medium border border-terminal-green/30 group-hover:bg-terminal-green/20 group-hover:shadow-terminal-green/30 group-hover:shadow-sm transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="bg-gray-700/50 text-white px-6 py-3 rounded-lg hover:bg-terminal-green/20 hover:text-terminal-green hover:border-terminal-green/50 transition-all duration-200 border border-gray-600 font-family-jakarta">
                  Read Article →
                </button>
              </div>
            ))}
            
            <div className="text-center mt-16">
              <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-12 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
                <h2 className="text-2xl font-semibold text-white mb-4 font-family-jakarta group-hover:text-terminal-green/90 transition-colors">
                  More Posts Coming Soon!
                </h2>
                <p className="text-gray-300 mb-8 group-hover:text-gray-200 transition-colors">
                  I'm working on more content about climate tech, web development, and AI. 
                  Stay tuned for updates!
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-terminal-green/10 text-terminal-green px-6 py-3 rounded-lg hover:bg-terminal-green/20 hover:shadow-terminal-green/30 hover:shadow-sm transition-all duration-200 border border-terminal-green/30 font-family-jakarta">
                    Subscribe to Updates
                  </button>
                  <button className="bg-gray-700/50 text-white px-6 py-3 rounded-lg hover:bg-terminal-green/20 hover:text-terminal-green hover:border-terminal-green/50 transition-all duration-200 border border-gray-600 font-family-jakarta">
                    RSS Feed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
