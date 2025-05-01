import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMask } from '@react-input/mask';

import { Button } from '@/components/common/Button/Button';
import { Typography } from '@/components/common/Typography/Typography';
import { ModalLayout } from '@/components/common/ModalLayout/ModalLayout';

import s from './styles.module.scss';

const formSchema = z.object({
  phone: z
    .string()
    .min(1, 'Write your phone number!')
    .regex(/^\+49/, 'Phone number must start with +49'),
  message: z.string().min(1, 'Write your message!')
});

type FormData = z.infer<typeof formSchema>;

type TCallBackModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CallBackModal: FC<TCallBackModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitted }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema), // Используем zod для валидации
    mode: 'onChange'
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  const getFieldClass = (
    fieldName: keyof FormData,
    baseClass: string
  ): string => {
    const hasError = !!errors[fieldName];
    const isDirty = dirtyFields[fieldName];

    if (!isDirty && !isSubmitted) return baseClass;

    return hasError ? `${baseClass} ${s.invalid}` : `${baseClass} ${s.valid}`;
  };

  const inputRef = useMask({
    mask: '+49 ___-___-__-__',
    replacement: { _: /\d/ }
  });

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      layoutClass={s.layout}
      closeIconClass={s.closeIcon}
    >
      <div className={s.modalBox}>
        <Typography variant="h2" className={s.title}>
          Jetzt Nummer hinterlassen
        </Typography>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={s.label}>
            <span className={s.labelName}>Tel</span>

            <Controller
              name={'phone'}
              control={control}
              render={({ field }) => (
                <input
                  type="tel"
                  placeholder="+49"
                  className={getFieldClass('phone', s.input)}
                  ref={inputRef}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.phone && (
              <span className={s.error}>{errors.phone.message}</span>
            )}
          </label>

          <label className={s.label}>
            <span className={s.labelName}>Nachricht</span>
            <textarea
              placeholder="Hi..."
              className={getFieldClass('message', s.textarea)}
              {...register('message')}
            />
            {errors.message && (
              <span className={s.error}>{errors.message.message}</span>
            )}
          </label>

          <Button buttonType="buttonWithArrow" className={s.btn} type="submit">
            Jetzt Rückruf anfordern
          </Button>
        </form>
      </div>
    </ModalLayout>
  );
};
