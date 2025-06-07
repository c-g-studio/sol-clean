'use client';

import Link from 'next/link';
import Image from 'next/image';

import { PhoneIcon } from '@/components/icons/social/PhoneIcon';
import { Typography } from '@/components/common/Typography/Typography';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { Button } from '@/components/common/Button/Button';
import { CallBackModal } from '@/components/pages/home/CallBackSection/components/CallBackModal/CallBackModal';

import { useModal } from '@/hooks/useModal';

import s from './styles.module.scss';

export const CallBackSection = () => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <section className={s.callBackSection}>
      <AppContainer classes={s.callBackSectionContainer}>
        <div>
          <Typography variant={'h2'} className={s.sectionTitle}>
            Wir rufen Sie so schnell wie möglich zurück
          </Typography>
          <Typography variant={'body3'} className={s.sectionText}>
            Sobald Ihre Anfrage bei uns eingeht, melden wir uns – zuverlässig,
            persönlich und ohne lange Wartezeit.
          </Typography>
          <div className={s.mobileImageBox}>
            <Image
              src={'/img/home/callBackSection/some_man.png'}
              width="440"
              height="507"
              alt={'some man image'}
              className={s.mobileImage}
            />
          </div>
          <ul className={s.contactList}>
            <li>
              <Link
                href={'tel:+491623828542'}
                target="_blank"
                rel="noopener noreferrer"
                className={s.contactListItemLink}
              >
                <PhoneIcon className={s.icon} />
                +49 1623828542
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/491623828542"
                target="_blank"
                rel="noopener noreferrer"
                className={s.contactListItemLink}
              >
                <WhatsappIcon className={s.icon} /> +49 1623828542
              </Link>
            </li>
          </ul>
          <Button variant={'primary'} className={s.button} onClick={onOpen}>
            Rückruf anfordern
          </Button>
          <CallBackModal isOpen={isOpen} onClose={onClose} />
        </div>

        <div className={s.desktopImageBox}>
          <Image
            src={'/img/home/callBackSection/some_man.png'}
            width="440"
            height="507"
            alt={'some man image'}
            className={s.desktopImage}
          />
        </div>
      </AppContainer>
    </section>
  );
};
