"use client";

import Image from 'next/image';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';
import { BusinessPartnerModal } from './components/BusinessPartnerModal/BusinessPartnerModal';

import { useModal } from '@/hooks/useModal';

import s from './styles.module.scss';

export const BusinessPartnerSection = () => {
    const { isOpen, onOpen, onClose } = useModal();
    return (
        <section className={s.importanceCleaningSection}>
            <AppContainer classes={s.importanceCleaningSectionContainer}>
                <div>
                    <Typography variant={'h2'} className={s.importanceCleaningTitle}>
                        Ihr PV-Partner
                        <Typography variant={'decorSpan'}> fürs Business</Typography>
                        <br className={s.breakText} />
                    </Typography>
                    <Typography variant={'body1'} className={s.importanceCleaningText}>
                        Profitieren Sie von einem Servicepartner, der Ihre PV-Anlage so zuverlässig betreut, wie Sie Ihr eigenes Geschäft.“
                    </Typography>
                    <Image
                        src={'/img/home/businessPartnerSection/handshake.jpg'}
                        width={'549'}
                        height={'410'}
                        alt={'sunny panels image'}
                        className={s.importanceCleaningSectionImage}
                    />

                    <Button
                        variant={'primary'}
                        className={s.importanceCleaningButton}
                        onClick={onOpen}
                    >
                        Zu Business Solutionsn
                    </Button>
                    <BusinessPartnerModal isOpen={isOpen} onClose={onClose} />
                </div>
                <Image
                    src={'/img/home/businessPartnerSection/handshake.jpg'}
                    width={'549'}
                    height={'410'}
                    alt={'sunny panels image'}
                    className={s.importanceCleaningSectionImageDesktop}
                />
            </AppContainer>
        </section>
    );
};
