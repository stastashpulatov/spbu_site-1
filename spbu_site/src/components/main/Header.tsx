import { Link } from 'react-router-dom';
import './Header.scss';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import LanguageSelector from '../common/LanguageSelector';

interface MenuItem {
  title: string;
  link?: string;
  submenu?: MenuItem[];
}

interface MenuItems {
  [key: string]: MenuItem[];
}

const menuItems: MenuItems = {
  "Университет": [
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
        { title: 'Руководство', link: '/branch-tashkent/leadership' }
      ]
    }
  ],
  "Образование": [
    { 
      title: 'Бакалавриат',
      submenu: [
        { 
          title: 'Международный бизнес в цифровой экономике',
          link: '/education/bachelor/economy'
        },
        { 
          title: 'Программирование и информационные технологии',
          link: '/education/bachelor/programming'
        }
      ]
    },
    { title: 'Магистратура',
      submenu: [
        { title: 'Международное предпренимательство в цифровой экономике', link: 'economics-international-entrepreneurship-in-the-digital-economy'},
        {title: 'Международное частное право', link: 'jurisprudence-private-international-law'},
        {title: 'Современный Китай: экономика, политика, общество', link: 'oriental-studies-modern-china-economics-politics-society-with-learning-chinese'}

      ]
    }
  ],

  "Поступающим": [
    { title: 'Приём', link: '/admissions' },
    { title: 'Личный кабинет поступающего', link: '/applicant-account' }
  ],
  "Студентам": [
    { title: 'Расписание занятий', link: '/class-schedule' },
    { title: 'Научная библиотека имени М. Горького', link: '/library' },
    { title: 'Личный кабинет студента', link: '/student-account' }
  ],
  "ТРКИ": [
    { title: 'Общая информация', link: '/general-info' },
    { title: 'Подготовка к экзамену', link: '/exam-preparation' }
  ],
  "Новости": [
    { title: 'Основные новости', link: '/news' },
    { title: 'Мероприятия', link: '/events' },
    { title: 'Объявления', link: '/announcements' },
    { title: 'Галерея', link: '/gallery' }
  ],
  "Документы": [
    { title: 'Основные документы', link: '/main-documents' },
    { title: 'Соглашения', link: '/agreements' },
    { title: 'Локальные документы', link: '/local-documents' }
  ],
  "Контакты": [{ title: 'Контактная информация', link: '/contacts' }]
};



function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  
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
      <div className="menu-section">
        {Object.keys(menuItems).map((key) => (
          <div key={key} className="relative">
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
                {menuItems[key].map((item, index) => (
                  <div key={index} className="dropdown-item-container">
                    {item.link ? (
                      item.link.startsWith('http') ? (
                        <a href={item.link} className="dropdown-item text-sm" target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                      ) : (
                        <Link to={item.link} className="dropdown-item text-sm">
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
