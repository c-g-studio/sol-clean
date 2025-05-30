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
          className={s.contactListLink}
          aria-label="Instagram link"
        >
          <InstagramIcon className={s.contactItemIcon} />
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
        </Link>
      </li>
    </ul>
  );
};
