import { ReactNode } from 'react';
import { AnimationTypes } from '../types';
export type ModalProps = {
    title: string;
    delayMsTime?: number;
    isAbleBackdropClick?: boolean;
    children: ReactNode;
    animation: AnimationTypes;
    closeModal: () => void;
};
export type AnimationType = {
    animation: AnimationTypes;
    delayMsTime: number;
};
export type BackdropStyleProps = {
    isAbleBackdropClick: boolean;
};
