'use client';
import { z } from 'zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useMask } from '@react-input/mask';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Textarea } from '@/components/common/formUI/Textarea/Textarea';
import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/formUI/Input/Input';

import { zodResolver } from '@hookform/resolvers/zod';

import s from './styles.module.scss';

const formSchema = z.object({
  phone: z
    .string()
    .min(17, 'Schreiben Sie Ihre Telefonnummer')
    .regex(/^\+49/, 'Die Telefonnummer muss mit +49 beginnen'),
  email: z.string().email({ message: 'Geben Sie die richtige E-Mail ein' }),
  message: z.string().min(10, 'Min 10 Zeichen')
});

type FormData = z.infer<typeof formSchema>;

export const EmergencyServiceSection = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitted }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  const inputRef = useMask({
    mask: '+49 ___-___-__-__',
    replacement: { _: /\d/ }
  });

  return (
    <section className={s.section}>
      <AppContainer>
        <div className={s.tabletContent}>
          <Typography variant={'h2'} className={s.title}>
            Sol-Clean 365°{' '}
            <Typography variant={'decorSpan'}>24/7 Notdienst</Typography>
          </Typography>
          <Typography variant={'body3'} className={s.text}>
            Wenn es schnell gehen mus
          </Typography>
        </div>
        <div className={s.container}>
          <div className={s.formWrapper}>
            <div className={s.mobileContent}>
              <Typography variant={'h2'} className={s.title}>
                Sol-Clean 365°{' '}
                <Typography variant={'decorSpan'}>24/7 Notdienst</Typography>
              </Typography>
              <Typography variant={'body3'} className={s.text}>
                Wenn es schnell gehen mus
              </Typography>
            </div>
            <Image
              src={'/img/business/emergencyServiceSection/image_1.jpg'}
              width={333}
              height={404}
              alt={'Girl with notebook'}
              className={s.mobileImage}
            />

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
              <Input<FormData>
                name="phone"
                control={control}
                errors={errors}
                dirtyFields={dirtyFields}
                isSubmitted={isSubmitted}
                maskRef={inputRef}
                labelName={'Tel'}
                placeholder={'+49'}
                type={'tel'}
              />
              <Textarea
                name="message"
                errors={errors}
                dirtyFields={dirtyFields}
                isSubmitted={isSubmitted}
                register={register}
              />
              <Button className={s.button} type="submit">
                Schicken
              </Button>
            </form>
          </div>

          <Image
            src={'/img/business/emergencyServiceSection/image_1.jpg'}
            width={333}
            height={404}
            alt={'Girl with notebook'}
            className={s.tabletImage}
          />
          <Image
            src={'/img/business/emergencyServiceSection/image_2.jpg'}
            width={333}
            height={404}
            alt={'Girl with notebook'}
            className={s.desktopImage}
          />
        </div>
      </AppContainer>
    </section>
  );
};
