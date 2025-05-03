
import { useState, useEffect, RefObject } from 'react';

type IntersectionOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  triggerOnce?: boolean;
};

export function useInView(
  ref: RefObject<Element>,
  options: IntersectionOptions = {}
): boolean {
  const { threshold = 0.1, rootMargin = '0px', once = true, triggerOnce = once } = options;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // If triggerOnce is true, disconnect after element is in view
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, triggerOnce]);

  return isInView;
}
