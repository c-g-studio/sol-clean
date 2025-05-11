import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';
import Image from 'next/image';
import { CheckMarkIcon } from '@/components/icons/CheckMarkIcon';

export const RentSection = () => {
  return (
    <section className={s.section}>
      <AppContainer>
        <Typography variant={'h2'} className={s.title}>
          Sie haben einen oder <br className={s.tabletBreak} />
          <Typography variant={'decorSpan'}>mehrere Mieter</Typography>
          <br className={s.break} /> in Ihrem Gebäude?
        </Typography>
        <div className={s.contentWrapper}>
          <Image
            src={'/img/business/RateSection/some_people.jpg'}
            width={'688'}
            height={'517'}
            alt={'some people image'}
            className={s.image}
          />

          <div>
            <Typography variant={'h2'} className={s.desktopTitle}>
              <Typography variant={'decorSpan'}>Business</Typography>{' '}
              Dienstleistungen
            </Typography>
            <Typography variant={'body1'} className={s.subtitle}>
              Sie haben einen oder mehrere Mieter in Ihrem Gebäude?
            </Typography>
            <Typography variant={'body1'} className={s.text}>
              Wir helfen Ihnen Ihr Mieterstrom-konzept umzusetzen zur
              Optimierung Ihre Einnahmen durch den erzeugten Strom und
              reduzieren der Stromkosten Ihres Mieters.
            </Typography>

            <div className={s.listsBox}>
              <ul className={s.list}>
                <li className={s.listItem}>
                  <CheckMarkIcon className={s.listItemIcon} />
                  <Typography variant={'body3'}>Bestandsaufnahme</Typography>
                </li>
                <li className={s.listItem}>
                  <CheckMarkIcon className={s.listItemIcon} />
                  <Typography variant={'body3'}>
                    Wirtschaftlichkeitsanalyse
                  </Typography>
                </li>
                <li className={s.listItem}>
                  <CheckMarkIcon className={s.listItemIcon} />
                  <Typography variant={'body3'}>Inspektion</Typography>
                </li>
                <li className={s.listItem}>
                  <CheckMarkIcon className={s.listItemIcon} />
                  <Typography variant={'body3'}>
                    Thermografie Prüfung
                  </Typography>
                </li>
                <li className={s.listItem}>
                  <CheckMarkIcon className={s.listItemIcon} />
                  <Typography variant={'body3'}>
                    Maßgeschneidert Lösung für Ihr Unternehmen
                  </Typography>
                </li>
              </ul>

              <ul className={s.list}>
                <li className={s.listItem}>
                  <CheckMarkIcon className={s.listItemIcon} />
                  <Typography variant={'body3'}>
                    Elektrisches Leistungs Check-Up
                  </Typography>
                </li>
                <li className={s.listItem}>
                  <CheckMarkIcon className={s.listItemIcon} />
                  <Typography variant={'body3'}>
                    Photovoltaik Reinigung
                  </Typography>
                </li>
                <li className={s.listItem}>
                  <CheckMarkIcon className={s.listItemIcon} />
                  <Typography variant={'body3'}>
                    Wechselrichter Reinigung
                  </Typography>
                </li>
                <li className={s.listItem}>
                  <CheckMarkIcon className={s.listItemIcon} />
                  <Typography variant={'body3'}>
                    EEG Transformation von 100% Einspeisung zu nachhaltigem
                    Eigennutzungskonzept
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AppContainer>
    </section>
  );
};
