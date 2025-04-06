import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import HomeButton from './HomeButton';
import './ProgramPage.scss';

interface ProgramInfo {
  backgroundImage?: string;
  backgroundPosition?: string;
  title: string;
  code: string;
  level: string;
  form: string;
  duration: string;
  department: string;
  cost: string;
  admissionTitle: string;
  admissionText: string[];
  mainCoursesTitle: string;
  mainCourses: string[];
  mainProgramPoints: string[];
}

interface ProgramPageProps {
  programInfo: ProgramInfo;
}

const ProgramPage: React.FC<ProgramPageProps> = ({ programInfo }) => {
  const heroStyle = programInfo.backgroundImage ? {
    backgroundImage: `url(${programInfo.backgroundImage})`,
    backgroundPosition: programInfo.backgroundPosition || 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  } : {};
  const { theme } = useTheme();

  return (
    <div className={`program-page ${theme}`}>
      <HomeButton />
      <div className="program-container">
        <div className="program-header" style={heroStyle}>
          <h1>{programInfo.title}</h1>
          <div className="program-code">{programInfo.code}</div>
        </div>

        <div className="program-info-grid">
          <div className="info-card">
            <div className="label">Уровень образования</div>
            <div className="value">{programInfo.level}</div>
          </div>
          <div className="info-card">
            <div className="label">Форма обучения</div>
            <div className="value">{programInfo.form}</div>
          </div>
          <div className="info-card">
            <div className="label">Срок обучения</div>
            <div className="value">{programInfo.duration}</div>
          </div>
          <div className="info-card">
            <div className="label">Кафедра</div>
            <div className="value">{programInfo.department}</div>
          </div>
          <div className="info-card">
            <div className="label">Стоимость обучения в год</div>
            <div className="value">{programInfo.cost}</div>
          </div>
        </div>

        <div className="program-section">
          <h2>
            <span className="section-icon">📝</span>
            {programInfo.admissionTitle}
          </h2>
          <div className="section-content">
            <ul>
              {programInfo.admissionText.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="program-section">
          <h2>
            <span className="section-icon">📚</span>
            {programInfo.mainCoursesTitle}
          </h2>
          <div className="section-content">
            <ul>
              {programInfo.mainCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="program-section">
          <h2>
            <span className="section-icon">🎯</span>
            О программе
          </h2>
          <div className="section-content">
            {programInfo.mainProgramPoints.map((point, index) => (
              <p key={index}>{point}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
