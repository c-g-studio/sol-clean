import { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CrossIcon } from '@/components/icons/CrossIcon';

import { useModalAnimation } from '@/hooks/useModalAnimation';
import { useScrollLock } from '@/hooks/useScrollLock';

import s from './styles.module.scss';

type TModalProps = {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
};

export const Modal: FC<TModalProps> = ({ children, onClose, open }) => {
  const { mounted, shouldAnimate } = useModalAnimation(open, 300);

  useScrollLock(open);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`${s.backdrop} ${shouldAnimate ? s.open : s.close}`}
      onClick={onClose}
    >
      <div
        className={`${s.modal} ${shouldAnimate ? s.open : s.close}`}
        onClick={e => e.stopPropagation()}
      >
        <CrossIcon className={s.closeBtn} onClick={onClose} />
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};
