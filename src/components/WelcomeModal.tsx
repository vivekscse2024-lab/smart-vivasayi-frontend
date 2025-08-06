import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';

interface WelcomeModalProps {
  isOpen: boolean;
  onStart: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onStart }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div className="glass-card p-8 rounded-2xl max-w-md mx-4 text-center animate-scale-in">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-farming-dark-green mb-2">
            {t('welcomeTitle')}
          </h2>
          <div className="w-16 h-1 bg-farming-green mx-auto rounded-full"></div>
        </div>
        
        <p className="text-farming-dark-green/80 mb-8 text-lg">
          Your smart farming companion is ready to help you grow better crops and maximize your harvest.
        </p>
        
        <Button
          onClick={onStart}
          className="bg-farming-gradient hover:scale-105 transition-transform duration-200 px-8 py-3 text-lg font-semibold rounded-full shadow-lg"
        >
          {t('letsStart')}
        </Button>
      </div>
    </div>
  );
};

export default WelcomeModal;