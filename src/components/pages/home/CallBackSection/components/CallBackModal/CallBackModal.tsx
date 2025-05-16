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

import { callBackService } from '@/services/sendInfo.service';

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

type RequestStatus = 'idle' | 'success' | 'error';

export const CallBackModal: FC<TCallBackModalProps> = ({ isOpen, onClose }) => {
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

  const inputRef = useMask({
    mask: '+49 ___-___-__-__',
    replacement: { _: /\d/ }
  });

  const handleClose = () => {
    setRequestStatus('idle');
    onClose();
    reset();
  };

  const onSubmit = async (data: FormData) => {
    try {
      console.log(1);
      await callBackService.callBack(data);
      setRequestStatus('success');
    } catch {
      setRequestStatus('error');
    }
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
            Jetzt Nummer hinterlassen
          </Typography>

          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
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
            <Button
              buttonType="buttonWithArrow"
              className={s.btn}
              type="submit"
            >
              Jetzt Rückruf anfordern
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
