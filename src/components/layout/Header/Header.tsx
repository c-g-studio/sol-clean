'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { MobileMenuIcon } from '@/components/icons/MobileMenuIcon';
import { LogoDarkIcon } from '@/components/icons/LogoDarkIcon';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { MobileMenu } from '@/components/layout/Header/components/MobileMenu/MobileMenu';
import { LogoIcon } from '@/components/icons/LogoIcon';
import { Button } from '@/components/common/Button/Button';

import { useScrollLock } from '@/hooks/useScrollLock';
import useWindowWidth from '@/hooks/useIsDesctopWidth';

import navigationData from '@/mockData/navigationData.json';

import s from './styles.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isDesktop = useWindowWidth();
  useScrollLock(isOpen);

  return (
    <header>
      <AppContainer classes={s.headerContainer}>
        <div className={s.header}>
          <Link href="/" aria-label="Home page">
            {pathname === '/' || pathname === '/business' ? (
              <LogoIcon className={s.logo} />
            ) : (
              <LogoDarkIcon className={s.logo} />
            )}
          </Link>
          {!isDesktop ? (
            <>
              <Button
                className={s.mobileMenuButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={'Open mobile menu'}
              >
                <MobileMenuIcon
                  className={
                    pathname === '/'
                      ? s.mobileMenuButtonIcon
                      : s.mobileMenuButtonIconDark
                  }
                />
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
