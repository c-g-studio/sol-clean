import Link from 'next/link';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { InstagramIcon } from '@/components/icons/social/InstagramIcon';
import { PhoneIcon } from '@/components/icons/social/PhoneIcon';
import { EmailIcon } from '@/components/icons/social/EmailIcon';

import s from './styles.module.scss';
import { GoogleMapIcon } from '@/components/icons/GoogleMapIcon';

export const WorkingHoursSection = () => {
  return (
    <section className={s.workingHoursSection}>
      <AppContainer classes={s.workingHoursContainer}>
        <div>
          <Typography variant={'h1'} className={s.sectionTitle}>
            Geschäftszeiten
          </Typography>

          <Typography variant={'h2'} className={s.subTitle}>
            Geschäftszeiten
          </Typography>

          <div className={s.timeBox}>
            <Typography variant={'body4'}>Mo – Sa</Typography>
            <Typography variant={'body4'}>07:00 – 21:00</Typography>
          </div>
          <ul className={s.contactList}>
            <li>
              <Link
                href={'https://example.com'}
                target={'_blank'}
                rel={'noopener noreferrer'}
                className={s.contactListLink}
                aria-label="Instagram link"
              >
                <InstagramIcon className={s.contactItemIcon} />
                <Typography variant={'body4'}> Sol-Clean</Typography>
              </Link>
            </li>
            <li>
              <Link
                href={'tel:+491623828542'}
                target={'_blank'}
                rel={'noopener noreferrer'}
                className={s.contactListLink}
                aria-label="Call us"
              >
                <PhoneIcon className={s.contactItemIcon} />
                <Typography variant={'body4'}>+49 1623828542</Typography>
              </Link>
            </li>

            <li>
              <Link
                href={'mailto:info@sol-clean.de'}
                target={'_blank'}
                rel={'noopener noreferrer'}
                className={s.contactListLink}
                aria-label="Send email"
              >
                <EmailIcon className={s.contactItemIcon} />
                <Typography variant={'body4'}>info@sol-clean.de</Typography>
              </Link>
            </li>
            <li>
              <Link
                href={'tel:+491623828542'}
                target={'_blank'}
                rel={'noopener noreferrer'}
                className={s.contactListLink}
                aria-label="Call us"
              >
                <GoogleMapIcon className={s.contactItemIcon} />
                <Typography variant={'body4'}>
                  Sonnenberg 45, 71735 Eberdingen
                </Typography>
              </Link>
            </li>
          </ul>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.449110264377!2d8.915740399999999!3d48.906835099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47977b878411f20d%3A0xc7f41b31e0e74c98!2zU29ubmVuYmVyZyA0NSwgNzE3MzUgRWJlcmRpbmdlbiwg0JPQtdGA0LzQsNC90LjRjw!5e0!3m2!1sru!2sua!4v1746817337771!5m2!1sru!2sua"
          width="auto"
          height="auto"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={s.googleMapImage}
        ></iframe>

        <div className={s.decorWrapper}>
          <div className={s.decorBackground}></div>
        </div>
        <div className={s.decorPhoneWrapper}>
          <PhoneIcon className={s.decorPhone} />
        </div>
      </AppContainer>
    </section>
  );
};
