'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

import s from '@/app/errors.module.scss';

export default function Error({
  error
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={s.section}>
      <AppContainer classes={s.container}>
        <Image
          src={'/img/error/image_1.png'}
          width={'874'}
          height={'370'}
          alt={'error image'}
          className={s.errorImage}
        />
        <Typography variant={'h1'} className={s.title}>
          500 — Etwas ist schiefgelaufen...
        </Typography>
        <Typography variant={'body3'} className={s.text}>
          Unser System ist etwas überhitzt. Wir kühlen die Server bereits ab 🧊
          <br />
          Bitte versuchen Sie, die Seite zu aktualisieren oder schauen Sie
          später noch einmal vorbei.
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
