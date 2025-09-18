'use client';

import { JobApplicationModal } from '@/components/common/JobApplicationModal/JobApplicationModal';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

import { useModal } from '@/hooks/useModal';

import s from './styles.module.scss';

export const RightSideContent = () => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <div className={s.rightSideContent}>
      <Typography variant={'h2'} className={s.footerTitle}>
        <Typography variant={'decorSpan'}>Werden Sie</Typography> Teil des
        Teams..
      </Typography>
      <Typography variant={'body1'} className={s.footerText}>
        Du bist auf der Suche nach einer neuen Stelle, dann bewirb dich jetzt
      </Typography>
      <Button
        variant={'secondary'}
        type={'button'}
        className={s.rightSideContentButton}
        onClick={onOpen}
      >
        Jetzt Karriere starten
      </Button>
      <JobApplicationModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
