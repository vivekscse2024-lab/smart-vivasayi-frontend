import React from 'react';

interface InfoCardProps {
  title: string;
  theme: 'guide' | 'disease' | 'price' | 'scheme';
}

const InfoCard: React.FC<InfoCardProps> = ({ title, theme }) => {
  const themeClasses = {
    guide: 'border-guide/30',
    disease: 'border-disease/30',
    price: 'border-price/30',
    scheme: 'border-scheme/30',
  };

  const textClasses = {
    guide: 'text-guide',
    disease: 'text-disease',
    price: 'text-price',
    scheme: 'text-scheme',
  };

  return (
    <div className={`glass-card p-4 rounded-xl border ${themeClasses[theme]} hover-lift`}>
      <h4 className={`font-medium text-center ${textClasses[theme]}`}>
        {title}
      </h4>
    </div>
  );
};

export default InfoCard;