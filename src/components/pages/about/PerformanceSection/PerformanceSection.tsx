import Image from 'next/image';

import { SectionTopBar } from '@/components/common/SectionTopBar/SectionTopBar';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

import s from './styles.module.scss';

export const PerformanceSection = () => {
  return (
    <section className={s.performanceSection}>
      <SectionTopBar />
      <AppContainer classes={s.performanceSectionContainer}>
        <div>
          <Typography variant={'h2'} className={s.sectionTitle}>
            Pflege, die Sie spüren –
            <Typography variant={'decorSpan'}>
              Leistung, die begeistert!
            </Typography>
          </Typography>
          <Image
            src={'/img/about/performanceSection/man.png'}
            width="668"
            height="517"
            alt={'house icon image'}
            className={s.imageMobile}
          />
          <Typography variant={'body3'} className={s.text}>
            Mit Sol-Clean wird Ihre Solaranlage effizienter und langlebiger.
            Unsere Reinigung entfernt Ablagerungen, steigert die Energieausbeute
            und schützt Ihre Module vor Schäden. Thermografie hilft, versteckte
            Schwachstellen frühzeitig zu erkennen, während wir alles detailliert
            dokumentieren, um den Zustand Ihrer Anlage jederzeit nachweisen zu
            können.
            <br />
            <br />
            Vertrauen Sie auf Sol-Clean und holen Sie das Beste aus Ihrer
            Solaranlage – für eine nachhaltige und rentable Zukunft.
          </Typography>

          <Button
            buttonType={'buttonLink'}
            href={'/#calculatorSection'}
            className={s.button}
          >
            Wirtschaftlichkeitsrechnung
          </Button>
        </div>
        <Image
          src={'/img/about/performanceSection/man.png'}
          width="540"
          height="410"
          alt={'house icon image'}
          className={s.imageDesktop}
        />
      </AppContainer>
    </section>
  );
};
