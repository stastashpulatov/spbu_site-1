import React from 'react';
import { useLocation } from 'react-router-dom';

interface TransitionWrapperProps {
  children: React.ReactNode;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="page-transition" key={location.pathname}>
      {children}
    </div>
  );
};

export default TransitionWrapper;
