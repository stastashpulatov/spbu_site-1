import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import './LanguageSelector.scss';

const languages: Record<string, string> = {
    'ru': 'Русский',
    'en': 'English',
    'uz': 'Oʻzbek'
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
                    {Object.entries(languages).map(([code, name]) => (
                        <button
                            key={code}
                            className={`language-option ${code === language ? 'active' : ''}`}
                            onClick={() => {
                                setLanguage(code as 'ru' | 'en' | 'uz');
                                setIsOpen(false);
                            }}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
