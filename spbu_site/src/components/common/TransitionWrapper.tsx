import React from 'react';
import { useLocation } from 'react-router-dom';
import './TransitionWrapper.scss';

interface TransitionWrapperProps {
  children: React.ReactNode;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="pages-container">
      <div className="page-transition" key={location.pathname}>
        {children}
      </div>
    </div>
  );
};

export default TransitionWrapper;
