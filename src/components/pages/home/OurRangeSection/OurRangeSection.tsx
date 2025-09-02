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
          Unser<Typography variant={'decorSpan'}> Angebot</Typography>
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
                Professionelle Reinigung
              </Typography>
              <Typography variant={'body1'} className={s.listItemText}>
                Saubere Module – mehr Leistung
                Professionelle Reinigung sorgt für maximalen Ertrag und längere Lebensdauer Ihrer Photovoltaikanlage.
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
                EEG-Umstellung & Transfor-mation (Kurzfassung)
              </Typography>
              <Typography variant={'body1'} className={s.listItemText}>
                Das EEG verändert sich ständig. Betreiber von PV-Anlagen profitieren beim Wechsel von Volleinspeisung zu Eigenverbrauch mit Überschusseinspeisung: mehr Wirtschaftlichkeit, mehr Unabhängigkeit.
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
          <li className={s.listItem}>
            <div className={s.listItemContentBox}>
              <Typography variant={'h3'} className={s.listItemTitle}>
                Inspektionsflüge Gebäude
              </Typography>
              <Typography variant={'body1'} className={s.listItemText}>
                Drohneninspektionen sichern Immobilien schnell, kostengünstig und risikofrei – mit Wärmebild und HD-Daten für Dächer, Fassaden und schwer zugängliche Bereiche.
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
              src={'/img/home/ourRangeSection/image_4.png'}
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
