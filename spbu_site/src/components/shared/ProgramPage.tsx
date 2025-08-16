import React, { useRef, useEffect } from 'react';
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
  mainProgramTitle?: string;
  mainProgramPoints: string[];
  teachersTitle?: string;
  teachers?: string[];
}

interface ProgramPageProps {
  programInfo: ProgramInfo;
}

const ProgramPage: React.FC<ProgramPageProps> = ({ programInfo }) => {

  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxElements = parallaxRef.current.querySelectorAll('.parallax-bg');
        
        parallaxElements.forEach((element) => {
          const speed = 0.5;
          const yPos = -(scrolled * speed);
          (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const heroStyle = programInfo.backgroundImage ? {
    backgroundImage: `url(${programInfo.backgroundImage})`,
    backgroundPosition: programInfo.backgroundPosition || 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  } : {};


  return (
    <div className="program-page">
      <div className="content-container">
        <div className="program-header" style={heroStyle}>
          <h1>{programInfo.title}</h1>
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