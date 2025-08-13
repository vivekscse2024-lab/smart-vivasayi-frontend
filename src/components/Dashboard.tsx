import React from 'react';
import { useLanguage } from './LanguageContext';
import DashboardCard from './DashboardCard';

export type SectionType = 'guide' | 'disease' | 'price' | 'scheme' | null;

interface DashboardProps {
  onCardClick: (section: SectionType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onCardClick }) => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: '🧑‍🌾',
      title: t('guide'),
      theme: 'guide' as const,
      section: 'guide' as const,
    },
    {
      icon: '🌾',
      title: t('cropDiseases'),
      theme: 'disease' as const,
      section: 'disease' as const,
    },
    {
      icon: '💰',
      title: t('cropPrices'),
      theme: 'price' as const,
      section: 'price' as const,
    },
    {
      icon: '🏛️',
      title: t('governmentSchemes'),
      theme: 'scheme' as const,
      section: 'scheme' as const,
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 relative min-h-screen">
      {/* Floating farming elements */}
      <div className="floating-elements">
        <div className="floating-element text-6xl">🌾</div>
        <div className="floating-element text-4xl">🚜</div>
        <div className="floating-element text-5xl">🌱</div>
        <div className="floating-element text-3xl">🍃</div>
        <div className="floating-element text-4xl">🌽</div>
      </div>
      
      {/* Colorful background */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/src/assets/colorful-farming-bg.jpg')` }}
      ></div>
      
      {/* Main content */}
      <div className="w-full max-w-4xl relative z-10 flex-1 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center text-white mb-8 animate-fade-in -mt-16">
          {t('whoIsFarming')}
        </h2>
        
        {/* Separator line */}
        <div className="separator-line"></div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center animate-slide-up mt-8">
          {cards.map((card, index) => (
            <DashboardCard
              key={card.section}
              icon={card.icon}
              title={card.title}
              theme={card.theme}
              onClick={() => onCardClick(card.section)}
            />
          ))}
        </div>
      </div>
      
      {/* Farming details section */}
      <div className="w-full max-w-6xl relative z-10 mt-16 mb-8">
        <div className="glass-card p-8 rounded-2xl border border-white/20">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            {t('farmingInsights')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-semibold mb-2 text-orange-400 font-serif">{t('sustainableTitle')}</h4>
              <p className="text-sm">{t('sustainableDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <h4 className="font-semibold mb-2 text-purple-400 font-serif">{t('modernTitle')}</h4>
              <p className="text-sm">{t('modernDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold mb-2 text-yellow-300">{t('communityTitle')}</h4>
              <p className="text-sm">{t('communityDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;