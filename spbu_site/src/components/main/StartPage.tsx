import './StartPage.scss';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../translations';
import { Link } from 'react-router-dom';
import NewsBar from '../shared/NewsBar';

function StartPage() {
    const { language } = useLanguage();
    const content = translations.startPage[language];

    return (
        <div className="start-page">
            <div className="banner">
                <div className="banner-content">
                    <h1>{content.welcome}</h1>
                    <p>{content.description}</p>
                    <Link to="/about" className="main-btn">Подробнее</Link>
                </div>
            </div>
            <NewsBar />
            <div className="flex-spacer" />
            <div className="info-cards">
                <Link to="/documents" className="info-card">
                    <div className="icon license" />
                    <div>
                        <div className="card-title">Лицензия</div>
                        <div className="card-desc">Лицензия на осуществление образовательной деятельности</div>
                    </div>
                </Link>
                <Link to="/branch-tashkent/sveden" className="info-card">
                    <div className="icon university" />
                    <div>
                        <div className="card-title">Сведения об образовательной организации</div>
                        <div className="card-desc">Информация о филиале Санкт-Петербургского государственного университета в городе Ташкенте</div>
                    </div>
                </Link>
                <Link to="/branch-tashkent/leadership" className="info-card">
                    <div className="icon staff" />
                    <div>
                        <div className="card-title">Сотрудники</div>
                        <div className="card-desc">Профессорско-преподавательский состав</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default StartPage;
