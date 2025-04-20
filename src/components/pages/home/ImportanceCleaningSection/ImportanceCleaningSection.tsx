import Image from 'next/image';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

import s from './styles.module.scss';

export const ImportanceCleaningSection = () => {
  return (
    <section className={s.importanceCleaningSection}>
      <AppContainer classes={s.importanceCleaningSectionContainer}>
        <Image
          src={'/img/home/importanceCleaningSection/image.png'}
          width={'549'}
          height={'410'}
          alt={'sunny panels image'}
          className={s.importanceCleaningSectionImageDesktop}
        />
        <div>
          <Typography variant={'h2'} className={s.importanceCleaningTitle}>
            <Typography variant={'decorSpan'}>Warum</Typography>
            <br className={s.breakText} /> ist die Reinigung von PV-Systemen
            wichtig?
          </Typography>
          <Image
            src={'/img/home/importanceCleaningSection/image.png'}
            width={'549'}
            height={'410'}
            alt={'sunny panels image'}
            className={s.importanceCleaningSectionImage}
          />
          <Typography variant={'body1'} className={s.importanceCleaningText}>
            Verschmutzte Solarpaneele verlieren bis zu 30 % ihrer Leistung, da
            sie weniger Sonnenlicht absorbieren. Staub, Laub und Ablagerungen
            beeinträchtigen die Effizienz und können langfristige Schäden
            verursachen. Eine regelmäßige Reinigung sorgt für maximale
            Energieausbeute und verlängert die Lebensdauer Ihrer Anlage.
          </Typography>
          <Button variant={'primary'} className={s.importanceCleaningButton}>
            Wirtschaftlichkeitsrechnung
          </Button>
        </div>
      </AppContainer>
    </section>
  );
};
