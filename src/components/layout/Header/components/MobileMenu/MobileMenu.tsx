import { FC } from 'react';
import Link from 'next/link';

import { CrossIcon } from '@/components/icons/CrossIcon';
import { LogoDarkIcon } from '@/components/icons/LogoDarkIcon';

import navigationData from '@/mockData/navigationData.json';

import s from './styles.module.scss';
import { Button } from '@/components/common/Button/Button';

type TMobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu: FC<TMobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`${s.backdrop} ${isOpen ? s.showBackdrop : ''}`}></div>
      <div className={`${s.mobileMenu} ${isOpen ? s.isOpen : ''}`}>
        <div className={s.wrapper}>
          <Link href="/" aria-label={'Home page link'}>
            <LogoDarkIcon className={s.logo} />
          </Link>
          <button
            type={'button'}
            onClick={onClose}
            className={s.closeButton}
            aria-label={'Close mobile menu'}
          >
            <CrossIcon className={s.crossIcon} />
          </button>
        </div>
        <nav>
          <ul className={s.navList}>
            {navigationData.map(item => {
              if (!item.header) {
                return null;
              }

              return (
                <li key={item.name} className={s.navListItem}>
                  <Link
                    href={item.link}
                    title={`Link naar pagina ${item.name}`}
                    className={s.navListLink}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button variant={'primary'} className={s.mobileMenuButton}>
          Wirtschaftlichkeitsrechnung
        </Button>
      </div>
    </>
  );
};
