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
    const el = containerRef.current;
    if (el) {
      transitionManager.showLoader(el, {
        type,
        color,
        size,
        duration: 1000,
        easing: 'ease-in-out'
      });
    }

    return () => {
      if (el) transitionManager.hideLoader(el);
    };
  }, [type, color, size, transitionManager]);

  return <div ref={containerRef} className={className} />;
};

export default Loader;
