#!/usr/bin/env node

/**
 * Spotify Token Generator
 * 
 * This script helps you get the necessary tokens for Spotify Web API integration.
 * Run with: node scripts/spotify-setup.js
 */

const readline = require('readline');
const https = require('https');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function exchangeCodeForTokens(clientId, clientSecret, code) {
  const data = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: 'http://localhost:5173'
  });

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'accounts.spotify.com',
      path: '/api/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${auth}`,
        'Content-Length': data.toString().length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.write(data.toString());
    req.end();
  });
}

async function main() {
  console.log('🎵 Spotify Web API Setup Helper\n');
  
  console.log('Step 1: Create a Spotify App');
  console.log('1. Go to https://developer.spotify.com/dashboard');
  console.log('2. Click "Create App"');
  console.log('3. Fill in the details:');
  console.log('   - App Name: Your Portfolio Website');
  console.log('   - App Description: Personal website with Spotify integration');
  console.log('   - Redirect URI: http://localhost:5173');
  console.log('4. Save and copy your Client ID and Client Secret\n');

  const clientId = await question('Enter your Client ID: ');
  const clientSecret = await question('Enter your Client Secret: ');

  console.log('\nStep 2: Authorize the App');
  console.log('Click this URL to authorize:');
  
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:5173&scope=user-read-currently-playing%20user-read-recently-played`;
  console.log(`\n${authUrl}\n`);

  const code = await question('After authorization, paste the "code" parameter from the redirect URL: ');

  try {
    console.log('\nExchanging code for tokens...');
    const tokens = await exchangeCodeForTokens(clientId, clientSecret, code);

    if (tokens.error) {
      console.error('❌ Error:', tokens.error_description || tokens.error);
      process.exit(1);
    }

    console.log('\n✅ Success! Add these to your .env file:');
    console.log(`REACT_APP_SPOTIFY_CLIENT_ID=${clientId}`);
    console.log(`REACT_APP_SPOTIFY_CLIENT_SECRET=${clientSecret}`);
    console.log(`REACT_APP_SPOTIFY_REFRESH_TOKEN=${tokens.refresh_token}`);

  } catch (error) {
    console.error('❌ Error exchanging code:', error.message);
  }

  rl.close();
}

main().catch(console.error);
