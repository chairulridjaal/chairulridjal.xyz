import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Ask me anything!',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mockResponses = [
    "Because clean energy isn't just about tech – it's about equity, future-proofing our world, and giving people access to power, literally.",
    "Chairulridjal believes in building technology that serves humanity, especially in sustainable energy solutions.",
    "He's passionate about creating applications that bridge the gap between cutting-edge tech and environmental impact.",
    "His experience spans React, TypeScript, Python, and AI/ML – perfect tools for clean energy innovations.",
    "Working on projects that combine modern web technologies with climate solutions is his main focus.",
    "Clean energy tech needs better interfaces and data visualization – that's where his skills shine.",
    "He's exploring how AI can optimize renewable energy systems and improve grid efficiency.",
    "The intersection of technology and sustainability is where the future lies, and that's his playground."
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-dark-black rounded-2xl border border-foreground-800 h-[600px] flex flex-col">
      {/* Terminal Header */}
      <div className="bg-dark-gray border-b border-foreground-800 px-4 py-3 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <span className="text-muted-gray text-sm font-mono">ask-me.js</span>
        </div>
      </div>

      {/* Messages Area */}
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-gray chat-scroll"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#27272A transparent'
        }}
      >
        {messages.map((message) => (
          <div key={message.id}>
            {message.isUser ? (
              // User message - right aligned in terminal style
              <div className="flex justify-end">
                <div className="bg-dark-gray text-gray-200 rounded-lg px-3 py-2 max-w-[80%] border border-foreground-800">
                  <p className="text-sm font-mono">{message.text}</p>
                </div>
              </div>
            ) : (
              // Bot message - left aligned with terminal prompt style
              <div className="flex items-start space-x-2">
                <img 
                  src="src/assets/images/Avatar.png" 
                  alt="AI Avatar" 
                  className="w-8 h-8 rounded-full border border-foreground-800 flex-shrink-0"
                />
                <div className="flex items-start space-x-2 max-w-[75%]">
                  <span className="text-white font-mono text-sm flex-shrink-0 mt-0">&gt;</span>
                  <p className="text-white font-mono text-sm leading-relaxed break-words">
                    {message.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-center space-x-2">
            <img 
              src="src\assets\images\Avatar.png" 
              alt="AI Avatar" 
              className="w-8 h-8 rounded-full border border-foreground-800 flex-shrink-0"
            />
            <div className="flex items-center space-x-2">
              <span className="text-white font-mono text-sm flex-shrink-0">&gt;</span>
              <div className="flex items-center space-x-1">
                <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-foreground-800 p-4 bg-dark-gray rounded-b-2xl">
        <div className="flex items-center space-x-2">
          <span className="text-terminal-green font-mono text-sm">$</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What would you like to know?"
            className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none placeholder-muted-gray border-none"
          />
          {inputValue.trim() && (
            <button
              onClick={handleSendMessage}
              disabled={isTyping}
              className="text-terminal-green hover:text-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-mono"
            >
              [Enter]
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
