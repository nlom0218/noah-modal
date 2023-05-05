import { PropsWithChildren, useState } from 'react';

import { AnimationTypes, ModalComponentReturnType, ModalType } from '../types';

import ANIMATION from '../constants';

import ModalContext from './ModalContext';
import Modal from '../Modal';

function ModalProvider({
  children,
  modals,
}: PropsWithChildren<{ modals: ModalType[] }>) {
  const [currentModal, setCurrentModal] =
    useState<ModalComponentReturnType | null>(null);
  const [animation, setAnimation] = useState<AnimationTypes>(ANIMATION.appear);

  const changeAnimationMode = (mode: AnimationTypes) => {
    setAnimation(mode);
  };

  const closeModal = (name: string) => {
    const modal = modals.find((_modal) => _modal.name === name);
    if (!modal) throw Error(`${name}에 해당하는 모달이 없습니다.`);

    const { delayMsTime } = modal;

    changeAnimationMode(ANIMATION.disappear);
    setTimeout(() => {
      setCurrentModal(null);
      changeAnimationMode(ANIMATION.appear);
    }, delayMsTime);
  };

  const openModal = (name: string) => {
    const modal = modals.find((_modal) => _modal.name === name);
    if (!modal) throw Error(`${name}에 해당하는 모달이 없습니다.`);

    const { title, isAbleBackdropClick, delayMsTime, component } = modal;

    const newModal = () => {
      return () => (
        <Modal
          title={title}
          name={name}
          isAbleBackdropClick={isAbleBackdropClick || true}
          delayMsTime={delayMsTime || 0}
          animation={animation}
          closeModal={closeModal}
          children={component}
        />
      );
    };

    setCurrentModal(newModal);
  };

  const initValue = {
    modals,
    currentModal,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={initValue}>{children}</ModalContext.Provider>
  );
}

export default ModalProvider;
