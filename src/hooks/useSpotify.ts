import { useState, useEffect } from 'react';

interface SpotifyTrack {
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  isPlaying: boolean;
  progress?: number;
  duration?: number;
  external_url?: string;
}

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

export const useSpotify = () => {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAccessToken = async () => {
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: REFRESH_TOKEN || ''
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get access token');
      }

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error('Error getting access token:', error);
      throw error;
    }
  };

  const getCurrentlyPlaying = async () => {
    try {
      const accessToken = await getAccessToken();
      
      const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (response.status === 204) {
        // Nothing is currently playing, get recently played instead
        await getRecentlyPlayed();
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch currently playing');
      }

      const data = await response.json();
      
      if (data && data.item) {
        setCurrentTrack({
          title: data.item.name,
          artist: data.item.artists.map((artist: any) => artist.name).join(', '),
          album: data.item.album.name,
          albumArt: data.item.album.images[0]?.url || '',
          isPlaying: data.is_playing,
          progress: Math.floor(data.progress_ms / 1000),
          duration: Math.floor(data.item.duration_ms / 1000),
          external_url: data.item.external_urls.spotify
        });
        setIsLoading(false);
      } else {
        // No item data, get recently played
        await getRecentlyPlayed();
      }
    } catch (error) {
      console.error('Error fetching currently playing:', error);
      throw error; // Re-throw to be caught by the calling function
    }
  };

  const getRecentlyPlayed = async () => {
    try {
      const accessToken = await getAccessToken();
      
      const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recently played');
      }

      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        const track = data.items[0].track;
        setCurrentTrack({
          title: track.name,
          artist: track.artists.map((artist: any) => artist.name).join(', '),
          album: track.album.name,
          albumArt: track.album.images[0]?.url || '',
          isPlaying: false,
          external_url: track.external_urls.spotify
        });
      }
    } catch (error) {
      console.error('Error fetching recently played:', error);
      setError('Failed to fetch Spotify data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchSpotifyData = async () => {
      if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
        setError('Spotify credentials not configured');
        setIsLoading(false);
        return;
      }

      try {
        await getCurrentlyPlaying();
      } catch (error) {
        console.error('Error in fetchSpotifyData:', error);
        // Only fall back to recently played if there's an error
        try {
          await getRecentlyPlayed();
        } catch (fallbackError) {
          console.error('Error fetching recently played:', fallbackError);
          setError('Failed to fetch Spotify data');
          setIsLoading(false);
        }
      }
    };

    fetchSpotifyData();

    // Update every 30 seconds
    const interval = setInterval(fetchSpotifyData, 30000);

    return () => clearInterval(interval);
  }, []);

  return { currentTrack, isLoading, error };
};
