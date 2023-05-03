import { PropsWithChildren, useState } from 'react';

import { AnimationTypes } from '../types';

import ANIMATION from '../constants';

import ModalContext from './ModalContext';

function ModalProvider({ children }: PropsWithChildren) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animation, setAnimation] = useState<AnimationTypes>(ANIMATION.appear);
  const [delayMsTime, setDelayMsTime] = useState(0);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const changeAnimationMode = (mode: AnimationTypes) => {
    setAnimation(mode);
  };

  const changeDelayMsTime = (time: number) => setDelayMsTime(time);

  const initValue = {
    isModalOpen,
    animation,
    delayMsTime,
    openModal,
    closeModal,
    changeDelayMsTime,
    changeAnimationMode,
  };

  return (
    <ModalContext.Provider value={initValue}>{children}</ModalContext.Provider>
  );
}

export default ModalProvider;