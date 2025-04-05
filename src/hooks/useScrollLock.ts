import { useEffect } from 'react';

export const useScrollLock = (locked: boolean) => {
  useEffect(() => {
    const html = document.documentElement;

    if (locked) {
      document.body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      html.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      html.style.overflow = '';
    };
  }, [locked]);
};
