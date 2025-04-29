import { Typography } from '@/components/common/Typography/Typography';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';

import s from './styles.module.scss';

export const CalculatorSection = () => {
  return (
    <section className={s.calculatorSection}>
      <AppContainer classes={s.callBackSectionContainer}>
        <Typography variant={'h2'} className={s.sectionTitle}>
          Jetzt Ersparnis
          <Typography variant={'decorSpan'}>berechnen</Typography>
        </Typography>
      </AppContainer>
    </section>
  );
};
