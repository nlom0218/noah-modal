var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { ModalContentsAppear, ModalContentsDisAppear, ModalLayoutAppear, ModalLayoutDisAppear, } from '../animations';
import ANIMATION from '../constants';
export var ModalLayout = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  border: 0;\n  left: 0;\n  right: 0;\n  min-height: 100vh;\n  margin: 0 auto;\n  animation: ", "\n    ", " forwards;\n"], ["\n  position: fixed;\n  top: 0;\n  border: 0;\n  left: 0;\n  right: 0;\n  min-height: 100vh;\n  margin: 0 auto;\n  animation: ", "\n    ", " forwards;\n"])), function (props) {
    return props.animation === ANIMATION.appear
        ? ModalLayoutAppear
        : ModalLayoutDisAppear;
}, function (props) { return "".concat(props.delayMsTime / 1000, "s"); });
export var Backdrop = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100vh;\n  cursor: ", ";\n"], ["\n  height: 100vh;\n  cursor: ", ";\n"])), function (props) { return props.isAbleBackdropClick && 'pointer'; });
export var ModalContents = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  overflow: auto;\n  max-height: 90%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 20px;\n  background-color: #ffffff;\n  border-radius: 5px 5px 0px 0px;\n  animation: ", "\n    ", " forwards;\n"], ["\n  overflow: auto;\n  max-height: 90%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 20px;\n  background-color: #ffffff;\n  border-radius: 5px 5px 0px 0px;\n  animation: ", "\n    ", " forwards;\n"])), function (props) {
    return props.animation === ANIMATION.appear
        ? ModalContentsAppear
        : ModalContentsDisAppear;
}, function (props) { return "".concat(props.delayMsTime / 1000, "s"); });
export var TopSheet = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
export var Title = styled.h3(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 18px;\n  font-weight: 500;\n"], ["\n  font-size: 18px;\n  font-weight: 500;\n"])));
export var CloseButton = styled.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 18px;\n  cursor: pointer;\n"], ["\n  font-size: 18px;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
