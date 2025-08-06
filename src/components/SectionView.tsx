import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import InfoCard from './InfoCard';
import ChatInput from './ChatInput';
import { ArrowLeft } from 'lucide-react';

export type SectionType = 'guide' | 'disease' | 'price' | 'scheme';

interface SectionViewProps {
  section: SectionType;
  onBack: () => void;
}

const SectionView: React.FC<SectionViewProps> = ({ section, onBack }) => {
  const { t } = useLanguage();

  const sectionConfig = {
    guide: {
      title: t('guideTitle'),
      icon: '🧑‍🌾',
      tips: [t('guideTip1'), t('guideTip2'), t('guideTip3')],
    },
    disease: {
      title: t('diseaseTitle'),
      icon: '🌾',
      tips: [t('diseaseTip1'), t('diseaseTip2'), t('diseaseTip3')],
    },
    price: {
      title: t('priceTitle'),
      icon: '💰',
      tips: [t('priceTip1'), t('priceTip2'), t('priceTip3')],
    },
    scheme: {
      title: t('schemeTitle'),
      icon: '🏛️',
      tips: [t('schemeTip1'), t('schemeTip2'), t('schemeTip3')],
    },
  };

  const config = sectionConfig[section];

  const themeClasses = {
    guide: 'theme-guide text-guide',
    disease: 'theme-disease text-disease',
    price: 'theme-price text-price',
    scheme: 'theme-scheme text-scheme',
  };

  const buttonClasses = {
    guide: 'bg-guide hover:bg-guide/90',
    disease: 'bg-disease hover:bg-disease/90',
    price: 'bg-price hover:bg-price/90',
    scheme: 'bg-scheme hover:bg-scheme/90',
  };

  return (
    <div className={`flex-1 p-4 animate-slide-up ${themeClasses[section]}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className={`${buttonClasses[section]} text-white hover:scale-105 transition-transform rounded-full px-4`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('back')}
          </Button>
          
          <div className="flex items-center gap-3">
            <span className="text-4xl">{config.icon}</span>
            <h2 className="text-2xl md:text-3xl font-bold">
              {config.title}
            </h2>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {config.tips.map((tip, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <InfoCard title={tip} theme={section} />
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <ChatInput theme={section} />
        </div>
      </div>
    </div>
  );
};

export default SectionView;