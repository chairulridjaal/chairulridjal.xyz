import React, { useEffect, useState, useMemo } from 'react';
import { Layout } from '../components';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedTag, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('');
    setSortBy('newest');
  };

  return (
    <Layout>
      <div 
        className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 blog-content"
        style={{ fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
      >
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-gray border border-terminal-green/30 mb-6 group hover:border-terminal-green/60 transition-all duration-300 shadow-lg hover:shadow-terminal-green/20">
              <svg className="w-8 h-8 text-terminal-green group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Blog Posts
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Thoughts on development, climate tech, and building for the future.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-6 mb-8 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-dark-black border border-foreground-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                  />
                </div>
              </div>

              {/* Tag Filter */}
              <div className="sm:w-48">
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-black border border-foreground-800 rounded-xl text-white focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                >
                  <option value="">All Tags</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="sm:w-40">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-black border border-foreground-800 rounded-xl text-white focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="title">A-Z</option>
                </select>
              </div>

              {/* Clear Filters */}
              {(searchTerm || selectedTag || sortBy !== 'newest') && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-3 bg-gray-700/50 text-gray-300 rounded-xl hover:bg-terminal-green/10 hover:text-terminal-green border border-gray-600 hover:border-terminal-green/30 transition-colors whitespace-nowrap"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Summary */}
            <div className="mt-4 text-sm text-gray-400">
              {filteredPosts.length === blogPosts.length ? (
                `Showing all ${blogPosts.length} posts`
              ) : (
                `Showing ${filteredPosts.length} of ${blogPosts.length} posts`
              )}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-6 mb-16">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-4">No posts found</div>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-dark-gray rounded-2xl border border-foreground-800 overflow-hidden hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20"
                >
                  {/* Image Header */}
                  <div className="relative overflow-hidden h-32 sm:h-40 lg:h-48">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fix the twitching issue by checking current src
                        if (e.currentTarget.src !== `https://via.placeholder.com/800x300/1a1a1a/00FF41?text=${encodeURIComponent(post.title)}`) {
                          e.currentTarget.src = `https://via.placeholder.com/800x300/1a1a1a/00FF41?text=${encodeURIComponent(post.title)}`;
                        }
                      }}
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                        post.status === 'Published' 
                          ? 'bg-terminal-green/20 text-terminal-green border-terminal-green/40' 
                          : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-transparent to-transparent"></div>
                  </div>

                <div className="p-4 lg:p-6">
                  {/* Header with metadata */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h2 className="text-lg lg:text-xl font-semibold text-white mb-1 lg:mb-0 group-hover:text-terminal-green/90 transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center space-x-3 text-gray-400 text-xs lg:text-sm group-hover:text-gray-300 transition-colors">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors line-clamp-2 text-sm lg:text-base">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-terminal-green/10 text-terminal-green px-2 py-1 rounded text-xs border border-terminal-green/30 group-hover:bg-terminal-green/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-gray-400 text-xs py-1">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                    {post.status === 'Published' ? (
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center bg-terminal-green/10 text-terminal-green px-3 lg:px-4 py-2 rounded-lg hover:bg-terminal-green/20 hover:shadow-terminal-green/40 hover:shadow-lg transition-all duration-300 border border-terminal-green/30 hover:border-terminal-green/50 font-medium text-sm"
                      >
                        Read Article
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ) : (
                      <button 
                        className="bg-gray-700/50 text-gray-400 px-3 lg:px-4 py-2 rounded-lg border border-gray-600 font-medium cursor-not-allowed opacity-50 text-sm"
                        disabled
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                  </div>
                </div>
              ))
            )}
          </div>          {/* Call to Action Section */}
          <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 text-center hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-terminal-green/10 border border-terminal-green/30 group-hover:bg-terminal-green/20 transition-colors">
                <svg className="w-6 h-6 text-terminal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-terminal-green/90 transition-colors">
              More Posts Coming Soon
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed group-hover:text-gray-200 transition-colors">
              I'm working on more content about climate tech, web development, and AI. 
              Stay tuned for updates!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-terminal-green/10 text-terminal-green px-6 py-3 rounded-xl hover:bg-terminal-green/20 hover:shadow-terminal-green/40 hover:shadow-lg transition-all duration-300 border border-terminal-green/30 hover:border-terminal-green/50 font-medium">
                Subscribe to Updates
              </button>
              <button className="bg-gray-700/50 text-white px-6 py-3 rounded-xl hover:bg-terminal-green/10 hover:text-terminal-green hover:border-terminal-green/30 transition-all duration-300 border border-gray-600 hover:shadow-terminal-green/20 hover:shadow-lg font-medium">
                RSS Feed
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
