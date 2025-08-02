import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components';
import TableOfContents from '../components/TableOfContents';
import { getBlogPostBySlug } from '../data/blogData';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPost = getBlogPostBySlug(slug || '');

  // Set up SEO meta tags
  useEffect(() => {
    if (blogPost) {
      // Update page title
      document.title = `${blogPost.title} | Chairulridjal's Blog`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', blogPost.seo.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = blogPost.seo.metaDescription;
        document.head.appendChild(meta);
      }

      // Add Open Graph meta tags for social sharing
      const ogTags = [
        { property: 'og:title', content: blogPost.title },
        { property: 'og:description', content: blogPost.seo.metaDescription },
        { property: 'og:image', content: `${window.location.origin}${blogPost.image}` },
        { property: 'og:url', content: window.location.href },
        { property: 'og:type', content: 'article' },
        { property: 'article:author', content: blogPost.author.name },
        { property: 'article:published_time', content: blogPost.date },
        { property: 'article:tag', content: blogPost.tags.join(', ') }
      ];

      // Remove existing OG tags
      document.querySelectorAll('meta[property^="og:"], meta[property^="article:"]').forEach(tag => tag.remove());
      
      // Add new OG tags
      ogTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      });

      // Add Twitter Card meta tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: blogPost.title },
        { name: 'twitter:description', content: blogPost.seo.metaDescription },
        { name: 'twitter:image', content: `${window.location.origin}${blogPost.image}` }
      ];

      // Remove existing Twitter tags
      document.querySelectorAll('meta[name^="twitter:"]').forEach(tag => tag.remove());
      
      // Add new Twitter tags
      twitterTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      });
    }

    // Cleanup function to reset meta tags when component unmounts
    return () => {
      document.title = 'Chairulridjal - Full Stack Developer';
      document.querySelectorAll('meta[property^="og:"], meta[property^="article:"], meta[name^="twitter:"]').forEach(tag => tag.remove());
    };
  }, [blogPost]);

  const handleShare = async () => {
    const shareData = {
      title: blogPost?.title,
      text: blogPost?.excerpt,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.error('Error copying to clipboard:', clipboardError);
      }
    }
  };

  if (!blogPost) {
    return (
      <Layout>
        <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="text-gray-300 mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/blog"
              className="bg-terminal-green/10 text-terminal-green px-6 py-3 rounded-xl hover:bg-terminal-green/20 hover:shadow-terminal-green/40 hover:shadow-lg transition-all duration-300 border border-terminal-green/30 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div 
        className="min-h-screen px-3 sm:px-4 lg:px-8 py-6 sm:py-12 blog-content"
        style={{ fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
      >
        <div className="max-w-4xl xl:max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="mb-6 sm:mb-8">
            <Link 
              to="/blog"
              className="inline-flex items-center text-terminal-green hover:text-white transition-colors font-medium text-sm sm:text-base"
            >
              <span className="mr-2">←</span>
              Back to Blog
            </Link>
          </div>

          <div className="flex gap-6 xl:gap-8">
            {/* Table of Contents - Left Sidebar */}
            <div className="hidden xl:block w-80 flex-shrink-0">
              <TableOfContents content={blogPost.content.intro + '\n\n' + blogPost.content.sections.map(s => `## ${s.title}\n\n${s.content}`).join('\n\n') + '\n\n## Conclusion\n\n' + blogPost.content.conclusion} />
            </div>

            {/* Article Content */}
            <div className="flex-1 min-w-0">
              {/* Article */}
              <article className="bg-dark-gray rounded-xl sm:rounded-2xl border border-foreground-800 overflow-hidden shadow-lg">
            {/* Hero Image */}
            <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
              <img
                src={blogPost.image}
                alt={blogPost.imageAlt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/800x400/1a1a1a/00FF41?text=${encodeURIComponent(blogPost.title)}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-transparent to-transparent"></div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
              {/* Article Header */}
              <div className="border-b border-gray-700 pb-6 sm:pb-8 mb-6 sm:mb-8">
                <div className="flex flex-col gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm mb-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <span>{blogPost.date}</span>
                    <span>•</span>
                    <span>{blogPost.readTime}</span>
                    <span>•</span>
                    <span>{blogPost.author.name}</span>
                  </div>
                </div>
                
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  {blogPost.title}
                </h1>
                
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-terminal-green/10 text-terminal-green px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm border border-terminal-green/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-invert max-w-none">
                {/* Introduction */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {blogPost.content.intro}
                  </p>
                </div>

                {/* Main Sections */}
                {blogPost.content.sections.map((section, index) => {
                  const headingId = section.title
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-')
                    .trim();
                  
                  return (
                    <div key={index} className="mb-6 sm:mb-8">
                      <h2 id={headingId} className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                        {section.title}
                      </h2>
                      
                      {/* Check if section has contentParts for more flexible content */}
                      {section.contentParts ? (
                        <div className="space-y-4 sm:space-y-6">
                          {section.contentParts.map((part, partIndex) => (
                            <div key={partIndex}>
                              {part.type === 'text' && (
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                  {part.content}
                                </p>
                              )}
                              
                              {part.type === 'image' && part.image && (
                                <div className="my-4 sm:my-6">
                                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl border border-gray-700">
                                    <img
                                      src={part.image}
                                      alt={part.imageAlt || `Image for ${section.title}`}
                                      className="w-full h-auto object-cover"
                                      onError={(e) => {
                                        e.currentTarget.src = `https://via.placeholder.com/800x400/1a1a1a/00FF41?text=${encodeURIComponent(section.title + ' Image')}`;
                                      }}
                                    />
                                  </div>
                                  {part.imageCaption && (
                                    <p className="text-gray-400 text-xs sm:text-sm mt-2 text-center italic">
                                      {part.imageCaption}
                                    </p>
                                  )}
                                </div>
                              )}
                              
                              {part.type === 'code' && (
                                <div className="my-4 sm:my-6">
                                  <pre className="bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl p-3 sm:p-6 overflow-x-auto text-xs sm:text-sm">
                                    <code className="text-gray-300">
                                      {part.content}
                                    </code>
                                  </pre>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Fallback to original simple content structure */
                        <>
                          <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                            {section.content}
                          </p>
                          
                          {/* Section Image */}
                          {section.image && (
                            <div className="mb-4 sm:mb-6">
                              <div className="relative overflow-hidden rounded-lg sm:rounded-xl border border-gray-700">
                                <img
                                  src={section.image}
                                  alt={section.imageAlt || `Image for ${section.title}`}
                                  className="w-full h-auto object-cover"
                                  onError={(e) => {
                                    e.currentTarget.src = `https://via.placeholder.com/800x400/1a1a1a/00FF41?text=${encodeURIComponent(section.title + ' Image')}`;
                                  }}
                                />
                              </div>
                              {section.imageCaption && (
                                <p className="text-gray-400 text-xs sm:text-sm mt-2 text-center italic">
                                  {section.imageCaption}
                                </p>
                              )}
                            </div>
                          )}
                          
                          {section.code && (
                            <div className="mb-4 sm:mb-6">
                              <pre className="bg-gray-900 border border-gray-700 rounded-lg sm:rounded-xl p-3 sm:p-6 overflow-x-auto text-xs sm:text-sm">
                                <code className="text-gray-300">
                                  {section.code}
                                </code>
                              </pre>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}

                {/* Conclusion */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 font-family-jakarta">
                    Conclusion
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {blogPost.content.conclusion}
                  </p>
                </div>
              </div>
            </div>

            {/* Author Section */}
            <div className="border-t border-gray-700 p-4 sm:p-6 lg:p-8 xl:p-12">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-terminal-green/10 border border-terminal-green/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-terminal-green text-lg sm:text-xl font-bold">CR</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                    {blogPost.author.name}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {blogPost.author.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="border-t border-gray-700 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-between">
                <Link 
                  to="/blog"
                  className="bg-gray-700/50 text-white px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl hover:bg-terminal-green/10 hover:text-terminal-green hover:border-terminal-green/30 transition-all duration-300 border border-gray-600 text-center font-medium text-sm sm:text-base"
                >
                  ← All Articles
                </Link>
                <button 
                  onClick={handleShare}
                  className="bg-terminal-green/10 text-terminal-green px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl hover:bg-terminal-green/20 hover:shadow-terminal-green/40 hover:shadow-lg transition-all duration-300 border border-terminal-green/30 font-medium flex items-center justify-center text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Share Article
                </button>
              </div>
            </div>
          </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
