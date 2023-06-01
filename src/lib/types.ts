import ANIMATION from './constants';

export type AnimationTypes = keyof typeof ANIMATION;

export type ModalType = {
  title: string;
  component: JSX.Element;
  name: string;
  isAbleBackdropClick?: boolean;
  delayMsTime?: number;
  position?: 'bottom' | 'middle';
};

export type ModalComponentReturnType = () => JSX.Element;
