import './StartPage.scss';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../translations';

function StartPage() {
    const { language } = useLanguage();
    const content = translations.startPage[language];

    return (
        <div className="start-page">
            <div className="welcome-section">
                <h1>{content.welcome}</h1>
                <p>{content.description}</p>
            </div>
        </div>
    );
}

export default StartPage;
