import { FC } from 'react';
import { ModalLayout } from '@/components/common/ModalLayout/ModalLayout';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';
import { ErrorIcon } from '@/components/icons/ErrorIcon';

type TSuccessRequestModalProps = {
  requestStatus: 'idle' | 'success' | 'error';
  handleClose: () => void;
};

export const ErrorRequestModal: FC<TSuccessRequestModalProps> = ({
  requestStatus,
  handleClose
}) => {
  return (
    <ModalLayout
      isOpen={requestStatus === 'error'}
      onClose={handleClose}
      layoutClass={s.layout}
    >
      <div className={s.modalBox}>
        <ErrorIcon />
        <Typography variant="body1" className={`${s.text} ${s.errorText}`}>
          Es ist ein Fehler aufgetreten.
          <br />
          Bitte versuchen Sie es erneut.
        </Typography>
      </div>
    </ModalLayout>
  );
};
