import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';

import { Input } from '@/components/common/formUI/Input/Input';
import { Button } from '@/components/common/Button/Button';
import { Textarea } from '@/components/common/formUI/Textarea/Textarea';
import { ContactMethodInput } from '@/components/common/formUI/ContactMethodInput/ContactMethodInput';
import { Typography } from '@/components/common/Typography/Typography';
import { ModalLayout } from '@/components/common/ModalLayout/ModalLayout';
import { SuccessRequestModal } from '@/components/common/SuccessRequestModal/SuccessRequestModal';
import { ErrorRequestModal } from '@/components/common/ErrorRequestModal/ErrorRequestModal';

// import { callBackService } from '@/services/sendInfo.service';

import s from './styles.module.scss';

const formSchema = z
    .object({
        name: z.string().min(2, 'Bitte geben Sie Ihren vollständigen Namen ein'),
        contactMethod: z.enum(['E-Mail-Adresse', 'Telefonnummer', 'WhatsApp'], {
            errorMap: () => ({ message: 'Bitte wählen Sie eine Kontaktmethode' })
        }),
        contactInfo: z
            .string()
            .min(1, 'Bitte geben Sie Ihre Kontaktinformationen ein'),
        message: z.string().max(500, 'Maximal 500 Zeichen').optional()
    })
    .superRefine((data, ctx) => {
        if (data.contactMethod === 'E-Mail-Adresse') {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contactInfo)) {
                ctx.addIssue({
                    code: 'custom',
                    path: ['contactInfo'],
                    message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
                });
            }
        }

        if (
            data.contactMethod === 'Telefonnummer' ||
            data.contactMethod === 'WhatsApp'
        ) {
            if (!/^\+49 \d{3}-\d{3}-\d{2}-\d{2}$/.test(data.contactInfo)) {
                ctx.addIssue({
                    code: 'custom',
                    path: ['contactInfo'],
                    message:
                        'Bitte geben Sie eine gültige Telefonnummer im Format +49 ___-___-__-__ ein'
                });
            }
        }
    });

type FormData = z.infer<typeof formSchema>;

type TBookAppointmentModal = {
    isOpen: boolean;
    onClose: () => void;
};

type RequestStatus = 'idle' | 'success' | 'error';

export const BookAppointmentModalLite: FC<TBookAppointmentModal> = ({
    isOpen,
    onClose
}) => {
    const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle');

    const {
        register,
        control,
        handleSubmit,
        reset,
        watch,
        formState: { errors, dirtyFields, isSubmitted }
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            contactMethod: 'E-Mail-Adresse'
        }
    });

    const handleClose = () => {
        setRequestStatus('idle');
        onClose();
        reset();
    };

    const onSubmit = async (data: FormData) => {
        console.log('data: ', data);
        reset();
        setRequestStatus('success');
        // try {
        //     await callBackService.callBack(data);
        //     setRequestStatus('success');
        // } catch {
        //     setRequestStatus('error');
        // }
    };

    return (
        <>
            <ModalLayout
                isOpen={isOpen && requestStatus === 'idle'}
                onClose={handleClose}
                layoutClass={s.layout}
                closeIconClass={s.closeIcon}
            >
                <div className={s.modalBox}>
                    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                        <Input<FormData>
                            name="name"
                            labelClassName={s.labelName}
                            control={control}
                            errors={errors}
                            dirtyFields={dirtyFields}
                            isSubmitted={isSubmitted}
                            labelName={
                                'Tragen Sie Ihren Namen ein, um einen Termin zu vereinbaren.'
                            }
                            placeholder={'Vor- und Nachname'}
                            type={'text'}
                        />
                        <ContactMethodInput<FormData>
                            control={control}
                            watch={watch}
                            errors={errors}
                            nameContactMethod="contactMethod"
                            nameContactInfo="contactInfo"
                            dirtyFields={dirtyFields}
                            isSubmitted={isSubmitted}
                            labelClassName={s.labelName}
                        />
                        <Textarea
                            name="message"
                            labelName="Haben Sie besondere Anliegen oder Fragen? (optional)"
                            labelClassName={s.message}
                            placeholder="Hi..."
                            errors={errors}
                            dirtyFields={dirtyFields}
                            isSubmitted={isSubmitted}
                            register={register}
                        />
                        <Typography variant="body1" className={s.agreementText}>
                            Sie erteilen der Sol-clean die Erlaubnis, Sie zum Zweck einer
                            Beratung kontaktieren zu dürfen. Ausführliche Hinweise erhalten
                            Sie in unserer
                            <Link className={s.agreementLink} href={'/'} target="_blank">
                                Datenschu zerklaruno.
                            </Link>
                        </Typography>
                        <Button
                            buttonType="buttonWithArrowOnDesktop"
                            className={s.btn}
                            type="submit"
                        >
                            Jetzt Termin vereinbaren
                        </Button>
                    </form>
                </div>
            </ModalLayout>

            <SuccessRequestModal
                requestStatus={requestStatus}
                handleClose={handleClose}
            />

            <ErrorRequestModal
                requestStatus={requestStatus}
                handleClose={handleClose}
            />
        </>
    );
};
