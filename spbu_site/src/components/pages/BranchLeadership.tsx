import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './Leadership.scss';

type HeadRow = {
  number: number;
  fullName: string;
  position: string;
  phone: string;
  email: string;
};

type BranchHeadRow = {
  number: number;
  branchName: string;
  fullName: string;
  position: string;
  phone: string;
  email: string;
};

type Translations = {
  [key in Language]: {
    title: string;
    mainTableTitle: string;
    branchTableTitle: string;
    heads: HeadRow[];
    branchHeads: BranchHeadRow[];
    headers: {
      number: string;
      fullName: string;
      position: string;
      phone: string;
      email: string;
      branchName?: string;
    };
  };
};

const translations: Translations = {
  ru: {
    title: 'Руководство',
    mainTableTitle: 'Информация о руководителе образовательной организации/заместителях руководителя образовательной организации',
    branchTableTitle: 'Информация о руководителях филиалов образовательной организации',
    headers: {
      number: '№ п/п',
      fullName: 'Фамилия, имя, отчество (при наличии)',
      position: 'Должность',
      phone: 'Контактные телефоны',
      email: 'Адрес электронной почты',
      branchName: 'Наименование филиала',
    },
    heads: [
      { number: 1, fullName: 'Зиядуллаев Махмуджон Джуракулович', position: 'Руководитель', phone: '+998 97 735 48 05', email: 'm.ziyadullaev@spbu.ru' },
    ],
    branchHeads: [
      { number: 1, branchName: 'Отсутствует', fullName: 'Отсутствует', position: 'Отсутствует', phone: 'Отсутствует', email: 'Отсутствует' },
    ],
  },
  uz: {
    title: 'Rahbariyat',
    mainTableTitle: 'Taʼlim tashkiloti rahbari / rahbar o‘rinbosarlari haqida maʼlumot',
    branchTableTitle: 'Taʼlim tashkiloti filiallari rahbarlari haqida maʼlumot',
    headers: {
      number: '№',
      fullName: 'Familiya, ism, otasining ismi (mavjud bo‘lsa)',
      position: 'Lavozimi',
      phone: 'Aloqa telefonlari',
      email: 'Elektron pochta manzili',
      branchName: 'Filial nomi',
    },
    heads: [
      { number: 1, fullName: 'Ziyadullaev Mahmujon Djurakulovich', position: 'Rahbar', phone: '+998 97 735 48 05', email: 'm.ziyadullaev@spbu.ru' },
    ],
    branchHeads: [
      { number: 1, branchName: 'Mavjud emas', fullName: 'Mavjud emas', position: 'Mavjud emas', phone: 'Mavjud emas', email: 'Mavjud emas' },
    ],
  },
  en: {
    title: 'Leadership',
    mainTableTitle: 'Information about the head/deputy heads of the educational organization',
    branchTableTitle: 'Information about heads of the organization’s branches',
    headers: {
      number: 'No.',
      fullName: 'Full name',
      position: 'Position',
      phone: 'Contact phone numbers',
      email: 'Email address',
      branchName: 'Branch name',
    },
    heads: [
      { number: 1, fullName: 'Ziyadullaev Mahmujon Djurakulovich', position: 'Head', phone: '+998 97 735 48 05', email: 'm.ziyadullaev@spbu.ru' },
    ],
    branchHeads: [
      { number: 1, branchName: 'N/A', fullName: 'N/A', position: 'N/A', phone: 'N/A', email: 'N/A' },
    ],
  },
};

const BranchLeadership: React.FC = () => {
  const langContext = useContext(LanguageContext);
  if (!langContext) throw new Error('BranchLeadership must be used within Language Provider');
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="leadership">
      <div className="content-container">
        <div className="main-header">
          <span className="main-header-icon">�</span>
          <h1 className="main-title">{t.title}</h1>
        </div>

        <div className="info-table-container">
          <h2 className="section-title">{t.mainTableTitle}</h2>
          <table className="info-table leadership-table">
            <thead>
              <tr>
                <th>{t.headers.number}</th>
                <th>{t.headers.fullName}</th>
                <th>{t.headers.position}</th>
                <th>{t.headers.phone}</th>
                <th>{t.headers.email}</th>
              </tr>
            </thead>
            <tbody>
              {t.heads.map(row => (
                <tr key={row.number}>
                  <td>{row.number}</td>
                  <td>{row.fullName}</td>
                  <td>{row.position}</td>
                  <td>{row.phone}</td>
                  <td><a href={`mailto:${row.email}`}>{row.email}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="info-table-container">
          <h2 className="section-title">{t.branchTableTitle}</h2>
          <table className="info-table leadership-table">
            <thead>
              <tr>
                <th>{t.headers.number}</th>
                <th>{t.headers.branchName}</th>
                <th>{t.headers.fullName}</th>
                <th>{t.headers.position}</th>
                <th>{t.headers.phone}</th>
                <th>{t.headers.email}</th>
              </tr>
            </thead>
            <tbody>
              {t.branchHeads.map(row => (
                <tr key={row.number}>
                  <td>{row.number}</td>
                  <td>{row.branchName}</td>
                  <td>{row.fullName}</td>
                  <td>{row.position}</td>
                  <td>{row.phone}</td>
                  <td>{row.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BranchLeadership;


