# 🎵 Spotify Integration Guide

This guide will help you set up real Spotify integration for your personal website.

## Current Status

- ✅ Component ready with fallback demo data
- ⏳ Needs Spotify API credentials for live data

## Quick Setup (5 minutes)

### Option 1: Automated Setup Script

```bash
npm run spotify-setup
```

### Option 2: Manual Setup

#### Step 1: Create Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Click "Create App"
3. Fill in:
   - **App Name**: `Your Portfolio Website`
   - **App Description**: `Personal website with Spotify integration`
   - **Redirect URI**: `http://localhost:5173`
4. Copy your **Client ID** and **Client Secret**

#### Step 2: Get Authorization Code

Visit this URL (replace `YOUR_CLIENT_ID`):

```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:5173&scope=user-read-currently-playing%20user-read-recently-played
```

#### Step 3: Get Refresh Token

Use this PowerShell command (replace the values):

```powershell
$clientId = "YOUR_CLIENT_ID"
$clientSecret = "YOUR_CLIENT_SECRET"
$code = "CODE_FROM_REDIRECT"
$auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("$clientId:$clientSecret"))

Invoke-RestMethod -Uri "https://accounts.spotify.com/api/token" -Method POST -Headers @{
    "Authorization" = "Basic $auth"
    "Content-Type" = "application/x-www-form-urlencoded"
} -Body @{
    grant_type = "authorization_code"
    code = $code
    redirect_uri = "http://localhost:5173"
}
```

#### Step 4: Create .env File

Create `.env` in your project root:

```env
REACT_APP_SPOTIFY_CLIENT_ID=your_client_id_here
REACT_APP_SPOTIFY_CLIENT_SECRET=your_client_secret_here
REACT_APP_SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
```

## 🚀 Features

When properly configured, your Spotify component will show:

- ✅ **Real-time currently playing track**
- ✅ **Recently played when nothing is active**
- ✅ **Live progress bar with time**
- ✅ **Album artwork from Spotify**
- ✅ **Direct link to open in Spotify**
- ✅ **Animated visualizer when playing**
- ✅ **Graceful fallback to demo data**

## 🔒 Security Notes

- Environment variables are safe for client-side apps
- Refresh tokens don't expire (unless revoked)
- Only read permissions requested (no playlist modifications)
- CORS is handled by Spotify API

## 📱 Alternative: Last.fm Integration

If you prefer Last.fm over Spotify:

1. Get API key from [Last.fm API](https://www.last.fm/api)
2. Replace the `useSpotify` hook with `useLastFm`
3. Update environment variables

## 🐛 Troubleshooting

**"Demo Track" showing?**

- Check if `.env` file exists and has correct values
- Verify Spotify app redirect URI matches exactly
- Ensure you've played music recently on Spotify

**CORS errors?**

- Spotify API should handle CORS automatically
- Make sure redirect URI is set to `http://localhost:5173`

**Invalid refresh token?**

- Re-run the authorization flow to get a new refresh token
- Check that client ID and secret are correct

## 💡 Tips

- Test with Spotify playing music for best results
- Component updates every 30 seconds automatically
- Works with Spotify Free and Premium accounts
- Shows both mobile and desktop Spotify activity
