import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-black text-terminal-green">
      {/* Header with navigation */}
      <div className={`header-nav fixed top-0 left-0 right-0 z-40 px-6 sm:px-8 py-4 flex justify-between items-center transition-all duration-300 group ${
        isScrolled 
          ? 'bg-dark-black/80 backdrop-blur-md border-b border-terminal-green/20 shadow-lg shadow-terminal-green/10' 
          : 'bg-dark-black'
      } hover:shadow-terminal-green/20 hover:shadow-lg`}>
        <Link to="/" className="text-gray-300 hover:text-terminal-green transition-colors text-base sm:text-lg hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]">
          chairulridjal.xyz
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-4 lg:space-x-6 text-gray-300">
            <Link to="/" className={`hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 text-sm lg:text-base ${location.pathname === '/' ? 'text-terminal-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]' : ''}`}>{t('nav.home')}</Link>
            <Link to="/about" className={`hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 text-sm lg:text-base ${location.pathname === '/about' ? 'text-terminal-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]' : ''}`}>{t('nav.about')}</Link>
            <Link to="/projects" className={`hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 text-sm lg:text-base ${location.pathname === '/projects' ? 'text-terminal-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]' : ''}`}>{t('nav.projects')}</Link>
            <Link to="/blog" className={`hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 text-sm lg:text-base ${location.pathname === '/blog' ? 'text-terminal-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]' : ''}`}>{t('nav.blog')}</Link>
            <Link to="/resume" className={`hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 text-sm lg:text-base ${location.pathname === '/resume' ? 'text-terminal-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]' : ''}`}>{t('nav.resume')}</Link>
          </div>
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <button className="w-8 h-8 border border-gray-500 rounded-lg flex items-center justify-center hover:border-terminal-green hover:text-terminal-green hover:shadow-terminal-green/30 hover:shadow-lg transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]">
              <span className="text-sm">🌙</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            className={`text-gray-300 hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] p-3 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
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
              <span className="text-white text-lg font-medium">{t('common.menu')}</span>
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
              className={`block hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 text-lg ${location.pathname === '/' ? 'text-terminal-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`block hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 text-lg ${location.pathname === '/about' ? 'text-terminal-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/projects" 
              className={`block hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 text-lg ${location.pathname === '/projects' ? 'text-terminal-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.projects')}
            </Link>
            <Link 
              to="/blog" 
              className={`block hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 text-lg ${location.pathname === '/blog' ? 'text-terminal-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.blog')}
            </Link>
            <Link 
              to="/resume" 
              className={`block hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 text-lg ${location.pathname === '/resume' ? 'text-terminal-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'text-gray-300'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.resume')}
            </Link>
          </div>
            
          {/* Dark mode toggle and Language Switcher */}
          <div className="border-t border-foreground-800">
            <div className="px-6 pt-4 space-y-4">
              <button className="flex items-center space-x-3 text-gray-300 hover:text-terminal-green hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 text-lg">
                <span>🌙</span>
                <span>{t('common.darkMode')}</span>
              </button>
              <div className="flex items-center space-x-3">
                <LanguageSwitcher />
                <span className="text-gray-400 text-sm">Language / Bahasa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content with top padding to account for fixed header */}
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;
