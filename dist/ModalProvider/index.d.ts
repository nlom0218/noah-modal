import { PropsWithChildren } from 'react';
import { ModalType } from '../types';
declare function ModalProvider({ children, modals, }: PropsWithChildren<{
    modals: ModalType[];
}>): JSX.Element;
export default ModalProvider;
