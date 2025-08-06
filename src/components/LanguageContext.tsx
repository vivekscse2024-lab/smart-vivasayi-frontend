import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    appName: 'Smart Vivasayi',
    language: 'English',
    
    // Welcome Modal
    welcomeTitle: 'Welcome Vivasayi!',
    letsStart: 'Let\'s Start',
    
    // Dashboard Cards
    whoIsFarming: 'Who is farming today?',
    guide: 'Guide',
    cropDiseases: 'Crop Diseases',
    cropPrices: 'Crop Prices',
    governmentSchemes: 'Government Schemes',
    
    // Back Button
    back: '← Back',
    
    // Chat Input
    askQuestion: 'Ask your question here...',
    send: 'Send',
    
    // Section Content
    guideTitle: 'Farming Guide',
    diseaseTitle: 'Crop Disease Detection',
    priceTitle: 'Market Prices',
    schemeTitle: 'Government Schemes',
    
    // Info Cards
    guideTip1: 'Best practices for organic farming',
    guideTip2: 'Seasonal crop planning guide',
    guideTip3: 'Soil preparation techniques',
    
    diseaseTip1: 'Early disease detection methods',
    diseaseTip2: 'Common pest identification',
    diseaseTip3: 'Organic treatment solutions',
    
    priceTip1: 'Current market rates',
    priceTip2: 'Price trend analysis',
    priceTip3: 'Best selling locations',
    
    schemeTip1: 'Subsidy applications',
    schemeTip2: 'Loan schemes for farmers',
    schemeTip3: 'Insurance programs',
  },
  ta: {
    // Header
    appName: 'ஸ்மார்ட் விவசாயி',
    language: 'தமிழ்',
    
    // Welcome Modal
    welcomeTitle: 'வரவேற்கிறோம் விவசாயி!',
    letsStart: 'தொடங்குவோம்',
    
    // Dashboard Cards
    whoIsFarming: 'இன்று யார் விவசாயம் செய்கிறார்கள்?',
    guide: 'வழிகாட்டி',
    cropDiseases: 'பயிர் நோய்கள்',
    cropPrices: 'பயிர் விலைகள்',
    governmentSchemes: 'அரசு திட்டங்கள்',
    
    // Back Button
    back: '← பின் செல்',
    
    // Chat Input
    askQuestion: 'உங்கள் கேள்வியை இங்கே கேளுங்கள்...',
    send: 'அனுப்பு',
    
    // Section Content
    guideTitle: 'விவசாய வழிகாட்டி',
    diseaseTitle: 'பயிர் நோய் கண்டறிதல்',
    priceTitle: 'சந்தை விலைகள்',
    schemeTitle: 'அரசு திட்டங்கள்',
    
    // Info Cards
    guideTip1: 'இயற்கை விவசாயத்திற்கான சிறந்த முறைகள்',
    guideTip2: 'பருவகால பயிர் திட்டமிடல்',
    guideTip3: 'மண் தயாரிப்பு நுட்பங்கள்',
    
    diseaseTip1: 'முன்கூட்டிய நோய் கண்டறிதல்',
    diseaseTip2: 'பொதுவான பூச்சி அடையாளம்',
    diseaseTip3: 'இயற்கை சிகிச்சை தீர்வுகள்',
    
    priceTip1: 'தற்போதைய சந்தை விலைகள்',
    priceTip2: 'விலை போக்கு பகுப்பாய்வு',
    priceTip3: 'சிறந்த விற்பனை இடங்கள்',
    
    schemeTip1: 'மானியம் விண்ணப்பங்கள்',
    schemeTip2: 'விவசாயிகளுக்கான கடன் திட்டங்கள்',
    schemeTip3: 'காப்பீட்டு திட்டங்கள்',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ta' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};