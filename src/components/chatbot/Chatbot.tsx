import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAI } from '../../hooks/useAI';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('chatbot.greeting'),
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { sendMessage, isLoading } = useAI();

  // Update greeting message when language changes
  useEffect(() => {
    setMessages(prev => prev.map((msg, index) => 
      index === 0 ? { ...msg, text: t('chatbot.greeting') } : msg
    ));
  }, [i18n.language, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');

    try {
      const response = await sendMessage(currentInput);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble processing that. Please try again!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-dark-gray rounded-2xl border border-foreground-800 h-[600px] flex flex-col hover:border-terminal-green/50 transition-all duration-300 group shadow-lg hover:shadow-terminal-green/20">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-title">{t('chatbot.title')}</div>
        <button className="terminal-button group-hover:text-terminal-green/80 transition-colors">{t('terminal.copy')}</button>
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
        
        {isLoading && (
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
            placeholder={t('chatbot.placeholder')}
            className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none placeholder-muted-gray border-none"
          />
          {inputValue.trim() && (
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
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
