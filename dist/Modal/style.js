var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { MiddleModalContentsAppear, MiddleModalContentsDisAppear, ModalContentsAppear, ModalContentsDisAppear, ModalLayoutAppear, ModalLayoutDisAppear, } from '../animations';
import ANIMATION from '../constants';
export var ModalLayout = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  border: 0;\n  left: 0;\n  right: 0;\n  min-height: 100vh;\n  margin: 0 auto;\n  animation: ", "\n    ", " forwards;\n"], ["\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  border: 0;\n  left: 0;\n  right: 0;\n  min-height: 100vh;\n  margin: 0 auto;\n  animation: ", "\n    ", " forwards;\n"])), function (props) {
    return props.animation === ANIMATION.appear
        ? ModalLayoutAppear
        : ModalLayoutDisAppear;
}, function (props) { return "".concat(props.delayMsTime / 1000, "s"); });
export var Backdrop = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100vh;\n  cursor: ", ";\n"], ["\n  height: 100vh;\n  cursor: ", ";\n"])), function (props) { return props.isAbleBackdropClick && 'pointer'; });
export var ModalContents = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  z-index: 10;\n  overflow: auto;\n  max-height: ", ";\n  position: absolute;\n  bottom: ", ";\n  left: 0;\n  right: 0;\n  padding: 20px;\n  background-color: #ffffff;\n  border-radius: ", ";\n  animation: ", "\n    ", " forwards;\n\n  ", "\n"], ["\n  z-index: 10;\n  overflow: auto;\n  max-height: ", ";\n  position: absolute;\n  bottom: ", ";\n  left: 0;\n  right: 0;\n  padding: 20px;\n  background-color: #ffffff;\n  border-radius: ", ";\n  animation: ", "\n    ", " forwards;\n\n  ", "\n"])), function (props) { return (props.position === 'bottom' ? '90%' : '80%'); }, function (props) { return props.position === 'bottom' && '0'; }, function (props) {
    return props.position === 'bottom' ? '5px 5px 0px 0px' : '4px';
}, function (props) {
    return props.position === 'middle'
        ? props.animation === ANIMATION.appear
            ? MiddleModalContentsAppear
            : MiddleModalContentsDisAppear
        : props.animation === ANIMATION.appear
            ? ModalContentsAppear
            : ModalContentsDisAppear;
}, function (props) { return "".concat(props.delayMsTime / 1000, "s"); }, function (props) { return props.position === 'middle' && flexCSS; });
var flexCSS = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  min-width: 500px;\n  max-width: 500px;\n  margin: 0 auto;\n  top: 5%;\n\n  @media only screen and (max-width: 768px) {\n    // \uBAA8\uBC14\uC77C\n    min-width: 90%;\n    max-width: 90%;\n  }\n"], ["\n  min-width: 500px;\n  max-width: 500px;\n  margin: 0 auto;\n  top: 5%;\n\n  @media only screen and (max-width: 768px) {\n    // \uBAA8\uBC14\uC77C\n    min-width: 90%;\n    max-width: 90%;\n  }\n"])));
export var TopSheet = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
export var Title = styled.h3(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 18px;\n  font-weight: 500;\n"], ["\n  font-size: 18px;\n  font-weight: 500;\n"])));
export var CloseButton = styled.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-size: 18px;\n  cursor: pointer;\n  border: none;\n  background-color: #ffffff;\n"], ["\n  font-size: 18px;\n  cursor: pointer;\n  border: none;\n  background-color: #ffffff;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
