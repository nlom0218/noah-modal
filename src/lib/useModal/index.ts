import { useContext } from 'react';

import ANIMATION from '../constants';
import ModalContext from '../ModalProvider/ModalContext';

const useModal = () => {
  const {
    isModalOpen,
    animation,
    delayMsTime,
    openModal,
    closeModal,
    changeAnimationMode,
    changeDelayMsTime,
  } = useContext(ModalContext);

  const closeModalWithTime = () => {
    changeAnimationMode(ANIMATION.disappear);
    setTimeout(() => {
      closeModal();
      changeAnimationMode(ANIMATION.appear);
    }, delayMsTime);
  };

  return {
    isModalOpen,
    animation,
    delayMsTime,
    openModal,
    closeModal: closeModalWithTime,
    changeDelayMsTime,
  };
};

export default useModal;
