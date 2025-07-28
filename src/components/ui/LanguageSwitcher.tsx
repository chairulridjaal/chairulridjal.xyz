import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'id' ? 'ID' : 'EN';

  return (
    <button
      onClick={toggleLanguage}
      className="w-8 h-8 border border-gray-500 rounded-lg flex items-center justify-center hover:border-terminal-green hover:text-terminal-green hover:shadow-terminal-green/30 hover:shadow-lg transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]"
      title={`Switch to ${currentLang === 'EN' ? 'Indonesian' : 'English'}`}
    >
      <span className="text-xs font-mono font-bold">
        {currentLang}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
