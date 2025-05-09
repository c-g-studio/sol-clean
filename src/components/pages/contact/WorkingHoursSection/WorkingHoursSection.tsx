import Link from 'next/link';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { InstagramIcon } from '@/components/icons/social/InstagramIcon';
import { PhoneIcon } from '@/components/icons/social/PhoneIcon';
import { EmailIcon } from '@/components/icons/social/EmailIcon';

import s from './styles.module.scss';
import { GoogleMapIcon } from '@/components/icons/GoogleMapIcon';
import Image from 'next/image';

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
        <Link
          href={'https://maps.app.goo.gl/x8LDKmruBJRTEFi36'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <Image
            src={'/img/contact/WorkingHoursSection/google_map.png'}
            width="610"
            height="393"
            alt={'Google map image'}
            className={s.googleMapImage}
          />
        </Link>
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
