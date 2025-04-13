import Image from 'next/image';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';

export const ClearAllSection = () => {
  return (
    <section className={s.clearAllSection}>
      <AppContainer>
        <Typography variant={'h2'} className={s.sectionTitle}>
          Wir reinigen <Typography variant={'decorSpan'}>alles</Typography>
        </Typography>
        <ul className={s.list}>
          <li className={s.listItem}>
            <div className={s.round}>
              <Image
                src={'/img/home/house.png'}
                width="75"
                height="75"
                alt={'house icon image'}
                className={s.image}
              />
            </div>
            <Typography variant={'body2'}>
              Bereits ab einem Auftragsvolumen{' '}
              <span className={s.span}>von 200€</span> brutto bieten wir die PV
              - Reinigung an, so gibt es kaum eine Anlage, die für uns zu klein
              ist. Im Vorfeld bieten wir für Sie eine individuelle
              Wirtschaftlichkeitsberechnung kostenlos an, die den unabhängigen
              Kosten-Nutzen Vorteil für Sie aufzeigt. Nur bei positiven
              Kosten-Nutzen-Vorteil lohnt sich die Solarreinigung - die Kosten
              der Solarreinigung müssen günstiger sein als der aktuelle
              Stromverlust durch Verschmutzungen.
            </Typography>
          </li>
          <li className={s.listItem}>
            <div className={s.round}>
              <Image
                src={'/img/home/business.png'}
                width="75"
                height="75"
                alt={'house icon image'}
                className={s.image}
              />
            </div>
            <Typography variant={'body2'}>
              Mit uns haben Sie
              <span className={s.span}>
                einen professionellen Servicepartner für Ihre PV-Anlage
              </span>
              . Von Beratung, Inspektion, Service, Wartung und Reparatur alles
              aus einer Hand. Durch Sol-Clean haben Sie keinen Zeitaufwand mehr
              mit Ihrer PV-Anlage und profitieren von gesteigerte Profite aus
              der Stromerzeugung und einer optimierten Lebensdauer. Mit
              Sol-Clean immer gut beraten - für eine gemeinsam sonnige Zukunft
            </Typography>
          </li>
        </ul>
      </AppContainer>
    </section>
  );
};
