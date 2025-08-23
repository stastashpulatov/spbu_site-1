import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';

type Translations = {
  [key in Language]: {
    redirecting: string;
  };
};

const translations: Translations = {
  ru: {
    redirecting: 'Перенаправление на страницу входа...'
  },
  uz: {
    redirecting: 'Kirish sahifasiga yo\'naltirilmoqda...'
  },
  en: {
    redirecting: 'Redirecting to login page...'
  }
};

const StudentAccount: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('StudentAccount must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  useEffect(() => {
    window.location.href = 'https://application.spbu.ru/rus-sign-in';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '18px',
      color: '#666'
    }}>
      {t.redirecting}
    </div>
  );
};

export default StudentAccount;
