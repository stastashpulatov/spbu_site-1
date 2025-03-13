import { createContext } from 'react';
import { LanguageContextType } from './LanguageContextType';

export const createLanguageContext = () => {
    return createContext<LanguageContextType | undefined>(undefined);
};
