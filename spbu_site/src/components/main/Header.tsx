import './Header.scss';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';

interface MenuItems {
  [key: string]: string[];
}

const menuItems: MenuItems = {
  "Университет": ['Об университете', 'Филиал в Ташкенте'],
  "Образование": ['Бакалавриат', 'Магистратура'],
  "Поступающим": ['Приём', 'Личный кабинет поступающего'],
  "Студентам": ['Расписание занятий', 'Научная библиотека имени М. Горького', 'Личный кабинет студента'],
  "ТРКИ": ['Общая информация', 'Подготовка к экзамену'],
  "Новости": ['Основные новости', 'Мероприятия', 'Объявления', 'Галерея'],
  "Документы": ['Основные документы', 'Соглашения', 'Локальные документы'],
  "Контакты": [],
};

const menuLinks: MenuItems = {
  "Университет": ['/about/', '/branch-tashkent/'],
  "Образование": ['/undergraduate/', '/graduate/'],
  "Поступающим": ['/admissions/', '/applicant-account/'],
  "Студентам": ['/class-schedule/', '/library/', '/student-account/'],
  "ТРКИ": ['/general-info/', '/exam-preparation/'],
  "Новости": ['/news/', '/events/', '/announcements/', '/gallery/'],
  "Документы": ['/main-documents/', '/agreements/', '/local-documents/'],
  "Контакты": [],
};

function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    if (menuItems[menu].length === 0) {
      setOpenMenu(null);
    } else {
      setOpenMenu(openMenu === menu ? null : menu);
    }
  };

  return (
    <div className="header">
      <div className="menu-section">
        {Object.keys(menuItems).map((key) => (
          <div key={key} className="relative">
            <button
              className="header-item flex items-center space-x-1 text-sm"
              onMouseEnter={() => toggleMenu(key)}
            >
              <span>{key}</span>
              {menuItems[key].length > 0 && <ChevronDown size={16} />}
            </button>
            {openMenu === key && menuItems[key].length > 0 && (
              <div className="dropdown-menu">
                {menuItems[key].map((item, index) => (
                  <a
                    key={item}
                    href={menuLinks[key][index]}
                    className="dropdown-item text-sm"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;
