import { createContext } from 'react';

import { ModalComponentReturnType, ModalType } from '../types';

const ModalContext = createContext({
  modals: [] as ModalType[],
  currentModal: null as ModalComponentReturnType | null,
  openModal: (name: string) => {},
  closeModal: (name: string) => {},
});

export default ModalContext;
