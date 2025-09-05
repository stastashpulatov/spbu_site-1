import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './TransitionWrapper.scss';

interface TransitionWrapperProps {
  children: React.ReactNode;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // Добавляем data-reveal к часто используемым блокам, чтобы задействовать анимации появления
    const candidatesSelector = [
      '.section-block',
      '.info-table-container',
      '.section-card',
      '.leader-card',
      '.document-link',
      '.employment-table tr',
      '.program-description-table tr',
      '.employees-table tr',
      '.programs-scan-list .program-item'
    ].join(',');

    const candidates = Array.from(root.querySelectorAll<HTMLElement>(candidatesSelector));
    candidates.forEach((el, index) => {
      if (!el.hasAttribute('data-reveal')) {
        el.setAttribute('data-reveal', '');
        el.style.setProperty('--reveal-delay', `${Math.min(index * 40, 360)}ms`);
      }
    });

    // IntersectionObserver для плавного появления
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('reveal-visible');
            io.unobserve(target);
          }
        });
      },
      { root: null, threshold: 0.08 }
    );

    candidates.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <div className="pages-container">
      <div className="page-transition" key={location.pathname} ref={containerRef}>
        {children}
      </div>
    </div>
  );
};

export default TransitionWrapper;
