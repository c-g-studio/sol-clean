'use client';

import Image from 'next/image';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';
// import { BusinessPartnerModal } from './components/BusinessPartnerModal/BusinessPartnerModal';

// import { useModal } from '@/hooks/useModal';

import s from './styles.module.scss';
// import { type } from './../../../../hooks/uploadPreview/useFilePreview';

export const BusinessPartnerSection = () => {
  // const { isOpen, onOpen, onClose } = useModal();
  return (
    <section className={s.businessPartnerSection}>
      <AppContainer classes={s.businessPartnerSectionContainer}>
        <div>
          <Typography variant={'h2'} className={s.businessPartnerTitle}>
            Ihr PV-Partner
            <Typography variant={'decorSpan'}> fürs Business</Typography>
            <br className={s.breakText} />
          </Typography>
          <Typography variant={'body1'} className={s.businessPartnerText}>
            Profitieren Sie von einem Servicepartner, der Ihre PV-Anlage so
            zuverlässig betreut, wie Sie Ihr eigenes Geschäft.“
          </Typography>
          <Image
            src={'/img/home/businessPartnerSection/handshake.jpg'}
            width={'549'}
            height={'410'}
            alt={'sunny panels image'}
            className={s.businessPartnerSectionImage}
          />

          <Button
            variant={'primary'}
            buttonType={"buttonLink"}
            className={s.businessPartnerButton}
            href={"/business"}
          >
            Zu Business Solutionsn
          </Button>
        </div>
        <Image
          src={'/img/home/businessPartnerSection/handshake.jpg'}
          width={'549'}
          height={'410'}
          alt={'sunny panels image'}
          className={s.businessPartnerSectionImageDesktop}
        />
      </AppContainer>
    </section>
  );
};
