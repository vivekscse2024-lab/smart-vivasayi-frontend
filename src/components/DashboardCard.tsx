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
    <div className="relative group card-flip-container w-48 h-56" style={{ animationDelay: `${Math.random() * 0.3}s` }}>
      {/* Front face */}
      <div className={`
        card-face glass-card p-8 rounded-2xl cursor-pointer
        ${themeClasses[theme]}
        border-2 relative overflow-hidden
        transform transition-all duration-500 ease-out
        hover:border-opacity-80 hover:shadow-2xl hover:shadow-primary/20
        animate-scale-in
      `}
      onClick={onClick}>
        {/* Theme-specific background animations */}
        <div className={`${theme}-bg-elements`}></div>
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          theme === 'guide' ? 'from-guide/10 to-guide/25' :
          theme === 'disease' ? 'from-disease/10 to-disease/25' :
          theme === 'price' ? 'from-price/10 to-price/25' :
          'from-scheme/10 to-scheme/25'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
        
        <div className={`w-20 h-20 ${iconBgClasses[theme]} rounded-2xl flex items-center justify-center mb-6 mx-auto relative z-10 transition-all duration-300 group-hover:scale-110`}>
          <span className="text-4xl transition-transform duration-300 group-hover:rotate-12">{icon}</span>
        </div>
        
        <h3 className={`text-xl font-semibold text-center ${textClasses[theme]} relative z-10 transition-all duration-300 group-hover:scale-105`}>
          {title}
        </h3>
        
        <div className={`w-12 h-1 ${textClasses[theme]} opacity-30 mx-auto mt-4 rounded-full relative z-10 transition-all duration-300 group-hover:w-16 group-hover:opacity-60`}></div>
      </div>
      
      {/* Back face */}
      <div className={`
        card-face card-back glass-card p-6 rounded-2xl cursor-pointer
        ${themeClasses[theme]}
        border-2 overflow-hidden
        flex flex-col items-center justify-center text-center
      `}
      onClick={onClick}>
        <div className={`absolute inset-0 bg-gradient-to-br ${
          theme === 'guide' ? 'from-guide/20 to-guide/40' :
          theme === 'disease' ? 'from-disease/20 to-disease/40' :
          theme === 'price' ? 'from-price/20 to-price/40' :
          'from-scheme/20 to-scheme/40'
        } rounded-2xl`}></div>
        
        <div className="relative z-10">
          <div className={`w-16 h-16 ${iconBgClasses[theme]} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
            <span className="text-2xl">{icon}</span>
          </div>
          
          <h3 className={`text-lg font-bold ${textClasses[theme]} mb-3`}>
            {title}
          </h3>
          
          <p className="text-white/90 text-sm leading-relaxed">
            {hoverInfo[theme]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;