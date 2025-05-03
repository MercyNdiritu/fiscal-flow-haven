
import React, { useRef, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';
import { cn } from '@/lib/utils';

type AnimationVariant = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'bounceIn' | 'bounceInUp' | 'zoomIn' | 'slideInLeft' | 'slideInRight';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
  variant?: AnimationVariant;
  once?: boolean;
}

const AnimateOnScroll = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  duration = 0.6,
  variant = 'bounceIn',
  once = true
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold, once });
  
  const getAnimationClass = (variant: AnimationVariant) => {
    switch(variant) {
      case 'fadeIn':
        return 'opacity-0 transition-opacity duration-700 ease-in';
      case 'fadeInUp':
        return 'opacity-0 translate-y-8 transition-all duration-700 ease-out';
      case 'fadeInDown':
        return 'opacity-0 -translate-y-8 transition-all duration-700 ease-out';
      case 'bounceIn':
        return 'opacity-0 scale-95 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]';
      case 'bounceInUp':
        return 'opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]';
      case 'zoomIn':
        return 'opacity-0 scale-90 transition-all duration-700 ease-out';
      case 'slideInLeft':
        return 'opacity-0 -translate-x-8 transition-all duration-700 ease-out';
      case 'slideInRight':
        return 'opacity-0 translate-x-8 transition-all duration-700 ease-out';
      default:
        return 'opacity-0 transition-opacity duration-700 ease-in';
    }
  };

  const animationClass = getAnimationClass(variant);
  
  return (
    <div 
      ref={ref}
      className={cn(
        animationClass,
        isInView && 'opacity-100 translate-y-0 translate-x-0 scale-100',
        className
      )}
      style={{ 
        transitionDelay: `${delay}s`, 
        transitionDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
