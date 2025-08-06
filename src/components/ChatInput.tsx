import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Send } from 'lucide-react';

interface ChatInputProps {
  theme: 'guide' | 'disease' | 'price' | 'scheme';
}

const ChatInput: React.FC<ChatInputProps> = ({ theme }) => {
  const { t } = useLanguage();
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Here you would integrate with a chatbot API
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const themeClasses = {
    guide: 'focus:ring-guide/50 border-guide/30',
    disease: 'focus:ring-disease/50 border-disease/30',
    price: 'focus:ring-price/50 border-price/30',
    scheme: 'focus:ring-scheme/50 border-scheme/30',
  };

  const buttonClasses = {
    guide: 'bg-guide hover:bg-guide/90',
    disease: 'bg-disease hover:bg-disease/90',
    price: 'bg-price hover:bg-price/90',
    scheme: 'bg-scheme hover:bg-scheme/90',
  };

  return (
    <div className="glass-card p-4 rounded-2xl">
      <div className="flex gap-3">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t('askQuestion')}
          className={`glass-card border ${themeClasses[theme]} focus:ring-2 transition-all`}
        />
        <Button
          onClick={handleSend}
          className={`${buttonClasses[theme]} text-white hover:scale-105 transition-transform px-4`}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;