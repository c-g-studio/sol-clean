import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import Image from 'next/image';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';
import { Button } from '@/components/common/Button/Button';

export const PartnerSection = () => {
  return (
    <section className={s.section}>
      <AppContainer classes={s.container}>
        <Image
          src={'/img/business/PartnerSection/image.jpg'}
          width={'549'}
          height={'367'}
          alt={'some people image'}
          className={s.imageDesktop}
        />
        <div>
          <Typography variant={'h2'} className={s.title}>
            <Typography variant={'decorSpan'}>
              Souveräner Service-Partner
            </Typography>
            <br className={s.breakLine} />
            der begeistert
          </Typography>
          <Image
            src={'/img/business/PartnerSection/image.jpg'}
            width={'688'}
            height={'517'}
            alt={'some people image'}
            className={s.image}
          />

          <Typography variant={'body3'} className={s.text}>
            Mit Sol-Clean einen zuverlässigen Service-Partner für alles was Ihre
            PV-Anlage betrifft. Eine nachhaltige Zukunft mit einem finanziell
            nachhaltigem Service-Konzept. Beginnend mit einer sorgfältigen
            Bestandsaufnahme, Inspektion und Prüfung der PV-Anlage - zu einer
            ausgereiften Strategie-Beratung - und einer zuverlässigen Umsetzung
            damit sich jeder um seine Kernkompetenzen kümmern kann. Für eine
            gemeinsam gewinnbringende Zukunft mit Sol-Clean - Damit sich die
            Sonne wieder lohnt.
          </Typography>

          <Button
            variant={'primary'}
            buttonType={'buttonLink'}
            href={'/#calculatorSection'}
            className={s.button}
          >
            Wirtschaftlichkeitsrechnung
          </Button>
        </div>
      </AppContainer>
    </section>
  );
};
