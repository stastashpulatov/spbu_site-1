export type Language = 'ru' | 'en' | 'uz';

export interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
}
