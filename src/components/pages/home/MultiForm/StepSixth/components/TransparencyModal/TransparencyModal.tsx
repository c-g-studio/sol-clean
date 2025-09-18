import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';
import { FC } from 'react';

import s from './styles.module.scss';
import Image from 'next/image';
import { ModalLayout } from '@/components/common/ModalLayout/ModalLayout';

type TSuccessRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const TransparencyModal: FC<TSuccessRequestModalProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} layoutClass={s.layout}>
      <AppContainer>
        <div className={s.contentWrapper}>
          <div className={s.textWrapper}>
            <Typography variant={'h2'} className={s.title}>
              Wir decken alles auf
            </Typography>
            <Typography variant={'body1'} className={s.text}>
              Thermografie macht das Unsichtbare sichtbar: Verborgene Schäden
              und gefährliche Hotspots auf Ihren Solarmodulen entgehen dem
              bloßen Auge – aber nicht der Wärmebildkamera. Mit modernster
              Drohnentechnologie spüren wir zuverlässig Mikrorisse, defekte
              Zellen und überhitzte Bereiche auf, die für größere
              Ertragseinbußen oder Folgeschäden verantwortlich sind. So gewinnen
              Sie Klarheit über den Zustand Ihrer Module und sichern dauerhaft
              höchste Energieerträge.
            </Typography>

            <div className={s.points}>
              <Typography variant={'body1'} className={s.point1}>
                Auf dem zweiten Bild zeigt die Thermografiekamera detailliert,
                an welchen Stellen ungewöhnlich hohe Temperaturen auftreten –
                ein klares Anzeichen für Defekte.
              </Typography>
              <Typography variant={'body1'} className={s.point2}>
                Thermografieaufnahmen decken gefährliche Stellen auf, die sich
                auf bis zu 200 °C erhitzen können – ein ernstes Brandrisiko.
                Solche Defekte führen oft unbemerkt zu teuren Folgeschäden. Eine
                regelmäßige Prüfung schützt Ihre Investition und sorgt für
                langfristige Sicherheit und volle Leistung.
              </Typography>
            </div>

            <div className={s.factBlock}>
              <Typography variant={'body1'} className={s.factBlockText}>
                Schon eine dünne Staubschicht kann zu einem Leistungsverlust
              </Typography>
              <Typography variant={'body1'} className={s.textAccent}>
                von bis zu <span className={s.textAccentPercentNumber}>30</span>{' '}
                <span className={s.textAccentPercent}>% führen!</span>
              </Typography>
            </div>

            <Button
              buttonType="buttonLink"
              href="/#calculatorSection"
              className={s.button}
            >
              Einen Termin vereinbaren
            </Button>
          </div>
          <div className={s.imageWrapper}>
            <Image
              src={'/img/business/TransparencySection/image_1.jpg'}
              width={'350'}
              height={'297'}
              alt={'some people image'}
              className={s.image}
            />
            <Image
              src={'/img/business/TransparencySection/image_2.jpg'}
              width={'350'}
              height={'297'}
              alt={'some people image'}
              className={s.image}
            />
          </div>
        </div>
      </AppContainer>
    </ModalLayout>
  );
};
