import Link from 'next/link';

import { InstagramIcon } from '@/components/icons/social/InstagramIcon';
import { PhoneIcon } from '@/components/icons/social/PhoneIcon';
import { EmailIcon } from '@/components/icons/social/EmailIcon';

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
