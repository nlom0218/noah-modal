import { useEffect, useState } from 'react';

import ANIMATION from '../constants';
import { AnimationTypes } from '../types';

const useModal = ({
  disappearDelayMsTime = 0,
}: {
  disappearDelayMsTime?: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animation, setAnimation] = useState<AnimationTypes>(ANIMATION.appear);
  const [delayMsTime, setDelayMsTime] = useState(0);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const changeAnimationMode = (mode: AnimationTypes) => {
    setAnimation(mode);
  };

  const closeModalWithTime = () => {
    changeAnimationMode(ANIMATION.disappear);
    setTimeout(() => {
      closeModal();
      changeAnimationMode(ANIMATION.appear);
    }, delayMsTime);
  };

  useEffect(() => {
    if (disappearDelayMsTime) setDelayMsTime(disappearDelayMsTime);
  }, []);

  return {
    isModalOpen,
    animation,
    openModal,
    closeModal: closeModalWithTime,
  };
};

export default useModal;
