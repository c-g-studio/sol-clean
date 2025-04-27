import { useState } from 'react';

export const useMultiModal = <T extends string | number>() => {
  const [openModalId, setOpenModalId] = useState<T | null>(null);

  const openModal = (id: T) => setOpenModalId(id);
  const closeModal = () => setOpenModalId(null);
  const isOpen = (id: T) => openModalId === id;

  return { openModalId, openModal, closeModal, isOpen };
};
