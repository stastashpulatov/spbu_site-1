import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';

// Inline-styled version to ensure immediate visual appearance without relying on SCSS

type Translations = {
  [key in Language]: {
    title: string;
    description: string[];
    address: {
      title: string;
      text: string;
    };
    contacts: {
      title: string;
      phone: string;
      email: string;
    };
  };
};

const translations: Translations = {
  ru: {
    title: 'О филиале',
    description: [
      'Филиал Санкт-Петербургского государственного университета в городе Ташкенте был основан в 2022 году.',
      'Филиал предоставляет качественное образование по программам бакалавриата, основанным на высоких стандартах СПбГУ.',
      'Наша миссия - подготовка высококвалифицированных специалистов, способных внести значительный вклад в развитие экономики и общества.'
    ],
    address: {
      title: 'Адрес',
      text: 'улица Шахрисабз 25, 100060, Ташкент, Tashkent, Узбекистан'
    },
    contacts: {
      title: 'Контакты',
      phone: '+998 71 203 22 06',
      email: 'info@spbu.uz'
    }
  },
  uz: {
    title: 'Filial haqida',
    description: [
      'Sankt-Peterburg davlat universitetining Toshkent shahridagi filiali 2022-yilda tashkil etilgan.',
      'Filial SPbDUning yuqori standartlariga asoslangan bakalavriat dasturlari bo\'yicha sifatli ta\'lim beradi.',
      'Bizning vazifamiz - iqtisodiyot va jamiyat rivojiga sezilarli hissa qo\'shishga qodir yuqori malakali mutaxassislarni tayyorlash.'
    ],
    address: {
      title: 'Manzil',
      text: 'Toshkent shahri, Mirzo Ulug\'bek tumani, Istiqbol ko\'chasi, 15'
    },
    contacts: {
      title: 'Kontaktlar',
      phone: '+998 71 203 22 06',
      email: 'info@spbu.uz'
    }
  },
  en: {
    title: 'About the Branch',
    description: [
      'The branch of Saint Petersburg State University in Tashkent was established in 2022.',
      'The branch provides quality education in bachelor\'s degree programs based on SPbU\'s high standards.',
      'Our mission is to prepare highly qualified specialists capable of making a significant contribution to the development of the economy and society.'
    ],
    address: {
      title: 'Address',
      text: '15 Istiqbol Street, Mirzo-Ulugbek District, Tashkent'
    },
    contacts: {
      title: 'Contacts',
      phone: '+998 71 203 22 06',
      email: 'info@spbu.uz'
    }
  }
};

const BranchAbout: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('BranchAbout must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      padding: '2rem 0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
          borderRadius: '25px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '2px solid rgba(255,255,255,0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            fontSize: '4rem',
            display: 'block',
            marginBottom: '1rem',
            animation: 'bounce 2s infinite'
          }}>🏛️</div>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #a94442, #e87681)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: 0,
            position: 'relative'
          }}>
            {t.title}
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '150px',
              height: '5px',
              background: 'linear-gradient(90deg, #a94442, #e87681)',
              borderRadius: '3px',
              boxShadow: '0 5px 15px rgba(169,68,66,0.4)'
            }}></div>
          </h1>
        </div>

        {/* Team Image */}
        <div style={{
          margin: '0 -2rem 4rem',
          position: 'relative',
          borderRadius: '25px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
          border: '4px solid rgba(255,255,255,0.4)',
          transition: 'all 0.5s ease'
        }}>
          <img 
            src="/images/branch-team.png" 
            alt="Branch Team" 
            style={{
              width: '100%',
              height: '500px',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Description Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))',
            borderRadius: '25px',
            padding: '3rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            border: '2px solid rgba(255,255,255,0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '8px',
              height: '100%',
              background: 'linear-gradient(180deg, #a94442, #e87681)',
              borderRadius: '0 4px 4px 0'
            }}></div>
            {t.description.map((paragraph, index) => (
              <p key={index} style={{
                fontSize: '1.2rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
                color: '#374151',
                textAlign: 'justify',
                position: 'relative',
                zIndex: 1
              }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Info Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}>
            {/* Address Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
              border: '2px solid rgba(255,255,255,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '6px',
                height: '100%',
                background: 'linear-gradient(180deg, #a94442, #e87681)',
                borderRadius: '0 3px 3px 0'
              }}></div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                marginBottom: '2rem'
              }}>
                <span style={{
                  fontSize: '2.2rem',
                  background: 'linear-gradient(135deg, #a94442, #e87681)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>📍</span>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #a94442, #e87681)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0
                }}>{t.address.title}</h2>
              </div>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: '#4b5563',
                padding: '1.2rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(169,68,66,0.1), rgba(232,118,129,0.1))',
                borderRadius: '15px',
                margin: 0,
                border: '1px solid rgba(169,68,66,0.2)'
              }}>{t.address.text}</p>
            </div>

            {/* Contacts Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
              border: '2px solid rgba(255,255,255,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '6px',
                height: '100%',
                background: 'linear-gradient(180deg, #a94442, #e87681)',
                borderRadius: '0 3px 3px 0'
              }}></div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                marginBottom: '2rem'
              }}>
                <span style={{
                  fontSize: '2.2rem',
                  background: 'linear-gradient(135deg, #a94442, #e87681)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>📞</span>
                <h2 style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #a94442, #e87681)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0,
                  position: 'relative'
                }}>
                  {t.contacts.title}
                  <div style={{
                    position: 'absolute',
                    bottom: '-0.8rem',
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #a94442, #e87681)',
                    borderRadius: '2px',
                    boxShadow: '0 4px 12px rgba(169,68,66,0.4)'
                  }}></div>
                </h2>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem'
              }}>
                <a href={`tel:${t.contacts.phone}`} style={{
                  color: '#a94442',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  padding: '1.2rem 1.5rem',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'linear-gradient(135deg, rgba(169,68,66,0.1), rgba(232,118,129,0.1))',
                  border: '2px solid rgba(169,68,66,0.2)',
                  transition: 'all 0.4s ease'
                }}>
                  <span style={{ fontSize: '1.4rem' }}>📞</span>
                  {t.contacts.phone}
                </a>
                <a href={`mailto:${t.contacts.email}`} style={{
                  color: '#a94442',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  padding: '1.2rem 1.5rem',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'linear-gradient(135deg, rgba(169,68,66,0.1), rgba(232,118,129,0.1))',
                  border: '2px solid rgba(169,68,66,0.2)',
                  transition: 'all 0.4s ease'
                }}>
                  <span style={{ fontSize: '1.4rem' }}>✉️</span>
                  {t.contacts.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default BranchAbout;
