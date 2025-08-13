import React from 'react';
import { useLanguage } from './LanguageContext';
import farmingLogo from '../assets/farming-logo.png';

const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="relative w-full p-4 flex items-center justify-between">
      {/* Logo with animation */}
      <div className="flex items-center relative">
        <img 
          src={farmingLogo} 
          alt="Smart Vivasayi Logo" 
          className="w-12 h-12 object-contain animate-logo-spin"
        />
        <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full animate-header-pulse"></div>
      </div>

      {/* App Name - Center with custom font */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-2xl md:text-3xl font-bold text-farming-dark-green tracking-wide font-serif animate-header-pulse">
          {t('appName')}
        </h1>
      </div>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="glass-card px-4 py-2 rounded-full text-farming-dark-green font-medium hover:scale-105 transition-transform duration-200"
      >
        {language === 'en' ? 'தமிழ்' : 'English'}
      </button>
    </header>
  );
};

export default Header;