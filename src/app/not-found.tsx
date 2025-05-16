import { Metadata } from 'next';

import { Button } from '@/components/common/Button/Button';
import { Typography } from '@/components/common/Typography/Typography';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';

import Image from 'next/image';

import s from './errors.module.scss';

export const metadata: Metadata = {
  title: 'Sol Clean | 404 - Seite nicht gefunden'
};

export default function NotFound() {
  return (
    <section className={s.section}>
      <AppContainer classes={s.container}>
        <Image
          src={'/img/notFound/image_1.png'}
          width={'717'}
          height={'392'}
          alt={'not found image'}
          className={s.image}
        />
        <Typography variant={'h1'} className={s.title}>
          Oh nein! Diese Seite konnte nicht gefunden werden.
        </Typography>
        <Typography variant={'body3'} className={s.text}>
          Möglicherweise haben Sie eine falsche Adresse eingegeben oder die
          Seite existiert nicht mehr. Aber kein Grund zur Sorge – wir helfen
          Ihnen, zurück zur Energie zu finden!
        </Typography>
        <div className={s.buttonsBox}>
          <Button buttonType={'buttonLink'} href={'/'} className={s.button}>
            Zur Startseite
          </Button>
          <Button
            buttonType={'buttonLink'}
            href={'/services'}
            className={s.button}
          >
            Zu unseren Dienstleistungen
          </Button>
        </div>
      </AppContainer>
    </section>
  );
}
