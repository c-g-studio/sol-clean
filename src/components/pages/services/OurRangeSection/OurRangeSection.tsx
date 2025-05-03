import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';
import Image from 'next/image';
import { Button } from '@/components/common/Button/Button';

export const OurRangeSection = () => {
  return (
    <section className={s.ourRangeSection}>
      <AppContainer>
        <Typography variant={'h1'} className={s.sectionTitle}>
          Unser <Typography variant={'decorSpan'}>Angebot</Typography>
        </Typography>
        <ul className={s.list}>
          <li className={s.listItem}>
            <div className={s.contentWrapper}>
              <Typography variant={'h2'} className={s.listItemTitle}>
                Thermografische Prüfung
              </Typography>
              <div className={s.imageWrapper}>
                <Image
                  src={'/img/home/ourRangeSection/image_1.png'}
                  width="549"
                  height="410"
                  alt={'some man image'}
                  className={s.mobileImage}
                />
              </div>
              <Typography variant={'body1'} className={s.listItemText}>
                Durch die Thermografie-Prüfung finden wir Hotspots und
                versteckte Widerstände in Ihren Solarmodulen, die die Anlage
                beeinträchtigen können. Zudem erkennen wir Defekte an
                Umschaltdioden und anderen Bauteilen, die sonst unsichtbar
                bleiben.
                <br />
                <br />
                Durch die Thermografie-Prüfung finden wir Hotspots und
                versteckte Widerstände in Ihren Solarmodulen, die die Anlage
                beeinträchtigen können. Zudem erkennen wir Defekte an
                Umschaltdioden und anderen Bauteilen, die sonst unsichtbar
                bleiben.Durch die Thermografie-Prüfung finden wir Hotspots und
                versteckte Widerstände in Ihren Solarmodulen, die die Anlage
                beeinträchtigen können. Zudem erkennen wir Defekte an
                Umschaltdioden und anderen Bauteilen, die sonst unsichtbar
                bleiben.
              </Typography>

              <Button
                buttonType={'buttonLink'}
                variant={'primary'}
                className={s.listItemBtn}
                href={'/#calculatorSection'}
              >
                Weiter
              </Button>
            </div>
            <Image
              src={'/img/home/ourRangeSection/image_1.png'}
              width="549"
              height="410"
              alt={'some man image'}
              className={s.desktopImage}
            />
            <div className={s.decorBackground}></div>
            <div className={s.decorSpanWrapper}>
              <span className={s.decorSpan}>01</span>
            </div>
          </li>
          <li className={`${s.listItem} ${s.listItemReverse}`}>
            <div className={s.contentWrapper}>
              <Typography variant={'h2'} className={s.listItemTitle}>
                Professionelle Reinigung
              </Typography>
              <div className={s.imageWrapper}>
                <Image
                  src={'/img/home/ourRangeSection/image_1.png'}
                  width="549"
                  height="410"
                  alt={'some man image'}
                  className={s.mobileImage}
                />
              </div>
              <Typography variant={'body1'} className={s.listItemText}>
                Durch Professionelle Reinigung der Photovoltaik-, Solaranlage
                wird Ihr maximaler Stromertrag sowie verlängerte Lebensdauer
                Ihrer Anlage erreicht. Durch unsere Sol-Clean Service-Techniker
                werden jede Mängel behoben sodass Ihre Anlage die Funktion
                erfüllt die Sie soll. Maximalen Strom produzieren. Zeit ist Geld
                - Durch den Sol-Clean Service Umfang ist die Service-Betreuung
                in unseren Händen. Sie können sich auf Ihre Kompetenzen
                fokussieren während wir uns mit unseren Kompetenzen und vollem
                Einsatz den effizientesten Betrieb Ihrer Photovoltaik-,
                Solaranlage sicher stellen.
              </Typography>

              <Button
                buttonType={'buttonLink'}
                variant={'primary'}
                className={s.listItemBtn}
                href={'/#calculatorSection'}
              >
                Weiter
              </Button>
            </div>
            <Image
              src={'/img/home/ourRangeSection/image_1.png'}
              width="549"
              height="410"
              alt={'some man image'}
              className={s.desktopImage}
            />
            <div className={s.decorBackground}></div>
            <div className={s.decorSpanWrapper}>
              <span className={s.decorSpan}>02</span>
            </div>
          </li>
          <li className={s.listItem}>
            <div className={s.contentWrapper}>
              <Typography variant={'h2'} className={s.listItemTitle}>
                Detaillierte Dokumentation
              </Typography>
              <div className={s.imageWrapper}>
                <Image
                  src={'/img/home/ourRangeSection/image_1.png'}
                  width="549"
                  height="410"
                  alt={'some man image'}
                  className={s.mobileImage}
                />
              </div>
              <Typography variant={'body1'} className={s.listItemText}>
                Durch unsere detaillierte Dokumentation (technisch und
                fotografisch) aller Service-Leistungen können Sie gegenüber
                Versicherern den ordnungsgemäßen Betrieb Ihrer Anlage umfassend
                beweisen. Sie selbst haben keinen Mehr-Aufwand, da die
                Dokumentation bei allen Service-Leistungen durch unsere
                Sol-Clean Service-Techniker erfolgt und für Sie vertraulich
                verwahrt wird.
              </Typography>

              <Button
                buttonType={'buttonLink'}
                variant={'primary'}
                className={s.listItemBtn}
                href={'/#calculatorSection'}
              >
                Weiter
              </Button>
            </div>
            <Image
              src={'/img/home/ourRangeSection/image_1.png'}
              width="549"
              height="410"
              alt={'some man image'}
              className={s.desktopImage}
            />
            <div className={s.decorBackground}></div>
            <div className={s.decorSpanWrapper}>
              <span className={s.decorSpan}>03</span>
            </div>
          </li>
        </ul>
      </AppContainer>
    </section>
  );
};
