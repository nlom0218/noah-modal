import { useContext } from 'react';

import ModalContext from '../ModalProvider/ModalContext';

const useModal = () => {
  const { openModal, closeModal, currentModal } = useContext(ModalContext);

  const _openModal = (name: string) => openModal(name);

  const _closeModal = (name: string) => closeModal(name);

  return {
    openModal: _openModal,
    closeModal: _closeModal,
    Modal: currentModal,
    isModalOpen: Boolean(currentModal),
  };
};

export default useModal;
