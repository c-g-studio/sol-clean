import { useState } from 'react';

export interface IUseModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return {
    isOpen,
    onOpen: handleOpenModal,
    onClose: handleCloseModal
  };
};
