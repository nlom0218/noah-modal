import { ReactNode } from 'react';
import { AnimationTypes } from '../types';

export type ModalProps = {
  title: string;
  name: string;
  delayMsTime: number;
  isAbleBackdropClick: boolean;
  children: ReactNode;
  animation: AnimationTypes;
  closeModal: (name: string) => void;
};

export type AnimationType = {
  animation: AnimationTypes;
  delayMsTime: number;
};

export type BackdropStyleProps = {
  isAbleBackdropClick: boolean;
};
