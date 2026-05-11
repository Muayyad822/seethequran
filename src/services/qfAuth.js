// src/services/qfAuth.js
const TOKEN_URL = 'https://oauth2.quran.foundation/token';

let contentToken = null;
let tokenExpiry = null;

export async function getContentToken() {
  const clientId = import.meta.env.VITE_QF_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_QF_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error('Missing QF API Credentials');
    return null;
  }

  // Check if token is still valid (with 5 min buffer)
  if (contentToken && tokenExpiry && Date.now() < tokenExpiry - 300000) {
    return contentToken;
  }

  try {
    const res = await fetch(TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
        scope: 'content',
      }),
    });

    if (!res.ok) throw new Error('Failed to fetch QF token');

    const data = await res.json();
    contentToken = data.access_token;
    tokenExpiry = Date.now() + (data.expires_in * 1000);
    
    return contentToken;
  } catch (err) {
    console.error('QF Auth Error:', err);
    return null;
  }
}

// User OAuth2 PKCE Flow placeholder
export function getPKCEAuthUrl() {
  // To be implemented for User APIs
  const clientId = import.meta.env.VITE_QF_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_QF_REDIRECT_URI;
  const scope = 'user.read user.write'; // Adjust as needed
  
  // PKCE logic would go here
  return `https://auth.quran.foundation/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
}
