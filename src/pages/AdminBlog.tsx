import React, { useState, useEffect } from 'react';
import { Layout } from '../components';
import { createSlug, blogPosts } from '../data/blogData';

const AdminBlog: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [showCode, setShowCode] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    readTime: '',
    tags: '',
    status: 'Draft' as 'Published' | 'Draft',
    image: '',
    imageAlt: '',
    intro: '',
    sections: [{ title: '', content: '', code: '' }],
    conclusion: '',
    metaDescription: '',
    keywords: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be more secure, but for client-side it's basic protection
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
    if (password === adminPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSectionChange = (index: number, field: string, value: string) => {
    const newSections = [...formData.sections];
    newSections[index] = { ...newSections[index], [field]: value };
    setFormData(prev => ({ ...prev, sections: newSections }));
  };

  const addSection = () => {
    setFormData(prev => ({
      ...prev,
      sections: [...prev.sections, { title: '', content: '', code: '' }]
    }));
  };

  const removeSection = (index: number) => {
    if (formData.sections.length > 1) {
      const newSections = formData.sections.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, sections: newSections }));
    }
  };

  const generateBlogPost = () => {
    const nextId = Math.max(...blogPosts.map(post => post.id)) + 1;
    const slug = createSlug(formData.title);
    const currentDate = new Date().toISOString().split('T')[0];
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    const keywordsArray = formData.keywords.split(',').map(keyword => keyword.trim()).filter(keyword => keyword);

    const sections = formData.sections
      .filter(section => section.title && section.content)
      .map(section => {
        const sectionObj: any = {
          title: section.title,
          content: section.content
        };
        if (section.code.trim()) {
          sectionObj.code = section.code;
        }
        return sectionObj;
      });

    const blogPostCode = `{
  id: ${nextId},
  title: "${formData.title}",
  slug: "${slug}",
  date: "${currentDate}",
  excerpt: "${formData.excerpt}",
  readTime: "${formData.readTime}",
  tags: ${JSON.stringify(tagsArray)},
  status: "${formData.status}",
  image: "/assets/images/blog/${formData.image}",
  imageAlt: "${formData.imageAlt}",
  content: {
    intro: "${formData.intro}",
    sections: ${JSON.stringify(sections, null, 4).replace(/"/g, '"')},
    conclusion: "${formData.conclusion}"
  },
  author: {
    name: "Chairulridjal",
    bio: "Full-stack developer passionate about climate tech and sustainable software development."
  },
  seo: {
    metaDescription: "${formData.metaDescription}",
    keywords: ${JSON.stringify(keywordsArray)}
  }
}`;

    setGeneratedCode(blogPostCode);
    setShowCode(true);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      alert('Code copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy code. Please copy manually.');
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
          <div className="max-w-md w-full">
            <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-terminal-green/10 border border-terminal-green/30 mb-6">
                  <svg className="w-8 h-8 text-terminal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-white mb-2 font-family-jakarta">
                  Admin Access
                </h1>
                <p className="text-gray-300">
                  Enter the admin password to create new blog posts
                </p>
              </div>

              <form onSubmit={handleAuth} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                      placeholder="Enter admin password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.465 8.465M9.878 9.878l1.414-1.414M21 12a9 9 0 01-2.657 6.343m-7.686-7.686L8.465 8.465m2.828 2.828L8.465 8.465" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-terminal-green/10 text-terminal-green px-6 py-3 rounded-xl hover:bg-terminal-green/20 hover:shadow-terminal-green/40 hover:shadow-lg transition-all duration-300 border border-terminal-green/30 font-medium"
                >
                  Access Admin Panel
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4 font-family-jakarta">
              Create New Blog Post
            </h1>
            <p className="text-gray-300">
              Fill out the form below to generate the blog post code
            </p>
          </div>

          <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 shadow-lg">
            <div className="space-y-8">
              {/* Basic Information */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 font-family-jakarta">
                  Basic Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                      placeholder="Your blog post title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Read Time *
                    </label>
                    <input
                      type="text"
                      value={formData.readTime}
                      onChange={(e) => handleInputChange('readTime', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                      placeholder="e.g., 5 min read"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                    placeholder="A compelling summary of your post (keep under 160 characters)"
                    required
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    {formData.excerpt.length}/160 characters
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tags * (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => handleInputChange('tags', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                      placeholder="e.g., react, javascript, web-development"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Image Information */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 font-family-jakarta">
                  Image Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Image Filename * (without path)
                    </label>
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) => handleInputChange('image', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                      placeholder="e.g., my-blog-hero.jpg"
                      required
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Upload your image to /public/assets/images/blog/
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Image Alt Text *
                    </label>
                    <input
                      type="text"
                      value={formData.imageAlt}
                      onChange={(e) => handleInputChange('imageAlt', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                      placeholder="Descriptive alt text for accessibility"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 font-family-jakarta">
                  Content
                </h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Introduction *
                  </label>
                  <textarea
                    value={formData.intro}
                    onChange={(e) => handleInputChange('intro', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                    placeholder="Write your introduction paragraph..."
                    required
                  />
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Sections</h3>
                    <button
                      type="button"
                      onClick={addSection}
                      className="bg-terminal-green/10 text-terminal-green px-4 py-2 rounded-lg hover:bg-terminal-green/20 transition-colors border border-terminal-green/30 text-sm"
                    >
                      Add Section
                    </button>
                  </div>

                  {formData.sections.map((section, index) => (
                    <div key={index} className="bg-gray-900 rounded-xl p-6 mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-medium">Section {index + 1}</h4>
                        {formData.sections.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeSection(index)}
                            className="text-red-400 hover:text-red-300 text-sm"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Section Title
                          </label>
                          <input
                            type="text"
                            value={section.title}
                            onChange={(e) => handleSectionChange(index, 'title', e.target.value)}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50"
                            placeholder="Section title"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Section Content
                          </label>
                          <textarea
                            value={section.content}
                            onChange={(e) => handleSectionChange(index, 'content', e.target.value)}
                            rows={4}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50"
                            placeholder="Section content"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Code Block (optional)
                          </label>
                          <textarea
                            value={section.code}
                            onChange={(e) => handleSectionChange(index, 'code', e.target.value)}
                            rows={4}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 font-mono text-sm"
                            placeholder="// Optional code example"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Conclusion *
                  </label>
                  <textarea
                    value={formData.conclusion}
                    onChange={(e) => handleInputChange('conclusion', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                    placeholder="Write your conclusion paragraph..."
                    required
                  />
                </div>
              </div>

              {/* SEO */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 font-family-jakarta">
                  SEO Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Meta Description *
                    </label>
                    <textarea
                      value={formData.metaDescription}
                      onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                      rows={2}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                      placeholder="SEO description for search engines (150-160 characters)"
                      required
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      {formData.metaDescription.length}/160 characters
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Keywords (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.keywords}
                      onChange={(e) => handleInputChange('keywords', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-terminal-green/50 focus:ring-1 focus:ring-terminal-green/50"
                      placeholder="e.g., react tutorial, web development, javascript"
                    />
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={generateBlogPost}
                  disabled={!formData.title || !formData.excerpt || !formData.intro || !formData.conclusion}
                  className="bg-terminal-green/10 text-terminal-green px-8 py-4 rounded-xl hover:bg-terminal-green/20 hover:shadow-terminal-green/40 hover:shadow-lg transition-all duration-300 border border-terminal-green/30 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Generate Blog Post Code
                </button>
              </div>
            </div>
          </div>

          {/* Generated Code */}
          {showCode && (
            <div className="mt-8 bg-dark-gray rounded-2xl border border-foreground-800 p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white font-family-jakarta">
                  Generated Code
                </h2>
                <button
                  onClick={copyToClipboard}
                  className="bg-terminal-green/10 text-terminal-green px-4 py-2 rounded-lg hover:bg-terminal-green/20 transition-colors border border-terminal-green/30 text-sm"
                >
                  Copy Code
                </button>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <pre className="text-gray-300 text-sm font-mono whitespace-pre-wrap">
                  {generatedCode}
                </pre>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <h3 className="text-yellow-400 font-semibold mb-2">Next Steps:</h3>
                <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                  <li>Copy the code above</li>
                  <li>Upload your image to <code className="bg-gray-800 px-2 py-1 rounded text-terminal-green">/public/assets/images/blog/{formData.image}</code></li>
                  <li>Open <code className="bg-gray-800 px-2 py-1 rounded text-terminal-green">/src/data/blogData.ts</code></li>
                  <li>Add the generated code to the <code className="bg-gray-800 px-2 py-1 rounded text-terminal-green">blogPosts</code> array</li>
                  <li>Save the file and your blog post will be live!</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AdminBlog;
