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

  const closeModal = (name: string) => {
    const modal = findModal(name);
    if (!modal) return generateModalNoExistError(name);

    const { delayMsTime } = modal;

    setCurrentModal(makeModalComponent(modal, name, ANIMATION.disappear));

    setTimeout(() => {
      setCurrentModal(null);
    }, delayMsTime);
  };

  const openModal = (name: string) => {
    const modal = findModal(name);
    if (!modal) return generateModalNoExistError(name);

    setCurrentModal(makeModalComponent(modal, name, ANIMATION.appear));
  };

  const findModal = (name: string) =>
    modals.find((_modal) => _modal.name === name);

  const generateModalNoExistError = (name: string) => {
    throw Error(`${name}에 해당하는 모달이 없습니다.`);
  };

  const makeModalComponent = (
    modal: ModalType,
    name: string,
    animation: AnimationTypes
  ) => {
    const { title, isAbleBackdropClick, delayMsTime, component } = modal;

    return () => {
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
