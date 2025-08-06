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
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full animate-slide-up">
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
  );
};

export default Dashboard;