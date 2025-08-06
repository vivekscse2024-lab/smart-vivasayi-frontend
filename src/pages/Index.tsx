import React, { useState } from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Header from '../components/Header';
import WelcomeModal from '../components/WelcomeModal';
import Dashboard from '../components/Dashboard';
import SectionView, { SectionType } from '../components/SectionView';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentSection, setCurrentSection] = useState<SectionType>(null);

  const handleStart = () => {
    setShowWelcome(false);
  };

  const handleCardClick = (section: SectionType) => {
    setCurrentSection(section);
  };

  const handleBack = () => {
    setCurrentSection(null);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-page-gradient flex flex-col">
        <Header />
        
        {currentSection ? (
          <SectionView section={currentSection} onBack={handleBack} />
        ) : (
          <Dashboard onCardClick={handleCardClick} />
        )}
        
        <WelcomeModal isOpen={showWelcome} onStart={handleStart} />
      </div>
    </LanguageProvider>
  );
};

export default Index;
