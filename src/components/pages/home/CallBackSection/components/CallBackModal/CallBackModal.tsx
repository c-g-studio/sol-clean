import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/common/Button/Button';

type FormData = {
  phone: string;
  message: string;
};

export const CallBackModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <>
      <Typography variant={'h2'} className={s.title}>
        Jetzt Nummer hinterlassen
      </Typography>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={s.label}>
          Tel
          <div className={s.phoneWrapper}>
            <input
              type="tel"
              className={s.input}
              {...register('phone', { required: true })}
            />
          </div>
          {errors.phone && (
            <span className={s.error}>Telefonnummer erforderlich</span>
          )}
        </label>

        <label className={s.label}>
          Nachricht
          <textarea
            className={s.textarea}
            placeholder="Hi..."
            {...register('message')}
          />
        </label>

        <Button
          buttonType={'buttonWithArrow'}
          className={s.btn}
          type="submit"
          onSubmit={() => onSubmit}
        >
          Jetzt Rückruf anfordern
        </Button>
      </form>
    </>
  );
};
