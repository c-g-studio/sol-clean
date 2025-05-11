import { Icon_first } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_first';
import { Icon_second } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_second';
import { Icon_third } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_third';
import { Icon_fourth } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_fourth';

import s from '@/components/pages/about/OurRecommendationsSection/styles.module.scss';

export const ourMIssionAboutData = [
  {
    icon: <Icon_first className={s.icon} />,
    title: 'Maximale Energieausbeute',
    text: 'Unsere Reinigung entfernt hartnäckige Ablagerungen wie Feinstaub, Saharasand und Abgase, wodurch Ihre Solaranlage wieder maximale Leistung erzielt und Energieverluste um bis zu 30 % reduziert werden.'
  },
  {
    icon: <Icon_second className={s.icon} />,
    title: 'Präzise Technologie',
    text: 'Mit Thermografie erkennen wir versteckte Schwachstellen wie Hotspots oder defekte Komponenten frühzeitig und stellen sicher, dass Ihre Anlage jederzeit reibungslos funktioniert.'
  },
  {
    icon: <Icon_third className={s.icon} />,
    title: 'Rundum-Betreuung',
    text: 'Von der ersten Bestandsaufnahme bis zur detaillierten Dokumentation und Nachsorge – wir sind immer für Sie da, um Ihnen den besten Service zu bieten.'
  },
  {
    icon: <Icon_fourth className={s.icon} />,
    title: 'Nachhaltige Investition',
    text: 'Unsere Dienstleistungen verlängern die Lebensdauer Ihrer Solarmodule und sichern Ihre Investition – für eine effiziente und rentable Zukunft.'
  }
];
