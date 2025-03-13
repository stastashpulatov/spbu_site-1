import React, { useState } from 'react';
import { Language } from './LanguageContextType';
import { createLanguageContext } from './createLanguageContext';

export const LanguageContext = createLanguageContext();

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>('ru');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
