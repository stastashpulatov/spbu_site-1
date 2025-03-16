import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Language } from '../../contexts/LanguageContextType';
import { useTheme } from '../../contexts/ThemeContext';
import './BranchAbout.scss';

type Translations = {
  [key in Language]: {
    title: string;
    mainText: string[];
  };
};

const translations: Translations = {
  ru: {
    title: 'О филиале',
    mainText: [
      'Филиал Санкт-Петербургского государственного университета в г. Ташкенте создан в соответствии с Постановлением Президента Республики Узбекистан от 12 января 2021 года № ПП-4942 «Об организации деятельности филиала Федерального государственного бюджетного образовательного учреждения высшего образования "Санкт-Петербургский государственный университет" в городе Ташкенте» и Постановлением Правительства Российской Федерации от 28 января 2022 года № 11 «О внесении изменений в устав федерального государственного бюджетного образовательного учреждения высшего образования "Санкт-Петербургский государственный университет"».',
      'Филиал является обособленным структурным подразделением СПбГУ, расположенным на территории Республики Узбекистан и осуществляющим подготовку высококвалифицированных специалистов по разным уровням высшего образования, направлениям подготовки и специальностям, а также проведение научно-исследовательской и экспертной работы.',
      'Образовательная деятельность в филиале осуществляется в соответствии с законодательством Российской Федерации по учебным планам и программам, утвержденным СПбГУ.',
      'Учебный процесс филиала обеспечивается профессорско-преподавательским составом СПбГУ как в очном, так и в дистанционном формате. Также на конкурсной основе осуществляется отбор педагогических кадров из числа граждан Республики Узбекистан с целью освоения указанной категорией лиц учебных планов и рабочих программ, разработанных в университете. Также планируется проведение стажировок для преподавателей, ведущих свою профессиональную деятельность на территории Республики Узбекистан, на базе головного университета.',
      'Обучающимся в филиале, завершившим освоение аккредитованных образовательных программ высшего образования и успешно прошедшим итоговую (государственную итоговую) аттестацию, выдаются документы об образовании и (или) о квалификации установленного образца СПбГУ. Документы этой формы имеют официальное признание на территории Республики Узбекистан.'
    ]
  },
  uz: {
    title: 'Filial haqida',
    mainText: [
      'Sankt-Peterburg davlat universitetining Toshkent shahridagi filiali O\'zbekiston Respublikasi Prezidentining 2021-yil 12-yanvardagi "Toshkent shahrida Sankt-Peterburg davlat universiteti filialini tashkil etish to\'g\'risida"gi PQ-4942-son qarori va Rossiya Federatsiyasi Hukumatining 2022-yil 28-yanvardagi "Sankt-Peterburg davlat universiteti ustaviga o\'zgartirish kiritish to\'g\'risida"gi 11-son qarori asosida tashkil etilgan.',
      'Filial SPbDUning O\'zbekiston Respublikasi hududida joylashgan alohida tarkibiy bo\'linmasi bo\'lib, u turli oliy ta\'lim darajalari, yo\'nalishlari va mutaxassisliklari bo\'yicha yuqori malakali mutaxassislar tayyorlash, shuningdek ilmiy-tadqiqot va ekspert ishlarini olib borish bilan shug\'ullanadi.',
      'Filialdagi ta\'lim faoliyati Rossiya Federatsiyasi qonunchiligiga muvofiq SPbDU tomonidan tasdiqlangan o\'quv rejalari va dasturlari asosida amalga oshiriladi.',
      'Filialning o\'quv jarayoni SPbDU professor-o\'qituvchilari tomonidan ham bevosita, ham masofaviy formatda ta\'minlanadi. Shuningdek, O\'zbekiston Respublikasi fuqarolari orasidan pedagogik kadrlar tanlov asosida tanlab olinadi, ular universitetda ishlab chiqilgan o\'quv rejalari va ishchi dasturlarini o\'zlashtirishlari ko\'zda tutilgan. O\'zbekiston Respublikasi hududida faoliyat yuritayotgan o\'qituvchilar uchun bosh universitet bazasida stajirovkalar o\'tkazish ham rejalashtirilgan.',
      'Filialda akkreditatsiyadan o\'tgan oliy ta\'lim dasturlarini o\'zlashtirib, yakuniy (davlat yakuniy) attestatsiyasidan muvaffaqiyatli o\'tgan talabalarga SPbDUning belgilangan namunasidagi ta\'lim va (yoki) malaka haqidagi hujjatlari beriladi. Ushbu shakldagi hujjatlar O\'zbekiston Respublikasi hududida rasman tan olinadi.'
    ]
  },
  en: {
    title: 'About the Branch',
    mainText: [
      'The Branch of St. Petersburg State University in Tashkent was established in accordance with the Decree of the President of the Republic of Uzbekistan No. PP-4942 dated January 12, 2021 "On organizing the activities of the branch of the Federal State Budgetary Educational Institution of Higher Education "St. Petersburg State University" in Tashkent" and the Decree of the Government of the Russian Federation No. 11 dated January 28, 2022 "On amendments to the charter of the federal state budgetary educational institution of higher education "St. Petersburg State University".',
      'The Branch is a separate structural unit of SPbU located in the Republic of Uzbekistan and carries out training of highly qualified specialists in various levels of higher education, areas of training and specialties, as well as conducting research and expert work.',
      'Educational activities in the branch are carried out in accordance with the legislation of the Russian Federation according to curricula and programs approved by SPbU.',
      'The educational process of the branch is provided by the teaching staff of SPbU both in person and in a distance format. Also, pedagogical personnel from among citizens of the Republic of Uzbekistan are selected on a competitive basis to master the specified category of curricula and work programs developed at the university. It is also planned to conduct internships for teachers conducting their professional activities in the Republic of Uzbekistan at the main university.',
      'Students who have completed the accredited educational programs of higher education at the branch and successfully passed the final (state final) certification are issued documents on education and (or) qualification of the standard form of SPbU. Documents of this form have official recognition in the territory of the Republic of Uzbekistan.'
    ]
  }
};

const BranchAbout: React.FC = () => {
  const { theme } = useTheme();
  const langContext = useContext(LanguageContext);
  
  if (!langContext) {
    throw new Error('BranchAbout must be used within Language Provider');
  }
  
  const { language } = langContext;
  const t = translations[language];

  return (
    <div className={`branch-about ${theme}`}>
      <div className="content-container">
        <h1 className="title">{t.title}</h1>
        <div className="image-container">
          <img 
            src="/images/branch-team.png" 
            alt="Branch Team"
            className="team-image"
          />
          <div className="image-caption">
            <div className="logo-text ru">ФИЛИАЛ САНКТ-ПЕТЕРБУРГСКОГО ГОСУДАРСТВЕННОГО УНИВЕРСИТЕТА В ГОРОДЕ ТАШКЕНТЕ</div>
            <div className="logo-text uz">TOSHKENT SHAHRIDAGI SANKT-PETERBURG DAVLAT UNIVERSITETI FILIALI</div>
          </div>
        </div>
        <div className="text-content">
          {t.mainText.map((paragraph, index) => (
            <p key={index} className="paragraph">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchAbout;
