import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';

export const CleaningSection = () => {
  return (
    <section className={s.clearAllSection}>
      <AppContainer>
        <Typography variant={'h2'} className={s.sectionTitle}>
          <Typography variant={'decorSpan'}>Warum</Typography> ist die Reinigung
          von PV-Systemen wichtig?
        </Typography>
      </AppContainer>
    </section>
  );
};
