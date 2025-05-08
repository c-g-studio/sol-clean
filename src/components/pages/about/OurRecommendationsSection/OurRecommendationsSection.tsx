'use client';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';
import { Icon_first } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_first';
import { Icon_second } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_second';
import { Icon_third } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_third';
import { Icon_fourth } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_fourth';

export const OurRecommendationsSection = () => {
  return (
    <section className={s.ourRecommendationsSection}>
      <AppContainer>
        <Typography variant={'h2'} className={s.sectionTitle}>
          Unsere <Typography variant={'decorSpan'}>Mission</Typography>
        </Typography>
        <ul className={s.list}>
          <li className={s.listItem}>
            <div className={s.iconBox}>
              <Icon_first className={s.icon} />
            </div>
            <Typography variant={'h3'} className={s.listItemTitle}>
              Maximale Energieausbeute
            </Typography>
            <Typography variant={'body2'} className={s.listItemText}>
              Unsere Reinigung entfernt hartnäckige Ablagerungen wie Feinstaub,
              Saharasand und Abgase, wodurch Ihre Solaranlage wieder maximale
              Leistung erzielt und Energieverluste um bis zu 30 % reduziert
              werden.
            </Typography>
          </li>
          <li className={s.listItem}>
            <div className={s.iconBox}>
              <Icon_second className={s.icon} />
            </div>
            <Typography variant={'h3'} className={s.listItemTitle}>
              Präzise Technologie
            </Typography>
            <Typography variant={'body2'} className={s.listItemText}>
              Mit Thermografie erkennen wir versteckte Schwachstellen wie
              Hotspots oder defekte Komponenten frühzeitig und stellen sicher,
              dass Ihre Anlage jederzeit reibungslos funktioniert.
            </Typography>
          </li>
          <li className={s.listItem}>
            <div className={s.iconBox}>
              <Icon_third className={s.icon} />
            </div>
            <Typography variant={'h3'} className={s.listItemTitle}>
              Rundum-Betreuung
            </Typography>
            <Typography variant={'body2'} className={s.listItemText}>
              Von der ersten Bestandsaufnahme bis zur detaillierten
              Dokumentation und Nachsorge – wir sind immer für Sie da, um Ihnen
              den besten Service zu bieten.
            </Typography>
          </li>
          <li className={s.listItem}>
            <div className={s.iconBox}>
              <Icon_fourth className={s.icon} />
            </div>
            <Typography variant={'h3'} className={s.listItemTitle}>
              Nachhaltige Investition
            </Typography>
            <Typography variant={'body2'} className={s.listItemText}>
              Unsere Dienstleistungen verlängern die Lebensdauer Ihrer
              Solarmodule und sichern Ihre Investition – für eine effiziente und
              rentable Zukunft.
            </Typography>
          </li>
        </ul>
      </AppContainer>
    </section>
  );
};
