import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import './TRKIGeneralInfo.scss';

type Translations = {
  [key in Language]: {
    title: string;
    text1: string;
    text2: string;
    priceText: string;
    price: string;
    note: string;
    contactTitle: string;
    contactText: string;
    phone: string;
  };
};

const translations: Translations = {
  ru: {
    title: 'Общая информация',
    text1: 'Приказом Минобрнауки России от 6 июля 2019 года №47 СПбГУ присвоен статус головного центра тестирования иностранных граждан по русскому языку (ТРКИ), и уполномочен на выдачу сертификата государственного образца. Филиал СПбГУ стремится развить сеть центров тестирования, обеспечивающих проведение тестов владения русским языком (ТРКИ) на территории Республики Узбекистан, а также развивать сотрудничество в области (CEFR). Сертификат ТРКИ признается на государственном уровне во многих странах мира, таких как Армения, Турция, Италия, Польша, Румыния, Грузия, Узбекистан и т.д.',
    text2: 'В филиале Санкт-Петербургского государственного университета в г. Ташкенте ТРКИ проводится еженедельно. На основе указа Президента Республики Узбекистан №УП-5847 от 21.10.2019 г. «Об утверждении стратегии развития системы высшего образования Республики Узбекистан до 2030 года» тестирование проводится на договорной основе.',
    priceText: 'Стоимость прохождения экзамена:',
    price: '80$',
    note: 'Оплата производится в узбекских сумах',
    contactTitle: 'Справки для регистрации',
    contactText: 'Подробная информация по телефону:',
    phone: '+998 90 965 66 44'
  },
  uz: {
    title: 'Umumiy ma\'lumot',
    text1: 'Rossiya Oliy ta\'lim va fan vazirligining 2019 yil 6 iyuldagi №47 buyrug\'i bilan SPbDUga chet ellik fuqarolarni rus tilida sinash (TRKI) bo\'yicha bosh markaz maqomi berildi va davlat namunasidagi sertifikat berish huquqi berildi. SPbDU filiali O\'zbekiston Respublikasi hududida rus tilini bilish (TRKI) testlarini o\'tkazishni ta\'minlovchi sinash markazlari tarmog\'ini rivojlantirish va (CEFR) sohasida hamkorlikni rivojlantirishga intiladi. TRKI sertifikati dunyoning ko\'plab mamlakatlarida, masalan, Armaniston, Turkiya, Italiya, Polsha, Ruminiya, Gruziya, O\'zbekiston va boshqalarda davlat darajasida tan olinadi.',
    text2: 'Toshkent shahridagi Sankt-Peterburg davlat universiteti filialida TRKI haftalik o\'tkaziladi. O\'zbekiston Respublikasi Prezidentining 21.10.2019 yildagi №УП-5847 farmoni «O\'zbekiston Respublikasi oliy ta\'lim tizimini 2030 yilgacha rivojlantirish strategiyasini tasdiqlash to\'g\'risida» asosida sinash shartnoma asosida o\'tkaziladi.',
    priceText: 'Imtihon topshirish narxi:',
    price: '950',
    note: 'To\'lov o\'zbek so\'mlarida amalga oshiriladi',
    contactTitle: 'Ro\'yxatdan o\'tish uchun ma\'lumot',
    contactText: 'Batafsil ma\'lumot uchun telefon:',
    phone: '+998 90 965 66 44'
  },
  en: {
    title: 'General Information',
    text1: 'By order of the Ministry of Education and Science of Russia dated July 6, 2019 No. 47, SPbU was assigned the status of the main center for testing foreign citizens in Russian language (TRKI) and is authorized to issue state-issued certificates. The SPbU branch strives to develop a network of testing centers that ensure the conduct of Russian language proficiency tests (TRKI) in the territory of the Republic of Uzbekistan, as well as to develop cooperation in the field of (CEFR). The TRKI certificate is recognized at the state level in many countries of the world, such as Armenia, Turkey, Italy, Poland, Romania, Georgia, Uzbekistan, etc.',
    text2: 'At the branch of Saint Petersburg State University in Tashkent, TRKI is conducted weekly. Based on the Decree of the President of the Republic of Uzbekistan No. UP-5847 dated 21.10.2019 "On approval of the strategy for the development of the higher education system of the Republic of Uzbekistan until 2030", testing is conducted on a contractual basis.',
    priceText: 'Exam fee:',
    price: '950',
    note: 'Payment is made in Uzbek soums',
    contactTitle: 'Registration inquiries',
    contactText: 'Detailed information by phone:',
    phone: '+998 90 965 66 44'
  }
};

const TRKIGeneralInfo: React.FC = () => {
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('TRKIGeneralInfo must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className="trki-general-info">
      <div className="page-container">
        <h1>{t.title}</h1>
        
        <div className="content">
          <div className="text-block">
            <p>{t.text1}</p>
          </div>

          <div className="text-block">
            <p>{t.text2}</p>
          </div>
          
          <div className="info-box">
            <p>{t.priceText} <span className="price">{t.price}</span></p>
            <p className="note">{t.note}</p>
          </div>

          <div className="contact-box">
            <h3>{t.contactTitle}</h3>
            <p>{t.contactText} <a href={`tel:${t.phone}`} className="phone-link">{t.phone}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRKIGeneralInfo;
