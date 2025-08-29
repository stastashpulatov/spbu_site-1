import { Link } from 'react-router-dom';
import './Header.scss';
import { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import LanguageSelector from '../common/LanguageSelector';
import { useLanguage } from '../../hooks/useLanguage';

interface MenuItem {
  title: string;
  link?: string;
  submenu?: MenuItem[];
  targetBlank?: boolean;
}

type LocalizedMenu = Record<string, MenuItem[]>;

const localizedMenuByLang: Record<'ru' | 'en' | 'uz', { title: string; logoAlt: string; menu: LocalizedMenu }> = {
  ru: {
    title: 'СПБГУ в городе Ташкенте',
    logoAlt: 'СПбГУ логотип',
    menu: {
      'Университет': [
        {
          title: 'Об университете',
          submenu: [
            { title: 'История', link: '/about/history' },
            { title: 'Сведения об СПбГУ', link: '/about/info' }
          ]
        },
        { title: 'Филиал в г.Ташкенте',
          submenu: [
            { title: 'О филиале', link: '/branch-tashkent/about_filial' },
            { title: 'Руководство', link: '/branch-tashkent/leadership' },
            { title: 'Сведения об образовательной организации', link: '/branch-tashkent/sveden' }
          ]
        }
      ],
      'Образование': [
        {
          title: 'Бакалавриат',
          submenu: [
            { title: 'Международный бизнес в цифровой экономике', link: '/education/bachelor/economy' },
            { title: 'Программирование и информационные технологии', link: '/education/bachelor/programming' }
          ]
        },
        { title: 'Магистратура',
          submenu: [
            { title: 'Международное предпринимательство в цифровой экономике', link: '/education/master/digital-entrepreneurship' },
            { title: 'Международное частное право', link: '/education/master/international-private-law' },
            { title: 'Современный Китай: экономика, политика, общество', link: '/education/master/modern-china' }
          ]
        }
      ],
      'Поступающим': [
        { title: 'Приём', link: '/admission' },
        { title: 'Личный кабинет поступающего', link: 'https://application.spbu.ru/rus-sign-in' }
      ],
      'Студентам': [
        { title: 'Расписание занятий', link: '/schedule' },
        { title: 'Научная библиотека имени М. Горького', link: '/library' },
        { title: 'Личный кабинет студента', link: '/student-account', targetBlank: true }
      ],
      'ТРКИ': [
        { title: 'Общая информация', link: '/trki/general-info' },
        { title: 'Подготовка к экзамену', link: '/trki/exam-preparation' }
      ],
      'Новости': [
        { title: 'Основные новости', link: '/news' },
        { title: 'Мероприятия', link: '/events' },
        { title: 'Объявления', link: '/announcements' },
        { title: 'Галерея', link: '/gallery' }
      ],
      'Документы': [
        { title: 'Основные документы', link: '/documents' },
        { title: 'Соглашения', link: '/agreements' },
        { title: 'Локальные документы', link: '/local-documents' }
      ],
      'Контакты': [{ title: 'Контактная информация', link: '/contacts' }]
    }
  },
  en: {
    title: 'SPbU in Tashkent',
    logoAlt: 'SPbU logo',
    menu: {
      'University': [
        {
          title: 'About the University',
          submenu: [
            { title: 'History', link: '/about/history' },
            { title: 'About SPbU', link: '/about/info' }
          ]
        },
        { title: 'Tashkent Branch',
          submenu: [
            { title: 'About the Branch', link: '/branch-tashkent/about_filial' },
            { title: 'Leadership', link: '/branch-tashkent/leadership' },
            { title: 'Organization Information', link: '/branch-tashkent/sveden' }
          ]
        }
      ],
      'Education': [
        {
          title: 'Bachelor',
          submenu: [
            { title: 'International Business in Digital Economy', link: '/education/bachelor/economy' },
            { title: 'Programming and IT', link: '/education/bachelor/programming' }
          ]
        },
        { title: 'Master',
          submenu: [
            { title: 'International Entrepreneurship in Digital Economy', link: '/education/master/digital-entrepreneurship' },
            { title: 'International Private Law', link: '/education/master/international-private-law' },
            { title: 'Modern China: Economy, Politics, Society', link: '/education/master/modern-china' }
          ]
        }
      ],
      'Applicants': [
        { title: 'Admission', link: '/admission' },
        { title: 'Applicant Account', link: 'https://application.spbu.ru/rus-sign-in' }
      ],
      'Students': [
        { title: 'Schedule', link: '/schedule' },
        { title: 'Gorky Scientific Library', link: '/library' },
        { title: 'Student Account', link: '/student-account', targetBlank: true }
      ],
      'TORFL': [
        { title: 'General Information', link: '/trki/general-info' },
        { title: 'Exam Preparation', link: '/trki/exam-preparation' }
      ],
      'News': [
        { title: 'Main News', link: '/news' },
        { title: 'Events', link: '/events' },
        { title: 'Announcements', link: '/announcements' },
        { title: 'Gallery', link: '/gallery' }
      ],
      'Documents': [
        { title: 'Main Documents', link: '/documents' },
        { title: 'Agreements', link: '/agreements' },
        { title: 'Local Documents', link: '/local-documents' }
      ],
      'Contacts': [{ title: 'Contact Information', link: '/contacts' }]
    }
  },
  uz: {
    title: 'Toshkentdagi SPbDU',
    logoAlt: 'SPbDU logotipi',
    menu: {
      'Universitet': [
        {
          title: 'Universitet haqida',
          submenu: [
            { title: 'Tarix', link: '/about/history' },
            { title: 'SPbDU haqida', link: '/about/info' }
          ]
        },
        { title: 'Toshkent filiali',
          submenu: [
            { title: 'Filial haqida', link: '/branch-tashkent/about_filial' },
            { title: 'Rahbariyat', link: '/branch-tashkent/leadership' },
            { title: 'Taʼlim muassasasi haqida maʼlumot', link: '/branch-tashkent/sveden' }
          ]
        }
      ],
      'Taʼlim': [
        {
          title: 'Bakalavriat',
          submenu: [
            { title: 'Raqamli iqtisodiyotda xalqaro biznes', link: '/education/bachelor/economy' },
            { title: 'Dasturlash va axborot texnologiyalari', link: '/education/bachelor/programming' }
          ]
        },
        { title: 'Magistratura',
          submenu: [
            { title: 'Raqamli iqtisodiyotda xalqaro tadbirkorlik', link: '/education/master/digital-entrepreneurship' },
            { title: 'Xalqaro xususiy huquq', link: '/education/master/international-private-law' },
            { title: 'Zamonaviy Xitoy: iqtisodiyot, siyosat, jamiyat', link: '/education/master/modern-china' }
          ]
        }
      ],
      'Abituriyentlar': [
        { title: 'Qabul', link: '/admission' },
        { title: 'Abituriyent kabineti', link: 'https://application.spbu.ru/rus-sign-in' }
      ],
      'Talabalar': [
        { title: 'Dars jadvali', link: '/schedule' },
        { title: 'M. Gorkiy nomidagi ilmiy kutubxona', link: '/library' },
        { title: 'Talaba kabineti', link: '/student-account', targetBlank: true }
      ],
      'TRKI': [
        { title: 'Umumiy maʼlumot', link: '/trki/general-info' },
        { title: 'Imtihonga tayyorgarlik', link: '/trki/exam-preparation' }
      ],
      'Yangiliklar': [
        { title: 'Asosiy yangiliklar', link: '/news' },
        { title: 'Tadbirlar', link: '/events' },
        { title: 'Eʼlonlar', link: '/announcements' },
        { title: 'Galereya', link: '/gallery' }
      ],
      'Hujjatlar': [
        { title: 'Asosiy hujjatlar', link: '/documents' },
        { title: 'Kelishuvlar', link: '/agreements' },
        { title: 'Mahalliy hujjatlar', link: '/local-documents' }
      ],
      'Kontaktlar': [{ title: 'Aloqa maʼlumotlari', link: '/contacts' }]
    }
  }
};



function Header() {
  const { language } = useLanguage();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { title, logoAlt, menu } = useMemo(() => localizedMenuByLang[language], [language]);
  
  const handleMenuEnter = (menu: string) => {
    setOpenMenu(menu);
  };

  const handleMenuLeave = () => {
    setOpenMenu(null);
    setOpenSubmenu(null);
  };

  const handleSubmenuEnter = (submenu: string) => {
    setOpenSubmenu(submenu);
  };

  const handleSubmenuLeave = () => {
    setOpenSubmenu(null);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/images/logo.png" alt={logoAlt} className="header-logo" />
        </Link>
        <div className="header-title">{title}</div>
      </div>
      <div className="menu-section">
        {Object.keys(menu).map((key) => (
          <div key={key} className="relative">
            {menu[key].length > 0 ? (
              <>
                <button
                  className={`header-item flex items-center space-x-1 text-sm ${openMenu === key ? 'menu-open' : ''}`}
                  onMouseEnter={() => handleMenuEnter(key)}
                  onMouseLeave={handleMenuLeave}
                >
                  <span>{key}</span>
                  <ChevronDown size={16} />
                </button>
                {openMenu === key && (
                  <div className="dropdown-menu" onMouseEnter={() => handleMenuEnter(key)} onMouseLeave={handleMenuLeave}>
                    {menu[key].map((item, index) => (
                      <div key={index} className="dropdown-item-container">
                        {item.link ? (
                          item.link.startsWith('http') ? (
                            <a href={item.link} className="dropdown-item text-sm" target="_blank" rel="noopener noreferrer">
                              {item.title}
                            </a>
                          ) : (
                            <Link to={item.link} className="dropdown-item text-sm" target={item.targetBlank ? '_blank' : undefined} rel={item.targetBlank ? 'noopener noreferrer' : undefined}>
                              {item.title}
                            </Link>
                          )
                        ) : (
                          <div 
                            className={`dropdown-item text-sm submenu-trigger ${item.submenu ? 'has-submenu' : ''}`}
                            onMouseEnter={() => handleSubmenuEnter(item.title)}
                            onMouseLeave={handleSubmenuLeave}
                          >
                            {item.title}
                            {item.submenu && (
                              <ChevronDown 
                                size={16} 
                                className="submenu-icon" 
                              />
                            )}
                          </div>
                        )}
                        {item.submenu && openSubmenu === item.title && (
                          <div 
                            className="submenu"
                            onMouseEnter={() => handleSubmenuEnter(item.title)}
                            onMouseLeave={handleSubmenuLeave}
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              subItem.link?.startsWith('http') ? (
                                <a
                                  key={subIndex}
                                  href={subItem.link}
                                  className="dropdown-item text-sm"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {subItem.title}
                                </a>
                              ) : (
                                <Link
                                  key={subIndex}
                                  to={subItem.link || ''}
                                  className="dropdown-item text-sm"
                                  target={subItem.targetBlank ? '_blank' : undefined}
                                  rel={subItem.targetBlank ? 'noopener noreferrer' : undefined}
                                >
                                  {subItem.title}
                                </Link>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={`/${key.toLowerCase()}`}
                className="header-item flex items-center space-x-1 text-sm"
              >
                <span>{key}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="theme-toggle-container">
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
