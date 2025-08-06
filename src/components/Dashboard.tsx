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
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-white mb-8">
          {t('whoIsFarming')}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center animate-slide-up">
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
    </div>
  );
};

export default Dashboard;