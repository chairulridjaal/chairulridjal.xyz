import React, { useState, useEffect } from 'react';
import { useSpotify } from '../../hooks/useSpotify';

const SpotifyNowPlaying: React.FC = () => {
  const { currentTrack, isLoading, error } = useSpotify();
  const [dots, setDots] = useState('');

  // Fallback mock data when no real data is available
  const mockTrack = {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    albumArt: "https://via.placeholder.com/64x64/131313/00FF41?text=♪",
    isPlaying: false,
    progress: 180,
    duration: 355
  };

  // Use real track data if available, otherwise fallback to mock
  const displayTrack = currentTrack || mockTrack;

  // Animate the playing dots
  useEffect(() => {
    if (displayTrack.isPlaying) {
      const interval = setInterval(() => {
        setDots(prev => {
          if (prev === '...') return '';
          return prev + '.';
        });
      }, 500);
      return () => clearInterval(interval);
    } else {
      setDots('');
    }
  }, [displayTrack.isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = displayTrack.progress && displayTrack.duration 
    ? (displayTrack.progress / displayTrack.duration) * 100 
    : 0;

  // Show loading state
  if (isLoading) {
    return (
      <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-6 hover:border-terminal-green/50 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-terminal-green font-medium text-sm flex items-center">
            <span className="w-2 h-2 bg-terminal-green rounded-full mr-2 animate-pulse"></span>
            Loading Spotify...
          </h3>
        </div>
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-gray-700 rounded-lg mb-3"></div>
          <div className="h-4 bg-gray-700 rounded mb-2"></div>
          <div className="h-3 bg-gray-700 rounded mb-1"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark-gray rounded-2xl border border-foreground-800 p-6 hover:border-terminal-green/50 transition-all duration-300 group">
      {/* Header with status and Spotify logo */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className={`w-2.5 h-2.5 rounded-full mr-3 ${displayTrack.isPlaying ? 'bg-terminal-green animate-pulse' : 'bg-gray-500'}`}></div>
          <h3 className="text-sm font-medium text-terminal-green uppercase tracking-wider">
            {displayTrack.isPlaying ? `Now Playing${dots}` : currentTrack ? 'Recently Played' : 'Demo Track'}
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          {error && !currentTrack && (
            <span className="text-orange-400 text-xs font-medium bg-orange-400/10 px-2 py-1 rounded-full">
              Demo Mode
            </span>
          )}
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-terminal-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
              <path d="M8 8v8l8-4z"/>
            </svg>
            <span className="text-xs font-medium text-terminal-green">Spotify</span>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex items-start space-x-4">
        <div className="relative flex-shrink-0">
          <img 
            src={displayTrack.albumArt} 
            alt={`${displayTrack.album} cover`}
            className="w-20 h-20 rounded-xl border border-gray-600 shadow-lg group-hover:shadow-terminal-green/20 transition-shadow duration-300"
          />
          {displayTrack.isPlaying && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-terminal-green rounded-full border-2 border-dark-gray flex items-center justify-center">
              <svg className="w-3 h-3 text-dark-gray" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0 space-y-1">
          <h4 className="text-white font-semibold text-lg leading-tight truncate group-hover:text-terminal-green/90 transition-colors">
            {displayTrack.title}
          </h4>
          <p className="text-gray-300 text-sm font-medium truncate">
            {displayTrack.artist}
          </p>
          <p className="text-gray-500 text-xs truncate">
            {displayTrack.album}
          </p>
          
          {/* Progress bar for currently playing */}
          {displayTrack.isPlaying && displayTrack.progress !== undefined && displayTrack.duration && (
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-xs text-gray-400 font-mono">
                <span>{formatTime(displayTrack.progress)}</span>
                <span>{formatTime(displayTrack.duration)}</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-terminal-green to-green-400 h-full rounded-full transition-all duration-1000 ease-linear shadow-sm"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer with visualizer and link */}
      <div className="mt-6 pt-4 border-t border-gray-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {displayTrack.isPlaying && (
              <div className="flex items-center space-x-1">
                <div className="w-1 h-6 bg-terminal-green/80 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1 h-4 bg-terminal-green/60 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1 h-8 bg-terminal-green rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                <div className="w-1 h-3 bg-terminal-green/70 rounded-full animate-pulse" style={{ animationDelay: '450ms' }}></div>
                <div className="w-1 h-5 bg-terminal-green/90 rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
              </div>
            )}
            <span className="text-xs text-gray-500">
              {displayTrack.isPlaying ? 'Live audio' : 'Last played'}
            </span>
          </div>
          
          {currentTrack?.external_url && (
            <a 
              href={currentTrack.external_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs font-medium text-terminal-green hover:text-green-400 bg-terminal-green/10 hover:bg-terminal-green/20 px-3 py-1.5 rounded-full transition-all duration-200"
            >
              <span>Open in Spotify</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;
