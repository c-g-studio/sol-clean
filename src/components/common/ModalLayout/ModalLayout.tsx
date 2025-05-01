import { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CrossIcon } from '@/components/icons/CrossIcon';

import { useModalAnimation } from '@/hooks/useModalAnimation';
import { useScrollLock } from '@/hooks/useScrollLock';

import s from './styles.module.scss';

type TModalProps = {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  layoutClass?: string;
  closeIconClass?: string;
};

export const ModalLayout: FC<TModalProps> = ({
  children,
  onClose,
  isOpen,
  layoutClass,
  closeIconClass
}) => {
  const { mounted, shouldAnimate } = useModalAnimation(isOpen, 300);

  useScrollLock(isOpen);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`${s.backdrop} ${shouldAnimate ? s.open : s.close}`}
      onClick={onClose}
    >
      <div
        className={`${s.modalLayout} ${shouldAnimate ? s.open : s.close} ${layoutClass}`}
        onClick={e => e.stopPropagation()}
      >
        <CrossIcon
          className={`${s.closeBtn} ${closeIconClass}`}
          onClick={onClose}
        />
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};
