import React from 'react';

interface DashboardCardProps {
  icon: string;
  title: string;
  theme: 'guide' | 'disease' | 'price' | 'scheme';
  onClick: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon, title, theme, onClick }) => {
  const themeClasses = {
    guide: 'theme-guide border-guide/30 hover:border-guide/60',
    disease: 'theme-disease border-disease/30 hover:border-disease/60',
    price: 'theme-price border-price/30 hover:border-price/60',
    scheme: 'theme-scheme border-scheme/30 hover:border-scheme/60',
  };

  const iconBgClasses = {
    guide: 'bg-guide/10',
    disease: 'bg-disease/10',
    price: 'bg-price/10',
    scheme: 'bg-scheme/10',
  };

  const textClasses = {
    guide: 'text-guide',
    disease: 'text-disease',
    price: 'text-price',
    scheme: 'text-scheme',
  };

  return (
    <div
      onClick={onClick}
      className={`
        glass-card p-6 rounded-2xl cursor-pointer hover-lift
        ${themeClasses[theme]}
        border-2 transition-all duration-300
        animate-scale-in
      `}
      style={{ animationDelay: `${Math.random() * 0.3}s` }}
    >
      <div className={`w-16 h-16 ${iconBgClasses[theme]} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
        <span className="text-3xl">{icon}</span>
      </div>
      
      <h3 className={`text-xl font-semibold text-center ${textClasses[theme]}`}>
        {title}
      </h3>
      
      <div className={`w-12 h-1 ${textClasses[theme]} opacity-30 mx-auto mt-3 rounded-full`}></div>
    </div>
  );
};

export default DashboardCard;