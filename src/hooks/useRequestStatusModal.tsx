import { useState } from 'react';
import { SuccessRequestModal } from '@/components/common/SuccessRequestModal/SuccessRequestModal';
import { ErrorRequestModal } from '@/components/common/ErrorRequestModal/ErrorRequestModal';

type RequestStatus = 'idle' | 'success' | 'error';

export const useRequestStatusModal = () => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('idle');

  const handleClose = () => setRequestStatus('idle');
  const setSuccess = () => setRequestStatus('success');
  const setError = () => setRequestStatus('error');

  const modals = (
    <>
      <SuccessRequestModal requestStatus={requestStatus} handleClose={handleClose} />
  <ErrorRequestModal requestStatus={requestStatus} handleClose={handleClose} />
  </>
);

  return { requestStatus, setSuccess, setError, handleClose, modals };
};
