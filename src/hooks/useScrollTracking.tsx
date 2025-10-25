import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackScrollDepth } from '@/lib/analytics';

export const useScrollTracking = () => {
  const location = useLocation();
  const scrollTracked = useRef<{ [key: number]: boolean }>({});

  useEffect(() => {
    // Reset tracked depths on page change
    scrollTracked.current = {};

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

      // Track at 25%, 50%, 75%, and 100%
      const thresholds = [25, 50, 75, 100];
      
      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !scrollTracked.current[threshold]) {
          trackScrollDepth(threshold, location.pathname);
          scrollTracked.current[threshold] = true;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
};
