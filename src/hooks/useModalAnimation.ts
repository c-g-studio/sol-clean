import { useEffect, useState } from 'react';

interface IUseModalAnimation {
  (
    open: boolean,
    animationTime: number
  ): { mounted: boolean; shouldAnimate: boolean };
}

export const useModalAnimation: IUseModalAnimation = (open, animationTime) => {
  const [mounted, setMounted] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
      const timeout = setTimeout(() => {
        setMounted(false);
      }, animationTime);
      return () => clearTimeout(timeout);
    }
  }, [open, animationTime]);

  return { mounted, shouldAnimate };
};
