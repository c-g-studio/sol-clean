'use client';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Icon_first } from '@/components/icons/servicesPage/ourRecommendationsSection/Icon_first';

import { Icon_second } from '@/components/icons/servicesPage/ourRecommendationsSection/Icon_second';
import { Icon_third } from '@/components/icons/servicesPage/ourRecommendationsSection/Icon_third';
import { Icon_fourth } from '@/components/icons/servicesPage/ourRecommendationsSection/Icon_fourth';
import { Icon_fifth } from '@/components/icons/servicesPage/ourRecommendationsSection/Icon_fifth';
import { Icon_sixth } from '@/components/icons/servicesPage/ourRecommendationsSection/Icon_sixth';

import s from './styles.module.scss';

export const OurRecommendationsSection = () => {
  return (
    <section className={s.ourRecommendationsSection}>
      <AppContainer>
        <Typography variant={'h2'} className={s.sectionTitle}>
          Unsere <Typography variant={'decorSpan'}>Empfehlungen</Typography>
        </Typography>
        <ul className={s.list}>
          <li className={s.listItem}>
            <div className={s.iconBox}>
              <Icon_first className={s.icon} />
            </div>
            <Typography variant={'h3'} className={s.listItemTitle}>
              Regelmäßige Prüfung
            </Typography>
            <Typography variant={'body2'} className={s.listItemText}>
              Die Photovoltaik-, Solaranlage sollte regelmäßige Sicht bzw. mit
              einer Wärmebildkamera geprüft werden, damit aus kleinen Mängel
              (Hotspots durch Blätter, Beeren, etc...) keine großen Schäden
              werden
            </Typography>
          </li>
          <li className={s.listItem}>
            <div className={s.iconBox}>
              <Icon_second className={s.icon} />
            </div>
            <Typography variant={'h3'} className={s.listItemTitle}>
              Detaillierte Wirtschaftlichkeits-Analyse
            </Typography>
            <Typography variant={'body2'} className={s.listItemText}>
              Um genau zu ermitteln in welchem Zyklus eine Reinigung sich für
              Ihre Anlage lohnt, muss eine ausführliche individuelle
              Wirtschaftlichkeitsrechnung erstellt werden, die den
              effizientesten Reinigungszeitpunkt genau bestimmt
            </Typography>
          </li>
          <li className={s.listItem}>
            <div className={s.iconBox}>
              <Icon_third className={s.icon} />
            </div>
            <Typography variant={'h3'} className={s.listItemTitle}>
              Schäden an Modulen
            </Typography>
            <Typography variant={'body2'} className={s.listItemText}>
              Kaputte Photovoltaik-, Solarmodule liefern nicht nur keinen Strom,
              sondern fungieren als Widerstand in der gesamten Anlage. Das heißt
              kaputte Module mindern zusätzlich die Leistung der
              funktionsfähigen Module. Die Konsequenz: Doppelter Etragsverlust
            </Typography>
          </li>
          <li className={s.listItem}>
            <div className={s.iconBox}>
              <Icon_fourth className={s.icon} />
            </div>
            <Typography variant={'h3'} className={s.listItemTitle}>
              Professioneller Service
            </Typography>
            <Typography variant={'body2'} className={s.listItemText}>
              Stellen Sie sicher das Sie einen Professionellen Service-Partner
              beauftragen, der mit professionellem EU-Zertifizierten
              Photovoltaik-, Solarreinigungsgeräten arbeitet. Sollte dies nicht
              der Fall sein, können erhebliche Schäden an der Beschichtung der
              Photovoltaik-, Solarmodulen und dadurch der Funktionsverlust die
              Folge sein
            </Typography>
          </li>
          <li className={s.listItem}>
            <div className={s.iconBox}>
              <Icon_fifth className={s.icon} />
            </div>
            <Typography variant={'h3'} className={s.listItemTitle}>
              Verschmutzung mehr als nur Ertragsverlust
            </Typography>
            <Typography variant={'body2'} className={s.listItemText}>
              Durch die Verschmutzung der Photovoltaik-, Solaranlage haben Sie
              neben bis zu 30% Ertragsverlust eine deutlich verkürzte
              Lebensdauer Ihrer Anlage, da durch die Verschmutzung eine
              aggressive chemische Korrosion der Module stattfindet. Durch
              Hotspots kann das betroffen Modul irreparable Schäden aufweisen.
            </Typography>
          </li>
          <li className={s.listItem}>
            <div className={s.iconBox}>
              <Icon_sixth className={s.icon} />
            </div>
            <Typography variant={'h3'} className={s.listItemTitle}>
              Dokumentation
            </Typography>
            <Typography variant={'body2'} className={s.listItemText}>
              Ihre Photovoltaik-, Solaranlage muss detailliert dokumentiert
              sein. Diese Dokumentation sollte den Zustand, die erfolgten
              Service-Leistungen, Vor dem Service - Nach dem Service und
              Abnahmen durch das Service-Unternehmen umfassen. Im Falle eines
              Schadens an der Anlage kann so ein ordnungsgemäßer Betrieb
              gegenüber der Versicherung nachgewiesen werden.
            </Typography>
          </li>
        </ul>
      </AppContainer>
    </section>
  );
};
