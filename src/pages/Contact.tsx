import React, { useEffect } from 'react';
import { Layout } from '../components';

const Contact: React.FC = () => {
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

  return (
    <Layout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 contact-content">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-gray border border-terminal-green/30 mb-6 group hover:border-terminal-green/60 transition-all duration-300 shadow-lg hover:shadow-terminal-green/20">
              <svg className="w-8 h-8 text-terminal-green group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 plus-jakarta-sans">
              Let's Connect
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Always happy to chat about technology, collaborate on projects, or just say hi! 
              Feel free to reach out through any of these platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">

            {/* Social Links */}
            <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-8 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
              <h2 className="text-2xl font-bold text-white mb-6 plus-jakarta-sans group-hover:text-terminal-green/90 transition-colors">
                Find Me Online
              </h2>
              <div className="space-y-4">
                <a 
                  href="https://github.com/chairulridjaal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl border border-gray-600/50 hover:border-terminal-green/60 hover:bg-terminal-green/5 transition-all duration-300 group/social"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-terminal-green/10 rounded-xl border border-terminal-green/30 flex items-center justify-center group-hover/social:bg-terminal-green/20 transition-colors mr-4">
                    <svg className="w-6 h-6 text-terminal-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 plus-jakarta-sans">GitHub</h3>
                    <p className="text-gray-300 text-sm">Check out my projects and contributions</p>
                  </div>
                </a>
                
                <a 
                  href="https://linkedin.com/in/mochamad-chairulridjal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl border border-gray-600/50 hover:border-terminal-green/60 hover:bg-terminal-green/5 transition-all duration-300 group/social"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-terminal-green/10 rounded-xl border border-terminal-green/30 flex items-center justify-center group-hover/social:bg-terminal-green/20 transition-colors mr-4">
                    <svg className="w-6 h-6 text-terminal-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 plus-jakarta-sans">LinkedIn</h3>
                    <p className="text-gray-300 text-sm">Professional connections and updates</p>
                  </div>
                </a>
                
                <a 
                  href="https://instagram.com/chairulridjaal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl border border-gray-600/50 hover:border-terminal-green/60 hover:bg-terminal-green/5 transition-all duration-300 group/social"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-terminal-green/10 rounded-xl border border-terminal-green/30 flex items-center justify-center group-hover/social:bg-terminal-green/20 transition-colors mr-4">
                    <svg className="w-6 h-6 text-terminal-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 4.813.109 4.086.277 3.45.525a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 00.525 3.45C.277 4.086.109 4.813.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.049 1.064.217 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.248 1.363.416 2.427.465C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c1.064-.049 1.791-.217 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.248-.636.416-1.363.465-2.427C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123c-.049-1.064-.217-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0016.55.525C15.914.277 15.187.109 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.041.059.976.045 1.505.207 1.858.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.858.048 1.054.058 1.37.058 4.041s-.01 2.987-.058 4.041c-.045.976-.207 1.505-.344 1.858-.182.467-.398.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.858.344-1.054.048-1.37.058-4.041.058s-2.987-.01-4.041-.058c-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.858-.048-1.054-.058-1.37-.058-4.041s.01-2.987.058-4.041c.045-.976.207-1.505.344-1.858.182-.467.398-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.858-.344 1.054-.048 1.37-.058 4.041-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 plus-jakarta-sans">Instagram</h3>
                    <p className="text-gray-300 text-sm">Behind the scenes and personal updates</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:chairulridjal@ieee.org" 
                  className="flex items-center p-4 rounded-xl border border-gray-600/50 hover:border-terminal-green/60 hover:bg-terminal-green/5 transition-all duration-300 group/social"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-terminal-green/10 rounded-xl border border-terminal-green/30 flex items-center justify-center group-hover/social:bg-terminal-green/20 transition-colors mr-4">
                    <svg className="w-6 h-6 text-terminal-green" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 plus-jakarta-sans">Email</h3>
                    <p className="text-gray-300 text-sm">For direct and professional communication</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="mt-8 bg-dark-gray rounded-2xl border border-foreground-800 p-8 hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-terminal-green rounded-full animate-pulse"></div>
              <h3 className="text-lg font-semibold text-white plus-jakarta-sans">Currently Available</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
              I'm open to new opportunities, collaborations, and interesting projects. 
              Whether it's full-time roles, freelance work, or just a chat about technology, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
