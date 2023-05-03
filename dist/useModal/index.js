import { useEffect, useState } from 'react';
import ANIMATION from '../constants';
var useModal = function (_a) {
    var _b = _a.disappearDelayMsTime, disappearDelayMsTime = _b === void 0 ? 0 : _b;
    var _c = useState(false), isModalOpen = _c[0], setIsModalOpen = _c[1];
    var _d = useState(ANIMATION.appear), animation = _d[0], setAnimation = _d[1];
    var _e = useState(0), delayMsTime = _e[0], setDelayMsTime = _e[1];
    var openModal = function () { return setIsModalOpen(true); };
    var closeModal = function () { return setIsModalOpen(false); };
    var changeAnimationMode = function (mode) {
        setAnimation(mode);
    };
    var closeModalWithTime = function () {
        changeAnimationMode(ANIMATION.disappear);
        setTimeout(function () {
            closeModal();
            changeAnimationMode(ANIMATION.appear);
        }, delayMsTime);
    };
    useEffect(function () {
        if (disappearDelayMsTime)
            setDelayMsTime(disappearDelayMsTime);
    }, []);
    return {
        isModalOpen: isModalOpen,
        animation: animation,
        openModal: openModal,
        closeModal: closeModalWithTime,
    };
};
export default useModal;
