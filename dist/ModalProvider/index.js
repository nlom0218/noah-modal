var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import ANIMATION from '../constants';
import ModalContext from './ModalContext';
function ModalProvider(_a) {
    var children = _a.children;
    var _b = useState(false), isModalOpen = _b[0], setIsModalOpen = _b[1];
    var _c = useState(ANIMATION.appear), animation = _c[0], setAnimation = _c[1];
    var _d = useState(0), delayMsTime = _d[0], setDelayMsTime = _d[1];
    var openModal = function () { return setIsModalOpen(true); };
    var closeModal = function () { return setIsModalOpen(false); };
    var changeAnimationMode = function (mode) {
        setAnimation(mode);
    };
    var changeDelayMsTime = function (time) { return setDelayMsTime(time); };
    var initValue = {
        isModalOpen: isModalOpen,
        animation: animation,
        delayMsTime: delayMsTime,
        openModal: openModal,
        closeModal: closeModal,
        changeDelayMsTime: changeDelayMsTime,
        changeAnimationMode: changeAnimationMode,
    };
    return (_jsx(ModalContext.Provider, __assign({ value: initValue }, { children: children })));
}
export default ModalProvider;
