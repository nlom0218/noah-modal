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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as S from './style';
function Modal(_a) {
    var title = _a.title, _b = _a.delayMsTime, delayMsTime = _b === void 0 ? 0 : _b, _c = _a.isAbleBackdropClick, isAbleBackdropClick = _c === void 0 ? true : _c, children = _a.children, animation = _a.animation, closeModal = _a.closeModal;
    var handleCloseModal = function () { return closeModal(); };
    var handleClickBackdrop = function () {
        if (!isAbleBackdropClick)
            return;
        handleCloseModal();
    };
    return (_jsxs(S.ModalLayout, __assign({ animation: animation, delayMsTime: delayMsTime }, { children: [_jsx(S.Backdrop, { onClick: handleClickBackdrop, isAbleBackdropClick: isAbleBackdropClick }), _jsxs(S.ModalContents, __assign({ animation: animation, delayMsTime: delayMsTime }, { children: [_jsxs(S.TopSheet, { children: [_jsx(S.Title, { children: title }), _jsx(S.CloseButton, __assign({ onClick: handleCloseModal }, { children: "X" }))] }), children] }))] })));
}
export default Modal;
