import Link from 'next/link';

import InstagramIcon from '../../../../../../public/img/socials/instagram.svg';
import PhoneIcon from '../../../../../../public/img/socials/phone.svg';
import EmailIcon from '../../../../../../public/img/socials/email.svg';

import s from './styles.module.scss';

export const ContactList = () => {
  return (
    <ul className={s.contactList}>
      <li>
        <Link
          href={'https://example.com'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <InstagramIcon className={s.contactItemIcon} />
        </Link>
      </li>
      <li>
        <Link
          href={'tel:+49 1623828542'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <PhoneIcon className={s.contactItemIcon} />
        </Link>
      </li>
      <li>
        <Link
          href={'mailto:info@sol-clean.de'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <EmailIcon className={s.contactItemIcon} />
        </Link>
      </li>
    </ul>
  );
};
