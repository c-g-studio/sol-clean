import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Input } from '@/components/common/Input/Input';
import { Button } from '@/components/common/Button/Button';
import { Textarea } from '@/components/common/Textarea/Textarea';
import { Typography } from '@/components/common/Typography/Typography';
import { ModalLayout } from '@/components/common/ModalLayout/ModalLayout';

import s from './styles.module.scss';

const formSchema = z.object({
  phone: z
    .string()
    .min(17, 'Schreiben Sie Ihre Telefonnummer')
    .regex(/^\+49/, 'Die Telefonnummer muss mit +49 beginnen'),
  message: z.string().min(10, 'Min 10 Zeichen')
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
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

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
          <Input<FormData>
            name="phone"
            control={control}
            errors={errors}
            dirtyFields={dirtyFields}
            isSubmitted={isSubmitted}
          />
          <Textarea
            name="message"
            errors={errors}
            dirtyFields={dirtyFields}
            isSubmitted={isSubmitted}
            register={register}
          />
          <Button buttonType="buttonWithArrow" className={s.btn} type="submit">
            Jetzt Rückruf anfordern
          </Button>
        </form>
      </div>
    </ModalLayout>
  );
};
