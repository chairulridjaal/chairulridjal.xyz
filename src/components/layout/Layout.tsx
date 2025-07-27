import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-dark-black text-terminal-green font-mono">
      {/* Header with navigation */}
      <div className="header-nav bg-dark-black px-6 sm:px-8 py-6 flex justify-between items-center">
        <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors text-lg sm:text-xl">
          chairulridjal.xyz
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 lg:space-x-8 text-gray-300">
            <Link to="/" className={`hover:text-white transition-colors text-base lg:text-lg ${location.pathname === '/' ? 'text-green-400' : ''}`}>index.js</Link>
            <Link to="/about" className={`hover:text-white transition-colors text-base lg:text-lg ${location.pathname === '/about' ? 'text-green-400' : ''}`}>about.md</Link>
            <Link to="/projects" className={`hover:text-white transition-colors text-base lg:text-lg ${location.pathname === '/projects' ? 'text-green-400' : ''}`}>projects.py</Link>
            <Link to="/blog" className={`hover:text-white transition-colors text-base lg:text-lg ${location.pathname === '/blog' ? 'text-green-400' : ''}`}>blog.sh</Link>
            <Link to="/resume" className={`hover:text-white transition-colors text-base lg:text-lg ${location.pathname === '/resume' ? 'text-green-400' : ''}`}>resume.pdf</Link>
          </div>
          <button className="w-10 h-10 border border-gray-500 rounded-lg flex items-center justify-center hover:border-green-400 hover:text-green-400 transition-colors ml-6">
            <span className="text-base">🌙</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            className={`text-gray-300 hover:text-white p-3 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Slide-in from right */}
      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[80vw] bg-dark-black border-l border-foreground-800 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Menu Header */}
          <div className="p-6 border-b border-foreground-800">
            <div className="flex items-center justify-between">
              <span className="text-white text-lg font-medium">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="py-8 px-6 space-y-6">
            <Link 
              to="/" 
              className={`block hover:text-green-400 transition-colors text-lg ${location.pathname === '/' ? 'text-green-400' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              index.js
            </Link>
            <Link 
              to="/about" 
              className={`block hover:text-green-400 transition-colors text-lg ${location.pathname === '/about' ? 'text-green-400' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              about.md
            </Link>
            <Link 
              to="/projects" 
              className={`block hover:text-green-400 transition-colors text-lg ${location.pathname === '/projects' ? 'text-green-400' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              projects.py
            </Link>
            <Link 
              to="/blog" 
              className={`block hover:text-green-400 transition-colors text-lg ${location.pathname === '/blog' ? 'text-green-400' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              blog.sh
            </Link>
            <Link 
              to="/resume" 
              className={`block hover:text-green-400 transition-colors text-lg ${location.pathname === '/resume' ? 'text-green-400' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              resume.pdf
            </Link>
          </div>
            
          {/* Dark mode toggle */}
          <div className="border-t border-foreground-800">
            <div className="px-6 pt-4">
              <button className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors text-lg">
                <span>🌙</span>
                <span>Dark Mode</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      {children}
    </div>
  );
};

export default Layout;
