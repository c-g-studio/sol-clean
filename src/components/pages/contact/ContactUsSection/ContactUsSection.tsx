'use client';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { QuestionIcon } from '@/components/icons/QuestionIcon';
import { Typography } from '@/components/common/Typography/Typography';
import { Textarea } from '@/components/common/formUI/Textarea/Textarea';
import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/formUI/Input/Input';

import s from './styles.module.scss';
import { useState } from 'react';
import { callBackService } from '@/services/sendInfo.service';
import { SuccessRequestModal } from '@/components/common/SuccessRequestModal/SuccessRequestModal';
import { ErrorRequestModal } from '@/components/common/ErrorRequestModal/ErrorRequestModal';

const formSchema = z.object({
  email: z.string().email({ message: 'Geben Sie die richtige E-Mail ein' }),
  message: z.string().min(10, 'Min 10 Zeichen')
});

type FormData = z.infer<typeof formSchema>;
type RequestStatus = 'idle' | 'success' | 'error';

export const ContactUsSection = () => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle');

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isSubmitted }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data: FormData) => {
    try {
      await callBackService.callBack(data);
      reset();
      setRequestStatus('success');
    } catch {
      setRequestStatus('error');
    }
  };

  const handleClose = () => {
    setRequestStatus('idle');
  };

  return (
    <section className={s.contactUsSection}>
      <AppContainer classes={s.contactUsContainer}>
        <Typography variant={'h2'} className={s.title}>
          Haben Sie <Typography variant={'decorSpan'}>Fragen?</Typography>
        </Typography>
        <div className={s.contentWrapper}>
          <Image
            src={'/img/contact/ContactUsSection/image_1.jpg'}
            width={'610'}
            height={'393'}
            alt={'Image with girl'}
            className={s.image}
          />
          <div className={s.box}>
            <Typography variant={'h2'} className={s.titleDesktop}>
              Haben Sie <Typography variant={'decorSpan'}>Fragen?</Typography>
            </Typography>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              <Input<FormData>
                name="email"
                control={control}
                errors={errors}
                dirtyFields={dirtyFields}
                isSubmitted={isSubmitted}
                labelName={'E-Mail'}
                placeholder={'@gmail.com'}
                type={'email'}
              />
              <Textarea
                name="message"
                errors={errors}
                dirtyFields={dirtyFields}
                isSubmitted={isSubmitted}
                register={register}
              />
              <Button className={s.btn} type="submit">
                Schicken
              </Button>
            </form>
          </div>
        </div>
        <div className={s.decorWrapper}>
          <div className={s.decorBackground}></div>
        </div>
        <div className={s.decorPhoneWrapper}>
          <QuestionIcon className={s.icon} />
        </div>

        <SuccessRequestModal
          requestStatus={requestStatus}
          handleClose={handleClose}
        />

        <ErrorRequestModal
          requestStatus={requestStatus}
          handleClose={handleClose}
        />
      </AppContainer>
    </section>
  );
};
