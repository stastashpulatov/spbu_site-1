import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './ExamPreparation.scss';

type LevelLink = { text: string; url: string };

type Translations = {
  [key in Language]: {
    title: string;
    videoTitle: string;
    watchOnYouTube: string;
    levelsTitle: string;
    levels: {
      title: string;
      description: string;
      moreInfo?: string;
      links?: LevelLink[];
    }[];
  };
};

const translations: Translations = {
  ru: {
    title: 'Подготовка к экзамену',
    videoTitle: 'Rus tili - chet tili sifatida milliy test tizimi markazi (ТРКИ-TORFL)',
    watchOnYouTube: 'Посмотреть на YouTube',
    levelsTitle: 'Уровни экзамена',
    levels: [
      {
        title: 'Элементарный уровень (ТЭУ / А1)',
        description: 'Тест элементарного уровня (ТЭУ) определяет базовый уровень владения русским языком как иностранным. Этот уровень достаточен для минимального общения в ограниченном числе ситуаций повседневной жизни. Сертификат элементарного уровня необходим для поступления на подготовительный факультет вуза России.',
        links: [
          { text: 'Типовой тест (.pdf)', url: '/files/TEU.pdf' },
          { text: 'Демонстрационный тест, разработанный в СПбГУ. Элементарный уровень (ТЭУ / А1) (.pdf)', url: '/files/A1_demo.pdf' },
          { text: 'Демонстрационный тест, разработанный в СПбГУ. Элементарный уровень (ТЭУ / А1) Вариант 2 (.pdf)', url: '/files/A1_demo_v2.pdf' }
        ]
      },
      {
        title: 'Базовый уровень (ТБУ / А2)',
        description: 'Тест базового уровня (ТБУ) определяет уровень владения русским языком как иностранным, который позволяет удовлетворять самые необходимые коммуникативные потребности в определенных ситуациях повседневного общения.',
        links: [
          { text: 'Типовой тест (.pdf)', url: '/files/TBU.pdf' },
          { text: 'Демонстрационный тест, разработанный в СПбГУ. Базовый уровень (ТБУ / А2) (.pdf)', url: '/files/A2_demo_new.pdf' },
          { text: 'Демонстрационный тест, разработанный в СПбГУ. Базовый уровень (ТБУ / А2) Вариант 2 (.pdf)', url: '/files/A2_demo_v2.pdf' }
        ]
      },
      {
        title: 'Первый уровень (ТРКИ-I / B1)',
        description: 'Первый сертификационный уровень подтверждает способность человека удовлетворять свои коммуникативные потребности во всех сферах общения, а также осуществлять трудовую деятельность в качестве специалиста гуманитарного, инженерно-технического, естественно-научного профилей.',
        links: [
          { text: 'Типовой тест (.pdf)', url: '/files/TRKI-1.pdf' },
          { text: 'Демонстрационный тест, разработанный в СПбГУ. Первый уровень (ТРКИ-I / B1) (.pdf)', url: '/files/TRKI1_demo.pdf' },
          { text: 'Демонстрационный тест, разработанный в СПбГУ. Первый уровень (ТРКИ-I / B1) Вариант 2 (.pdf)', url: '/files/TRKI1_demo_v2.pdf' }
        ]
      },
      {
        title: 'Второй уровень (ТРКИ-II / B2)',
        description: 'Второй сертификационный уровень свидетельствует о достаточно высоком уровне коммуникативной компетенции во всех сферах общения. Этот уровень позволяет вести профессиональную деятельность на русском языке в качестве специалиста гуманитарного, инженерно-технического, естественно-научного профилей.',
        links: [
          { text: 'Типовой тест (.pdf)', url: '/files/TRKI-2.pdf' },
          { text: 'Демонстрационный тест, разработанный в СПбГУ. Второй уровень (ТРКИ-II / B2) (.pdf)', url: '/files/TRKI2_demo.pdf' },
          { text: 'Демонстрационный тест, разработанный в СПбГУ. Второй уровень (ТРКИ-II / B2) Вариант 2 (.pdf)', url: '/files/TRKI2_demo_v2.pdf' }
        ]
      },
      {
        title: 'Третий уровень (ТРКИ-III / C1)',
        description: 'Третий сертификационный уровень подтверждает высокий уровень владения русским языком, близкий к уровню носителя языка. Данный уровень позволяет вести профессиональную деятельность филологического профиля на русском языке.',
        links: [
          { text: 'Типовой тест (.pdf)', url: '/files/TRKI-3.pdf' },
          { text: 'Демонстрационный тест, разработанный в СПбГУ. Третий уровень (ТРКИ-III / C1) (.pdf)', url: '/files/TRKI3_demo_v2.pdf' }
        ]
      },
      {
        title: 'Четвертый уровень (ТРКИ-IV / C2)',
        description: 'Четвертый сертификационный уровень подтверждает свободное владение русским языком. Данный уровень необходим для получения диплома переводчика, а также для преподавания русского языка как иностранного.',
        links: [
          { text: 'Типовой тест (.pdf)', url: '/files/TRKI-4.pdf' },
          { text: 'Демонстрационный тест, разработанный в СПбГУ. Четвертый уровень (ТРКИ-IV / C2) (.pdf)', url: '/files/TRKI4_demo.pdf' }
        ]
      }
    ]
  },
  uz: {
    title: 'Imtihonga tayyorgarlik',
    videoTitle: 'Rus tili - chet tili sifatida milliy test tizimi markazi (ТРКИ-TORFL)',
    watchOnYouTube: "YouTube'da ko'rish",
    levelsTitle: 'Imtihon darajalari',
    levels: [
      {
        title: 'Elementar daraja (ТЭУ / А1)',
        description: "Elementar daraja testi (ТЭУ) rus tilini chet tili sifatida bilishning asosiy darajasini belgilaydi. Bu daraja kundalik hayotning cheklangan holatlarida minimal muloqot uchun yetarli. Elementar daraja sertifikati Rossiya oliy o'quv yurtining tayyorgarlik fakultetiga kirish uchun zarur.",
        links: [
          { text: 'Namuna testi (.pdf)', url: '/files/TEU.pdf' },
          { text: "SPbDU demo testi. ТЭУ / А1 (.pdf)", url: '/files/A1_demo.pdf' },
          { text: "SPbDU demo testi. ТЭУ / А1 Variant 2 (.pdf)", url: '/files/A1_demo_v2.pdf' }
        ]
      },
      {
        title: 'Asosiy daraja (ТБУ / А2)',
        description: "Asosiy daraja testi (ТБУ) rus tilini chet tili sifatida bilish darajasini belgilaydi, bu kundalik muloqotning ma'lum holatlarida eng zarur kommunikativ ehtiyojlarni qondirish imkonini beradi.",
        links: [
          { text: 'Namuna testi (.pdf)', url: '/files/TBU.pdf' },
          { text: "SPbDU demo testi. ТБУ / А2 (.pdf)", url: '/files/A2_demo_new.pdf' },
          { text: "SPbDU demo testi. ТБУ / А2 Variant 2 (.pdf)", url: '/files/A2_demo_v2.pdf' }
        ]
      },
      {
        title: 'Birinchi daraja (ТРКИ-I / B1)',
        description: "Birinchi sertifikat darajasi odamning barcha muloqot sohalarida o'z kommunikativ ehtiyojlarini qondirish qobiliyatini, shuningdek gumanitar, muhandislik-texnik, tabiiy fanlar yo'nalishlari bo'yicha mutaxassis sifatida mehnat faoliyatini amalga oshirish imkonini tasdiqlaydi.",
        links: [
          { text: 'Namuna testi (.pdf)', url: '/files/TRKI-1.pdf' },
          { text: "SPbDU demo testi. TRKI-I / B1 (.pdf)", url: '/files/TRKI1_demo.pdf' },
          { text: "SPbDU demo testi. TRKI-I / B1 Variant 2 (.pdf)", url: '/files/TRKI1_demo_v2.pdf' }
        ]
      },
      {
        title: 'Ikkinchi daraja (ТРКИ-II / B2)',
        description: "Ikkinchi sertifikat darajasi barcha muloqot sohalarida yetarlicha yuqori darajadagi kommunikativ kompetentsiyani ko'rsatadi. Bu daraja rus tilida gumanitar, muhandislik-texnik, tabiiy fanlar yo'nalishlari bo'yicha mutaxassis sifatida professional faoliyatni olib borish imkonini beradi.",
        links: [
          { text: 'Namuna testi (.pdf)', url: '/files/TRKI-2.pdf' },
          { text: "SPbDU demo testi. TRKI-II / B2 (.pdf)", url: '/files/TRKI2_demo.pdf' },
          { text: "SPbDU demo testi. TRKI-II / B2 Variant 2 (.pdf)", url: '/files/TRKI2_demo_v2.pdf' }
        ]
      },
      {
        title: 'Uchinchi daraja (ТРКИ-III / C1)',
        description: "Uchinchi sertifikat darajasi rus tilini bilishning yuqori darajasini, tili asosiy so'zlashuvchisi darajasiga yaqinligini tasdiqlaydi. Bu daraja rus tilida filologiya yo'nalishi bo'yicha professional faoliyatni olib borish imkonini beradi.",
        links: [
          { text: 'Namuna testi (.pdf)', url: '/files/TRKI-3.pdf' },
          { text: "SPbDU demo testi. TRKI-III / C1 (.pdf)", url: '/files/TRKI3_demo_v2.pdf' }
        ]
      },
      {
        title: "To'rtinchi daraja (ТРКИ-IV / C2)",
        description: "To'rtinchi sertifikat darajasi rus tilini erkin bilishni tasdiqlaydi. Bu daraja tarjimon diplomini olish, shuningdek rus tilini chet tili sifatida o'qitish uchun zarur.",
        links: [
          { text: 'Namuna testi (.pdf)', url: '/files/TRKI-4.pdf' },
          { text: "SPbDU demo testi. TRKI-IV / C2 (.pdf)", url: '/files/TRKI4_demo.pdf' }
        ]
      }
    ]
  },
  en: {
    title: 'Exam Preparation',
    videoTitle: 'Russian language - national test system center as a foreign language (TORFL)',
    watchOnYouTube: 'Watch on YouTube',
    levelsTitle: 'Exam levels',
    levels: [
      {
        title: 'Elementary Level (TEU / A1)',
        description: "The Elementary Level Test (TEU) determines the basic level of proficiency in Russian as a foreign language. This level is sufficient for minimal communication in a limited number of everyday situations. The elementary level certificate is required for admission to the preparatory faculty of a Russian university.",
        links: [
          { text: 'Sample test (.pdf)', url: '/files/TEU.pdf' },
          { text: 'SPbU demo test. TEU / A1 (.pdf)', url: '/files/A1_demo.pdf' },
          { text: 'SPbU demo test. TEU / A1 Variant 2 (.pdf)', url: '/files/A1_demo_v2.pdf' }
        ]
      },
      {
        title: 'Basic Level (TBU / A2)',
        description: "The Basic Level Test (TBU) determines the level of proficiency in Russian as a foreign language that allows satisfying the most necessary communicative needs in certain everyday communication situations.",
        links: [
          { text: 'Sample test (.pdf)', url: '/files/TBU.pdf' },
          { text: 'SPbU demo test. TBU / A2 (.pdf)', url: '/files/A2_demo_new.pdf' },
          { text: 'SPbU demo test. TBU / A2 Variant 2 (.pdf)', url: '/files/A2_demo_v2.pdf' }
        ]
      },
      {
        title: 'First Level (TORFL-I / B1)',
        description: "The First Certificate Level confirms a person's ability to satisfy their communicative needs in all areas of communication, as well as to carry out professional activities as a specialist in humanities, engineering, and natural sciences.",
        links: [
          { text: 'Sample test (.pdf)', url: '/files/TRKI-1.pdf' },
          { text: 'SPbU demo test. TORFL-I / B1 (.pdf)', url: '/files/TRKI1_demo.pdf' },
          { text: 'SPbU demo test. TORFL-I / B1 Variant 2 (.pdf)', url: '/files/TRKI1_demo_v2.pdf' }
        ]
      },
      {
        title: 'Second Level (TORFL-II / B2)',
        description: 'The Second Certificate Level indicates a sufficiently high level of communicative competence in all areas of communication. This level allows conducting professional activities in Russian as a specialist in humanities, engineering, and natural sciences.',
        links: [
          { text: 'Sample test (.pdf)', url: '/files/TRKI-2.pdf' },
          { text: 'SPbU demo test. TORFL-II / B2 (.pdf)', url: '/files/TRKI2_demo.pdf' },
          { text: 'SPbU demo test. TORFL-II / B2 Variant 2 (.pdf)', url: '/files/TRKI2_demo_v2.pdf' }
        ]
      },
      {
        title: 'Third Level (TORFL-III / C1)',
        description: "The Third Certificate Level confirms a high level of proficiency in Russian, close to the level of a native speaker. This level allows conducting professional activities in philology in Russian.",
        links: [
          { text: 'Sample test (.pdf)', url: '/files/TRKI-3.pdf' },
          { text: 'SPbU demo test. TORFL-III / C1 (.pdf)', url: '/files/TRKI3_demo_v2.pdf' }
        ]
      },
      {
        title: 'Fourth Level (TORFL-IV / C2)',
        description: "The Fourth Certificate Level confirms free proficiency in Russian. This level is necessary for obtaining a translator's diploma, as well as for teaching Russian as a foreign language.",
        links: [
          { text: 'Sample test (.pdf)', url: '/files/TRKI-4.pdf' },
          { text: 'SPbU demo test. TORFL-IV / C2 (.pdf)', url: '/files/TRKI4_demo.pdf' }
        ]
      }
    ]
  }
};

const ExamPreparation: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="exam-preparation">
      <div className="exam-header">
        <div className="header-content">
          <h1>{t.title}</h1>
          <div className="header-decoration"></div>
        </div>
      </div>

      <div className="exam-container">
        <div className="video-section">
          <div className="video-card">
            <div className="video-wrapper">
              <iframe 
                src="https://www.youtube.com/embed/cH_CTi6LnWk"
                title={t.videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3>{t.videoTitle}</h3>
              <a 
                href="https://www.youtube.com/watch?v=cH_CTi6LnWk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="youtube-button"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {t.watchOnYouTube}
              </a>
            </div>
          </div>
        </div>

        <div className="levels-section">
          <h2>{t.levelsTitle}</h2>
          <div className="levels-grid">
            {t.levels.map((level, index) => (
              <div key={index} className="level-card">
                <div className="level-header">
                  <div className="level-icon">
                    {index + 1}
                  </div>
                  <h3>{level.title}</h3>
                </div>
                <p>{level.description}</p>
                {level.links ? (
                  <div>
                    {level.links.map((lnk, liIdx) => (
                      <div key={liIdx}>
                        <a href={lnk.url} className="more-link" target="_blank" rel="noopener noreferrer">
                          {lnk.text}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  level.moreInfo && (
                    <a href="#" className="more-link">
                      {level.moreInfo} »
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPreparation;
