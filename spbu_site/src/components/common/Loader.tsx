import React, { useEffect, useRef } from 'react';
import { TransitionManager, LoaderType } from '../../utils/transitions';

interface LoaderProps {
  type?: LoaderType;
  color?: string;
  size?: number;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  type = 'dots',
  color = '#007bff',
  size = 40,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionManager = TransitionManager.getInstance();

  useEffect(() => {
    if (containerRef.current) {
      transitionManager.showLoader(containerRef.current, {
        type,
        color,
        size,
        duration: 1000,
        easing: 'ease-in-out'
      });
    }

    return () => {
      if (containerRef.current) {
        transitionManager.hideLoader(containerRef.current);
      }
    };
  }, [type, color, size]);

  return <div ref={containerRef} className={className} />;
};

export default Loader;
