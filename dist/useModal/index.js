import { useContext } from 'react';
import ANIMATION from '../constants';
import ModalContext from '../ModalProvider/ModalContext';
var useModal = function () {
    var _a = useContext(ModalContext), isModalOpen = _a.isModalOpen, animation = _a.animation, delayMsTime = _a.delayMsTime, openModal = _a.openModal, closeModal = _a.closeModal, changeAnimationMode = _a.changeAnimationMode, changeDelayMsTime = _a.changeDelayMsTime;
    var closeModalWithTime = function () {
        changeAnimationMode(ANIMATION.disappear);
        setTimeout(function () {
            closeModal();
            changeAnimationMode(ANIMATION.appear);
        }, delayMsTime);
    };
    return {
        isModalOpen: isModalOpen,
        animation: animation,
        delayMsTime: delayMsTime,
        openModal: openModal,
        closeModal: closeModalWithTime,
        changeDelayMsTime: changeDelayMsTime,
    };
};
export default useModal;
