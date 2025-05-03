
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

const CountUp = ({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  decimals = 0,
  suffix = '',
  className = ''
}: CountUpProps) => {
  const [count, setCount] = useState(start);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { threshold: 0.3, once: true });
  const countStarted = useRef(false);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;
    
    const easeOutQuad = (t: number): number => t * (2 - t);
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const currentCount = start + easedProgress * (end - start);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    
    if (isInView && !countStarted.current) {
      countStarted.current = true;
      const timer = setTimeout(() => {
        animationFrameId = window.requestAnimationFrame(step);
      }, delay);
      
      return () => {
        clearTimeout(timer);
        window.cancelAnimationFrame(animationFrameId);
      };
    }
    
    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, duration, end, start, delay]);
  
  return (
    <span ref={nodeRef} className={className}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
