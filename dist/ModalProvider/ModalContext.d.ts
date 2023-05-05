/// <reference types="react" />
import { ModalComponentReturnType, ModalType } from '../types';
declare const ModalContext: import("react").Context<{
    modals: ModalType[];
    currentModal: ModalComponentReturnType | null;
    openModal: (name: string) => void;
    closeModal: (name: string) => void;
}>;
export default ModalContext;
