import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';

export const SolCleanSection = () => {
  return (
    <section className={s.section}>
      <AppContainer>
        <div className={s.contentWrapper}>
          <Typography variant={'h2'} className={s.title}>
            Sol-Clean <span className={s.span}>365°</span>
          </Typography>
          <Typography variant={'body1'} className={s.text}>
            Ihr Solar Service Partner - alles aus einer Hand
          </Typography>
        </div>
      </AppContainer>
    </section>
  );
};
