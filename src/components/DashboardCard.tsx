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
          glass-card p-8 rounded-2xl cursor-pointer card-hover-effect
          ${themeClasses[theme]}
          border-2 w-48 h-56 relative overflow-hidden
          transform transition-all duration-500 ease-out
          hover:border-opacity-80 hover:shadow-2xl hover:shadow-primary/20
          animate-scale-in
        `}
        style={{ animationDelay: `${Math.random() * 0.3}s` }}
      >
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          theme === 'guide' ? 'from-guide/5 to-guide/15' :
          theme === 'disease' ? 'from-disease/5 to-disease/15' :
          theme === 'price' ? 'from-price/5 to-price/15' :
          'from-scheme/5 to-scheme/15'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
        
        <div className={`w-20 h-20 ${iconBgClasses[theme]} rounded-2xl flex items-center justify-center mb-6 mx-auto relative z-10 transition-all duration-300 group-hover:scale-110`}>
          <span className="text-4xl transition-transform duration-300 group-hover:rotate-12">{icon}</span>
        </div>
        
        <h3 className={`text-xl font-semibold text-center ${textClasses[theme]} relative z-10 transition-all duration-300 group-hover:scale-105`}>
          {title}
        </h3>
        
        <div className={`w-12 h-1 ${textClasses[theme]} opacity-30 mx-auto mt-4 rounded-full relative z-10 transition-all duration-300 group-hover:w-16 group-hover:opacity-60`}></div>
      </div>
      
      {/* Enhanced hover tooltip */}
      {isHovered && (
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-black/90 backdrop-blur-sm text-white px-6 py-3 rounded-xl text-sm whitespace-nowrap tooltip-animate shadow-xl border border-white/10">
            {hoverInfo[theme]}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/90 rotate-45 border-l border-t border-white/10"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardCard;