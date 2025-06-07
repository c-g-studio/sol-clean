import Image from 'next/image';

import { SectionTopBar } from '@/components/common/SectionTopBar/SectionTopBar';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

import s from './styles.module.scss';

export const OurRangeSection = () => {
  return (
    <section className={s.ourRangeSection}>
      <SectionTopBar />
      <AppContainer>
        <Typography variant={'h2'} className={s.sectionTitle}>
          <Typography variant={'decorSpan'}>Unser</Typography> Angebot
        </Typography>

        <ul className={s.list}>
          <li className={s.listItem}>
            <div className={s.listItemContentBox}>
              <Typography variant={'h3'} className={s.listItemTitle}>
                Thermografische Prüfung
              </Typography>
              <Typography variant={'body1'} className={s.listItemText}>
                Durch die Thermografie-Prüfung finden wir Hotspots und
                versteckte Widerstände in Ihren Solarmodulen, die die Anlage
                beeinträchtigen können. Zudem erkennen wir Defekte an
                Umschaltdioden und anderen Bauteilen, die sonst unsichtbar
                bleiben.
              </Typography>
            </div>
            <Button
              buttonType={'withArrow'}
              href={'/services'}
              className={s.listItemButton}
            >
              Mehr erfahren
            </Button>
            <Image
              src={'/img/home/ourRangeSection/image_1.png'}
              width={768}
              height={500}
              alt={'image'}
              className={s.listItemImage}
            />
          </li>
          <li className={s.listItem}>
            <div className={s.listItemContentBox}>
              <Typography variant={'h3'} className={s.listItemTitle}>
                Thermografische Prüfung
              </Typography>
              <Typography variant={'body1'} className={s.listItemText}>
                Durch die Thermografie-Prüfung finden wir Hotspots und
                versteckte Widerstände in Ihren Solarmodulen, die die Anlage
                beeinträchtigen können. Zudem erkennen wir Defekte an
                Umschaltdioden und anderen Bauteilen, die sonst unsichtbar
                bleiben.
              </Typography>
            </div>
            <Button
              buttonType={'withArrow'}
              href={'/services'}
              className={s.listItemButton}
            >
              Mehr erfahren
            </Button>
            <Image
              src={'/img/home/ourRangeSection/image_2.png'}
              width={768}
              height={500}
              alt={'image'}
              className={s.listItemImage}
            />
          </li>
          <li className={s.listItem}>
            <div className={s.listItemContentBox}>
              <Typography variant={'h3'} className={s.listItemTitle}>
                Thermografische Prüfung
              </Typography>
              <Typography variant={'body1'} className={s.listItemText}>
                Durch die Thermografie-Prüfung finden wir Hotspots und
                versteckte Widerstände in Ihren Solarmodulen, die die Anlage
                beeinträchtigen können. Zudem erkennen wir Defekte an
                Umschaltdioden und anderen Bauteilen, die sonst unsichtbar
                bleiben.
              </Typography>
            </div>
            <Button
              buttonType={'withArrow'}
              href={'/services'}
              className={s.listItemButton}
            >
              Mehr erfahren
            </Button>
            <Image
              src={'/img/home/ourRangeSection/image_3.png'}
              width={768}
              height={500}
              alt={'image'}
              className={s.listItemImage}
            />
          </li>
        </ul>
      </AppContainer>
    </section>
  );
};
