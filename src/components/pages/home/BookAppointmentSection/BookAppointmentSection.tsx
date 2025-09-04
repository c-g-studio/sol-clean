'use client';

import Image from 'next/image';

import { Typography } from '@/components/common/Typography/Typography';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Button } from '@/components/common/Button/Button';
import { BookAppointmentModal } from '@/components/pages/home/BookAppointmentSection/components/BookAppointmentModal/BookAppointmentModal';

import { useModal } from '@/hooks/useModal';

import s from './styles.module.scss';

export const BookAppointmentSection = () => {
    const { isOpen, onOpen, onClose } = useModal();
    return (
        <section className={s.bookAppointmentSection}>
            <AppContainer classes={s.bookAppointmentSectionContainer}>
                <div className={s.desktopImageBox}>
                    <Image
                        src={'/img/home/bookAppointmentSection/some_girl.png'}
                        width="350"
                        height="242"
                        alt={'some girl image'}
                        className={s.desktopImage}
                    />
                </div>
                <div>
                    <Typography variant={'h2'} className={s.sectionTitle}>
                        Sie sind nicht sicher, ob das System gut funktioniert?
                    </Typography>
                    <div className={s.mobileImageBox}>
                        <Image
                            src={'/img/home/bookAppointmentSection/some_girl.png'}
                            width="440"
                            height="507"
                            alt={'some girl image'}
                            className={s.mobileImage}
                        />
                    </div>
                    <Button variant={'primary'} className={s.button} onClick={onOpen}>
                        Jetzt Termin vereinbaren
                    </Button>
                    <BookAppointmentModal isOpen={isOpen} onClose={onClose} />
                </div>


            </AppContainer>
        </section>
    );
};
