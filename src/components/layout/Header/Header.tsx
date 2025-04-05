'use client';

import Link from 'next/link';
import { useState } from 'react';

import { LogoIcon } from '@/components/icons/LogoIcon';
import { MobileMenuIcon } from '@/components/icons/MobileMenuIcon';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Button } from '@/components/common/Button/Button';
import { MobileMenu } from '@/components/layout/Header/components/MobileMenu/MobileMenu';

import { useScrollLock } from '@/hooks/useScrollLock';

import s from './styles.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useScrollLock(isOpen);

  return (
    <header>
      <AppContainer>
        <div className={s.header}>
          <Link href="/">
            <LogoIcon className={s.logo} />
          </Link>
          <Button
            className={s.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MobileMenuIcon className={s.mobileMenuButtonIcon} />
          </Button>
          <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </AppContainer>
    </header>
  );
};
