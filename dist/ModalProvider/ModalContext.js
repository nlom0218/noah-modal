/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';
import ANIMATION from '../constants';
var ModalContext = createContext({
    isModalOpen: false,
    animation: ANIMATION.appear,
    delayMsTime: 0,
    openModal: function () { },
    closeModal: function () { },
    changeDelayMsTime: function (time) { },
    changeAnimationMode: function (mode) { },
});
export default ModalContext;
