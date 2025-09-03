"use client";

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMask } from '@react-input/mask';
import { z } from 'zod';

import { Input } from '@/components/common/formUI/Input/Input';
import { Button } from '@/components/common/Button/Button';
import { Textarea } from '@/components/common/formUI/Textarea/Textarea';
import { Typography } from '@/components/common/Typography/Typography';
import { ModalLayout } from '@/components/common/ModalLayout/ModalLayout';
import { SuccessRequestModal } from '@/components/common/SuccessRequestModal/SuccessRequestModal';
import { ErrorRequestModal } from '@/components/common/ErrorRequestModal/ErrorRequestModal';
import { JobCheckboxGroup } from './JobCheckboxGroup';
import { Controller } from "react-hook-form";
import { DragNDropUploadFile } from '@/components/common/formUI/DragNDropUploadFile/DragNDropUploadFile';

import s from './styles.module.scss';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formSchema = z.object({
    phone: z
        .string()
        .min(17, 'Bitte geben Sie Ihre Telefonnummer ein')
        .regex(/^\+49 \d{3}-\d{3}-\d{2}-\d{2}$/, 'Die Telefonnummer muss im Format +49 xxx-xxx-xx-xx sein'),

    email: z
        .string()
        .regex(emailRegex, 'Bitte geben Sie eine gültige E-Mail-Adresse ein'),

    linkedin: z
        .string()
        .regex(emailRegex, 'Bitte geben Sie eine gültige E-Mail-Adresse ein')
        .optional(), // якщо не обов’язкове

    message: z
        .string()
        .max(500, 'Maximal 500 Zeichen erlaubt')
        .optional(),
    jobs: z
        .array(z.enum(['Reiniger', 'Elektriker', 'Aussendienstler']))
        .min(1, 'Bitte wählen Sie mindestens eine Option aus'),

    cv: z
        .any()
        .refine((file) => file instanceof File || file === null, 'Bitte laden Sie eine Datei hoch')
        .optional(),
});

type FormData = z.infer<typeof formSchema>;

type TBusinessPartnerModal = {
    isOpen: boolean;
    onClose: () => void;
};

type RequestStatus = 'idle' | 'success' | 'error';

export const BusinessPartnerModal: FC<TBusinessPartnerModal> = ({ isOpen, onClose }) => {
    const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle');

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors, dirtyFields, isSubmitted }
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            jobs: [], // ✅ масив завжди існує
            cv: null,
            phone: '',
            email: '',
            linkedin: '',
            message: ''
        }
    });

    const inputRef = useMask({
        mask: '+49 ___-___-__-__',
        replacement: { _: /\d/ }
    });

    const handleClose = () => {
        setRequestStatus('idle');
        onClose();
        reset({
            jobs: [], // ✅ явний скидання
            cv: null,
            phone: '',
            email: '',
            linkedin: '',
            message: ''
        });
    };

    const onSubmit = async (data: FormData) => {
        console.log({
            ...data,
        });
        reset({
            jobs: [], // ✅ явний скидання
            cv: null,
            phone: '',
            email: '',
            linkedin: '',
            message: ''
        });
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
                    <Typography variant="h2" className={s.title}>
                        Senden Sie Ihre Informationen und wir werden Ihnen antworten
                    </Typography>

                    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.jobsAndUploadGroup}>
                            <JobCheckboxGroup<FormData>
                                control={control}
                                name={"jobs"}
                                errors={errors}
                                isSubmitted={isSubmitted}
                            />

                            <Controller
                                control={control}
                                name="cv"
                                render={({ field }) => (
                                    <div>
                                        <DragNDropUploadFile
                                            width="100%"
                                            value={field.value}
                                            onFileSelected={(file) => {
                                                field.onChange(file);
                                            }}
                                        />
                                        {errors.cv && (
                                            <p className="error">{errors.cv.message?.toString()}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className={s.inputGroup}>
                            <Input<FormData>
                                name="phone"
                                control={control}
                                errors={errors}
                                dirtyFields={dirtyFields}
                                isSubmitted={isSubmitted}
                                maskRef={inputRef}
                                labelName={'Tel'}
                                placeholder={'+49'}
                                autoComplete={'tel'}
                                type={'tel'}
                            />
                            <Input<FormData>
                                name="email"
                                control={control}
                                errors={errors}
                                dirtyFields={dirtyFields}
                                isSubmitted={isSubmitted}
                                labelName={'E-Mail'}
                                autoComplete={'email'}
                                placeholder={'@gmail.com'}
                                type={'email'}
                            />
                            <Input<FormData>
                                name="linkedin"
                                control={control}
                                errors={errors}
                                dirtyFields={dirtyFields}
                                isSubmitted={isSubmitted}
                                labelName={'LinkedIn'}
                                autoComplete={'email'}
                                placeholder={'@gmail.com'}
                                type={'email'}
                            />
                            <Textarea
                                name="message"
                                labelName="Nachricht"
                                placeholder="Hi..."
                                errors={errors}
                                dirtyFields={dirtyFields}
                                isSubmitted={isSubmitted}
                                register={register}
                            />
                            <Button
                                buttonType='buttonWithArrowOnDesktop'
                                className={s.btn}
                                type="submit"
                            >
                                Schicken
                            </Button>
                        </div>
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
