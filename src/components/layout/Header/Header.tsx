'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MobileMenuIcon } from '@/components/icons/MobileMenuIcon';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Button } from '@/components/common/Button/Button';
import { MobileMenu } from '@/components/layout/Header/components/MobileMenu/MobileMenu';
import { LogoIcon } from '@/components/icons/LogoIcon';

import { useScrollLock } from '@/hooks/useScrollLock';
import useWindowWidth from '@/hooks/useIsDesctopWidth';
import navigationData from '@/mockData/navigationData.json';

import s from './styles.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useScrollLock(isOpen);
  const isDesktop = useWindowWidth();

  return (
    <header>
      <AppContainer classes={s.headerContainer}>
        <div className={s.header}>
          <Link href="/" aria-label="Home page">
            <LogoIcon className={s.logo} />
          </Link>
          {!isDesktop ? (
            <>
              <Button
                className={s.mobileMenuButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={'Open mobile menu'}
              >
                <MobileMenuIcon className={s.mobileMenuButtonIcon} />
              </Button>
              <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </>
          ) : (
            <ul className={s.navigation}>
              {navigationData.map(item => {
                if (!item.header) {
                  return null;
                }
                return (
                  <li key={item.name} className={s.navigationItem}>
                    <Link href={item.link} className={s.navLink}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </AppContainer>
    </header>
  );
};
