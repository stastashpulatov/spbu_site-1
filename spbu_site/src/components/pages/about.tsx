import React from 'react';
import './about.scss';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../translations';

const About: React.FC = () => {
    const { language } = useLanguage();
    const content = translations.about[language];

    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">{content.title}</h1>
                
                <section className="about-section">
                    <h2>{content.history.title}</h2>
                    <p>{content.history.content}</p>
                </section>

                <section className="about-section">
                    <h2>{content.mission.title}</h2>
                    <p>{content.mission.content}</p>
                </section>

                <section className="about-section">
                    <h2>{content.education.title}</h2>
                    <ul className="education-list">
                        {content.education.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="about-section">
                    <h2>{content.advantages.title}</h2>
                    <div className="advantages-grid">
                        {content.advantages.items.map((item, index) => (
                            <div key={index} className="advantage-item">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
