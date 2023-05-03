/// <reference types="react" />
import { AnimationTypes } from '../types';
declare const ModalContext: import("react").Context<{
    isModalOpen: boolean;
    animation: "appear" | "disappear";
    delayMsTime: number;
    openModal: () => void;
    closeModal: () => void;
    changeDelayMsTime: (time: number) => void;
    changeAnimationMode: (mode: AnimationTypes) => void;
}>;
export default ModalContext;
