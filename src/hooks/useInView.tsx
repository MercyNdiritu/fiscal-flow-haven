
import { useState, useEffect, RefObject } from 'react';

type IntersectionOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useInView(
  ref: RefObject<Element>,
  options: IntersectionOptions = {}
): boolean {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // If once is true, disconnect after element is in view
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, once]);

  return isInView;
}
