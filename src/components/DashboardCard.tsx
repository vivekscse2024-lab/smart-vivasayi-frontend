import React, { useState } from 'react';

interface DashboardCardProps {
  icon: string;
  title: string;
  theme: 'guide' | 'disease' | 'price' | 'scheme';
  onClick: () => void;
}

const hoverInfo = {
  guide: 'Get farming tips and best practices',
  disease: 'Identify and treat crop diseases',
  price: 'Check current market prices',
  scheme: 'Learn about government benefits',
};

const DashboardCard: React.FC<DashboardCardProps> = ({ icon, title, theme, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="relative group">
      <div
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          glass-card p-8 rounded-2xl cursor-pointer hover-lift
          ${themeClasses[theme]}
          border-2 transition-all duration-300
          animate-scale-in w-48 h-56
          hover:scale-110 hover:shadow-2xl
        `}
        style={{ animationDelay: `${Math.random() * 0.3}s` }}
      >
        <div className={`w-20 h-20 ${iconBgClasses[theme]} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
          <span className="text-4xl">{icon}</span>
        </div>
        
        <h3 className={`text-xl font-semibold text-center ${textClasses[theme]}`}>
          {title}
        </h3>
        
        <div className={`w-12 h-1 ${textClasses[theme]} opacity-30 mx-auto mt-4 rounded-full`}></div>
      </div>
      
      {/* Hover tooltip */}
      {isHovered && (
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap animate-fade-in z-10">
          {hoverInfo[theme]}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default DashboardCard;