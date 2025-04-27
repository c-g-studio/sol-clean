import Image from 'next/image';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';
import { SectionTopBar } from '@/components/common/SectionTopBar/SectionTopBar';

export const CleaningSection = () => {
  return (
    <section className={s.cleaningSection}>
      <SectionTopBar />
      <AppContainer classes={s.cleaningSectionContainer}>
        <div>
          <Typography variant={'h2'} className={s.sectionTitle}>
            <Typography variant={'decorSpan'}>Warum</Typography> ist die
            Reinigung von PV-Systemen wichtig?
          </Typography>
          <Typography variant={'body1'} className={s.text}>
            Verschmutzte Solarpaneele verlieren bis zu 30 % ihrer Leistung, da
            sie weniger Sonnenlicht absorbieren. Staub, Laub und Ablagerungen
            beeinträchtigen die Effizienz und können langfristige Schäden
            verursachen. Eine regelmäßige Reinigung sorgt für maximale
            Energieausbeute und verlängert die Lebensdauer Ihrer Anlage.
          </Typography>
        </div>
        <Image
          src={'/img/home/cleaningSection/animation.webp'}
          width={665}
          height={558}
          alt={'animation'}
          className={s.animation}
        />
      </AppContainer>
    </section>
  );
};
