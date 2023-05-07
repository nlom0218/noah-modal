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
import Modal from '../Modal';
function ModalProvider(_a) {
    var children = _a.children, modals = _a.modals;
    var _b = useState(null), currentModal = _b[0], setCurrentModal = _b[1];
    var closeModal = function (name) {
        var modal = findModal(name);
        if (!modal)
            return generateModalNoExistError(name);
        var delayMsTime = modal.delayMsTime;
        setCurrentModal(makeModalComponent(modal, name, ANIMATION.disappear));
        setTimeout(function () {
            setCurrentModal(null);
        }, delayMsTime);
    };
    var openModal = function (name) {
        var modal = findModal(name);
        if (!modal)
            return generateModalNoExistError(name);
        setCurrentModal(makeModalComponent(modal, name, ANIMATION.appear));
    };
    var findModal = function (name) {
        return modals.find(function (_modal) { return _modal.name === name; });
    };
    var generateModalNoExistError = function (name) {
        throw Error("".concat(name, "\uC5D0 \uD574\uB2F9\uD558\uB294 \uBAA8\uB2EC\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));
    };
    var makeModalComponent = function (modal, name, animation) {
        var title = modal.title, isAbleBackdropClick = modal.isAbleBackdropClick, delayMsTime = modal.delayMsTime, component = modal.component;
        return function () {
            return function () { return (_jsx(Modal, { title: title, name: name, isAbleBackdropClick: isAbleBackdropClick || true, delayMsTime: delayMsTime || 0, animation: animation, closeModal: closeModal, children: component })); };
        };
    };
    var initValue = {
        modals: modals,
        currentModal: currentModal,
        openModal: openModal,
        closeModal: closeModal,
    };
    return (_jsx(ModalContext.Provider, __assign({ value: initValue }, { children: children })));
}
export default ModalProvider;
