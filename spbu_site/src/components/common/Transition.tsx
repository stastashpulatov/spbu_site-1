import React, { useEffect, useRef } from 'react';
import { TransitionManager, TransitionType } from '../../utils/transitions';

interface TransitionProps {
  children: React.ReactNode;
  type?: TransitionType;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  easing?: string;
  className?: string;
}

const Transition: React.FC<TransitionProps> = ({
  children,
  type = 'fade',
  direction = 'left',
  duration = 300,
  easing = 'ease-in-out',
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const transitionManager = TransitionManager.getInstance();

  useEffect(() => {
    if (elementRef.current) {
      transitionManager.animateElement(elementRef.current, {
        type,
        direction,
        duration,
        easing
      });
    }
  }, [children]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default Transition;
