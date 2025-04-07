import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { Language } from '../../contexts/LanguageContextType';
import './LanguageSelector.scss';

const languages: Record<Language, string> = {
    'ru': '🇷🇺',
    'en': '🇬🇧',
    'uz': '🇺🇿'
};

const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="language-selector">
            <button
                className="language-button"
                onClick={toggleDropdown}
            >
                <span>{languages[language]}</span>
                <ChevronDown size={16} />
            </button>
            {isOpen && (
                <div className="language-dropdown">
                    {Object.entries(languages).map(([code, flag]) => (
                        <button
                            key={code}
                            className={`language-option ${code === language ? 'active' : ''}`}
                            onClick={() => {
                                setLanguage(code as Language);
                                setIsOpen(false);
                            }}
                        >
                            <span className="flag">{flag}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
