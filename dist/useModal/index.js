import { useContext } from 'react';
import ModalContext from '../ModalProvider/ModalContext';
var useModal = function () {
    var _a = useContext(ModalContext), openModal = _a.openModal, closeModal = _a.closeModal, currentModal = _a.currentModal;
    var _openModal = function (name) { return openModal(name); };
    var _closeModal = function (name) { return closeModal(name); };
    return {
        openModal: _openModal,
        closeModal: _closeModal,
        Modal: currentModal,
    };
};
export default useModal;
