import Image from 'next/image';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

import s from './styles.module.scss';
import { ListItemIcon } from './components/ListIconItem';

type TListItem = {
  iconName: string;
  text: string;
};

type TListData = TListItem[];

const benefitsListData: TListData = [
  { iconName: 'lightning', text: 'Mehr Energie' },
  { iconName: 'spanner', text: 'Weniger Schäden' }
];

const suggestionListData: TListData = [
  { iconName: 'chart', text: 'Strategieberatung' },
  { iconName: 'checkMark', text: 'Umsetzung & Dokumentation' },
  { iconName: 'shield', text: 'Technische & rechtliche Prüfung' },
  { iconName: 'cogwheel', text: 'Wartung & Betreuung' },
  { iconName: 'notes', text: 'Unterstützung bei Anträgen' }
];
const ourViewsListData: TListData = [
  { iconName: 'house', text: 'Dach- und Fassadenschäden' },
  { iconName: 'spanner', text: 'Photovoltaik- & onstruktionsschäden' },
  { iconName: 'waterDrop', text: 'Wasserschäden & undichte Stellen' },
  { iconName: 'notes', text: 'Dokumentation für Versicherungen' },
  { iconName: 'waves', text: 'Verstopfte Dachrinnen' }
];

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
                  src={'/img/home/ourRangeSection/image_1-m.png'}
                  width="549"
                  height="410"
                  alt={'some man image'}
                  className={s.mobileImage}
                />
              </div>
              <Image
                src={'/img/services/ourRangeSection/vds.png'}
                width="40"
                height="40"
                alt={'some man image'}
                className={s.vdsIcon}
              />
              <div className={s.testWrapper}>
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
              </div>

              <Button
                buttonType={'buttonLink'}
                variant={'primary'}
                className={s.listItemBtn}
                href={'/#calculatorSection'}
              >
                Jetzt berechnen
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
                  src={'/img/home/ourRangeSection/image_2-m.png'}
                  width="549"
                  height="410"
                  alt={'some man image'}
                  className={s.mobileImage}
                />
              </div>
              <Typography variant={'body1'} className={s.listItemText}>
                Saubere Module – mehr Leistung Professionelle Reinigung sorgt
                für maximalen Ertrag und längere Lebensdauer Ihrer
                Photovoltaikanlage.
              </Typography>
              <div className={s.benefitsWrapper}>
                <Typography variant={'h3'} className={s.benefitsTitle}>
                  Ihre Vorteile:
                </Typography>
                <ul className={s.benefitsList}>
                  {benefitsListData.map((item: TListItem, i) => (
                    <ListItemIcon
                      key={i}
                      iconName={item.iconName}
                      text={item.text}
                    />
                  ))}
                </ul>
                <Typography variant={'body1'} className={s.benefitsText}>
                  Mit Sol-Clean sparen Sie Zeit – wir sichern den effizienten
                  Betrieb, Sie konzentrieren sich aufs Wesentliche.
                </Typography>
              </div>

              <Button
                buttonType={'buttonLink'}
                variant={'primary'}
                className={s.listItemBtn}
                href={'/#calculatorSection'}
              >
                Jetzt berechnen
              </Button>
            </div>
            <Image
              src={'/img/home/ourRangeSection/image_2.png'}
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
                EEG-Umstellung & Transformation (Kurzfassung)
              </Typography>
              <div className={s.imageWrapper}>
                <Image
                  src={'/img/home/ourRangeSection/image_3-m.png'}
                  width="549"
                  height="410"
                  alt={'some man image'}
                  className={s.mobileImage}
                />
              </div>
              <Typography variant={'body1'} className={s.listItemText}>
                Das EEG verändert sich ständig. Betreiber von PV-Anlagen
                profitieren beim Wechsel von Volleinspeisung zu Eigenverbrauch
                mit Überschusseinspeisung: mehr Wirtschaftlichkeit, mehr
                Unabhängigkeit.
              </Typography>
              <div className={s.suggestionWrapper}>
                <Typography variant={'h3'} className={s.suggestionTitle}>
                  Wir bieten:
                </Typography>
                <ul className={s.suggestionList}>
                  {suggestionListData.map((item: TListItem, i) => (
                    <ListItemIcon
                      key={i}
                      iconName={item.iconName}
                      text={item.text}
                    />
                  ))}
                </ul>
                <Typography variant={'body1'} className={s.suggestionText}>
                  So nutzen Sie Ihre Energie effizient, rechtssicher und
                  zukunftsorientiert.
                </Typography>
              </div>
              <Button
                buttonType={'buttonLink'}
                variant={'primary'}
                className={s.listItemBtn}
                href={'/#calculatorSection'}
              >
                Jetzt berechnen
              </Button>
            </div>
            <Image
              src={'/img/home/ourRangeSection/image_3.png'}
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
          <li className={`${s.listItem} ${s.listItemReverse}`}>
            <div className={s.contentWrapper}>
              <Typography variant={'h2'} className={s.listItemTitle}>
                Professionelle Reinigung
              </Typography>
              <div className={s.imageWrapper}>
                <Image
                  src={'/img/home/ourRangeSection/image_4-m.png'}
                  width="549"
                  height="410"
                  alt={'some man image'}
                  className={s.mobileImage}
                />
              </div>
              <Typography variant={'body1'} className={s.listItemText}>
                Drohneninspektionen sichern Immobilien schnell, kostengünstig
                und risikofrei – mit Wärmebild und HD-Daten für Dächer, Fassaden
                und schwer zugängliche Bereiche.
              </Typography>
              <div className={s.ourViewsWrapper}>
                <Typography variant={'h3'} className={s.ourViewsTitle}>
                  Wir bieten:
                </Typography>
                <ul className={s.ourViewsList}>
                  {ourViewsListData.map((item: TListItem, i) => (
                    <ListItemIcon
                      key={i}
                      iconName={item.iconName}
                      text={item.text}
                    />
                  ))}
                </ul>
                <Typography variant={'body1'} className={s.ourViewsText}>
                  So nutzen Sie Ihre Energie effizient, rechtssicher und
                  zukunftsorientiert.
                </Typography>
              </div>
              <Button
                buttonType={'buttonLink'}
                variant={'primary'}
                className={s.listItemBtn}
                href={'/#calculatorSection'}
              >
                Jetzt berechnen
              </Button>
            </div>
            <Image
              src={'/img/home/ourRangeSection/image_4.png'}
              width="549"
              height="410"
              alt={'some man image'}
              className={s.desktopImage}
            />
            <div className={s.decorBackground}></div>
            <div className={s.decorSpanWrapper}>
              <span className={s.decorSpan}>04</span>
            </div>
          </li>
        </ul>
      </AppContainer>
    </section>
  );
};
