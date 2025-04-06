import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeButton.scss';

const HomeButton: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  return (
    <button 
      className="home-button"
      onClick={() => navigate('/')}
      aria-label="На главную (Ctrl + H)"
      title="На главную (Ctrl + H)"
    >
      <div className="button-content">
        <div className="icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="icon-path"
            />
          </svg>
        </div>
        <span className="text">На главную</span>
        <div className="particles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>
      </div>
    </button>
  );
};

export default HomeButton;
