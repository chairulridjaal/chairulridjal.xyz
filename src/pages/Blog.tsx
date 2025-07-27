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
              <div key={post.id} className="bg-dark-gray rounded-2xl border border-gray-700 p-8 hover:border-green-400 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl font-semibold text-white mb-2 md:mb-0 font-family-jakarta">
                    {post.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-900 text-terminal-green px-3 py-1 rounded-full text-sm font-medium border border-green-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600 font-family-jakarta">
                  Read Article →
                </button>
              </div>
            ))}
            
            <div className="text-center mt-16">
              <div className="bg-dark-gray rounded-2xl border border-gray-700 p-12">
                <h2 className="text-2xl font-semibold text-white mb-4 font-family-jakarta">
                  More Posts Coming Soon!
                </h2>
                <p className="text-gray-300 mb-8">
                  I'm working on more content about climate tech, web development, and AI. 
                  Stay tuned for updates!
                </p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors border border-green-600 font-family-jakarta">
                    Subscribe to Updates
                  </button>
                  <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600 font-family-jakarta">
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
