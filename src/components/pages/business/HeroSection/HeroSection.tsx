import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

import s from './styles.module.scss';

export const HeroSection = () => {
  return (
    <section className={s.section}>
      <AppContainer>
        <Typography variant={'h1'} className={s.title}>
          Business
        </Typography>
        <Typography variant={'body3'} className={s.text}>
          Die passende Lösung für Ihr Unternehmen
        </Typography>
        <Button
          variant={'primary'}
          buttonType={'buttonLink'}
          href={'/#calculatorSection'}
          className={s.button}
        >
          Wirtschaftlichkeitsrechnung
        </Button>
      </AppContainer>
    </section>
  );
};
