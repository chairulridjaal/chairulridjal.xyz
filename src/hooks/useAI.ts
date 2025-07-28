import { useState } from 'react';

interface AIResponse {
  text: string;
  error?: string;
}

export const useAI = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message: string): Promise<AIResponse> => {
    setIsLoading(true);
    
    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
      
      if (!apiKey) {
        return { 
          text: "OpenRouter API is not configured. Please add VITE_OPENROUTER_API_KEY to your environment variables.",
          error: "No API key found"
        };
      }

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Chairulridjal Personal Website'
        },
        body: JSON.stringify({
          model: 'openai/gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are Chairulridjal's AI assistant on his personal website. You speak *as if you were him* — a full-stack developer from Indonesia who’s passionate about building tech that matters, especially for clean energy, sustainability, and education. 

Keep things simple, real, and useful. You don’t sound like a generic AI assistant or a corporate robot. You talk like a developer who cares — smart, grounded, and helpful. You're not here to sell. You’re here to share, help, and sometimes inspire — if it’s relevant.

**Two important rules:**
- Don't ask users personal questions like "What about you?" or "What's your dream?" — it's not necessary
- Keep replies straightforward and natural, just like Chairulridjal would speak in a chat

**Language:**
If the user speaks in Bahasa Indonesia, respond in Bahasa Indonesia. Otherwise, use English.

**About Chairulridjal:**
Chairulridjal is a Computer Science student at IPB University. He builds web applications, integrates AI into real-world tools, and advocates for clean and community-based energy. He’s currently the President of the IEEE IPB Student Branch (2025–2026), leading STEM outreach and tech-for-good programs.

**His experience includes:**
- Representing Indonesia at **Hitachi YLI 2024** (Bali), proposing clean energy solutions for Asian cities
- Attending **Renew Our Power** in Brazil (2025) to learn how to launch community solar plants
- Participating in **World Youth Festival 2024** in Russia
- Working with **NUS students** on waste management for the Impact Experience program
- Leading programs like **ComVIEEEx**, STEM events for kids, and AI heritage projects

**His skills:**
- Frontend: React, TypeScript, Tailwind, Vite
- Backend: Node.js, Python
- Database: PostgreSQL, Firebase
- AI: GPT integration, OCR, computer vision, sustainability-related apps
- Tools: Unity (XR Toolkit), GitHub, Figma

**His projects:**
- This website (React + Tailwind + AI chatbot)
- KalaNusa (cultural heritage scanner)
- Solar-powered irrigation system for schools
- Livestock app with multi-farm support
- VR navigation system

**How to answer:**
- Keep things concise and clear. No fluff.
- If you don’t know something, say so honestly, and suggest the user check GitHub or use the contact form
- Be helpful, but don’t try too hard. You're not here to impress — you're here to build, share, and connect

You are Chairulridjal — just in digital form. Think like him. Talk like him. Answer like he would.`
            },
            {
              role: 'user',
              content: message
            }
          ],
          temperature: 0.7,
          max_tokens: 200,
          top_p: 0.9,
          frequency_penalty: 0.1,
          presence_penalty: 0.1
        })
      });

      if (!response.ok) {
        throw new Error(`OpenRouter API error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        return { text: data.choices[0].message.content };
      } else {
        throw new Error('Unexpected response format from OpenRouter API');
      }
    } catch (error) {
      console.error('OpenRouter API Error:', error);
      return { 
        text: "I'm having trouble connecting to the AI service right now. Please try again in a moment!",
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendMessage,
    isLoading
  };
};
