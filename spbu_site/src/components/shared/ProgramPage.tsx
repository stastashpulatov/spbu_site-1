import React from 'react';
import './ProgramPage.scss';

interface ProgramInfo {
  backgroundImage?: string;
  backgroundPosition?: string;
  title: string;
  code?: string;
  level?: string;
  form?: string;
  duration?: string;
  department?: string;
  cost?: string;
  description?: string;
  admissionTitle: string;
  admissionText: string[];
  mainCoursesTitle: string;
  mainCourses: string[];
  mainProgramTitle?: string;
  mainProgramPoints: string[];
  teachersTitle?: string;
  teachers?: string[];
}

interface ProgramPageProps {
  programInfo: ProgramInfo;
}

const ProgramPage: React.FC<ProgramPageProps> = ({ programInfo }) => {
  const headerStyle: React.CSSProperties = {
    backgroundImage: programInfo.backgroundImage
      ? `url(${programInfo.backgroundImage})`
      : undefined,
    backgroundPosition: programInfo.backgroundPosition || 'center',
  };

  return (
    <div className="program-page">
      <div className="program-container">
        <div className="program-header" style={headerStyle}>
          <div className="hero-content">
            <div className="page-title-container">
              <span className="page-title-icon">🎓</span>
              <div className="page-title-content">
                <h1 className="page-main-title" data-text={programInfo.title}>
                  {programInfo.title}
                </h1>
                {programInfo.description && (
                  <p className="page-subtitle">{programInfo.description}</p>
                )}
              </div>
            </div>
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
            {programInfo.mainProgramTitle || 'О программе'}
          </h2>
          <div className="section-content">
            {programInfo.mainProgramPoints.map((point, index) => (
              <p key={index}>{point}</p>
            ))}
          </div>
        </div>

        {programInfo.teachersTitle && (
          <div className="program-section">
            <h2>
              <span className="section-icon">👥</span>
              {programInfo.teachersTitle}
            </h2>
            <div className="section-content">
              <ul>
                {programInfo.teachers?.map((teacher, index) => (
                  <li key={index}>{teacher}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgramPage;