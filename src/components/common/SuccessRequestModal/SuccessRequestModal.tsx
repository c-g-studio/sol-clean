import { FC } from 'react';
import { ModalLayout } from '@/components/common/ModalLayout/ModalLayout';
import { Typography } from '@/components/common/Typography/Typography';
import { SuccessIcon } from '@/components/icons/SuccessIcon';

import s from './styles.module.scss';

type TSuccessRequestModalProps = {
  requestStatus: 'idle' | 'success' | 'error';
  handleClose: () => void;
};

export const SuccessRequestModal: FC<TSuccessRequestModalProps> = ({
  requestStatus,
  handleClose
}) => {
  return (
    <ModalLayout
      isOpen={requestStatus === 'success'}
      onClose={handleClose}
      layoutClass={s.layout}
    >
      <div className={s.modalBox}>
        <SuccessIcon />
        <Typography variant="body1" className={s.text}>
          Ihre Nachricht wurde erfolgreich
          <br /> gesendet, vielen Dank
        </Typography>
      </div>
    </ModalLayout>
  );
};
