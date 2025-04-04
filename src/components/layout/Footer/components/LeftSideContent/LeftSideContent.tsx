import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

import s from './styles.module.scss';

export const LeftSideContent = () => {
  return (
    <div className={s.leftSideContent}>
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
        className={s.leftSideContentButton}
      >
        Jetzt Karriere starten
      </Button>
    </div>
  );
};
