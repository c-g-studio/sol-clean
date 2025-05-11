import { Icon_first } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_first';
import { Icon_second } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_second';
import { Icon_third } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_third';
import { Icon_fourth } from '@/components/icons/aboutPage/ourRecommendationsSection/Icon_fourth';

import s from '@/components/pages/about/OurRecommendationsSection/styles.module.scss';

export const ourMissionBusinessData = [
  {
    icon: <Icon_first className={s.icon} />,
    title: 'Maximale Energieausbeute',
    text: 'Die Reinigung und Wartung erfolgt immer unter Voraussetzung einer positiver Kosten-Nutzen-Analyse sodass Ihr finanzieller Vorteil gesichert ist'
  },
  {
    icon: <Icon_second className={s.icon} />,
    title: 'Präzise Technologie',
    text: 'Mit Drohnen geführter Thermografie-Inspektionen, Cloud-basierten Monitoring, Software gestützt Wirtschaftlichkeitanalysen, und Fernwartungssystemen behalten wir Ihre Photovoltaikanlage stets im Auge und können frühzeitig Probleme erkennen und diese beheben bevor Sie zu teuren Schäden werden.'
  },
  {
    icon: <Icon_third className={s.icon} />,
    title: 'Rundum-Betreuung',
    text: 'Auch bei Schäden und Reparaturen. Sie konzentrieren sich auf Ihre Kernkompetenz wir kümmern uns mit unserer um Ihre Photovoltaikanlage'
  },
  {
    icon: <Icon_fourth className={s.icon} />,
    title: 'Nachhaltige Investition',
    text: 'Unsere Dienstleistungen verlängern die Lebensdauer Ihrer Solarmodule und sichern Ihre Investition – für eine effiziente und rentable Zukunft.'
  }
];
