var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { keyframes } from 'styled-components';
export var ModalLayoutAppear = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n    background-color: transparent;\n  }\n  to {\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    background-color: transparent;\n  }\n  to {\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n"])));
export var ModalLayoutDisAppear = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n  to {\n    opacity: 0;\n    background-color: transparent;\n  }\n"], ["\n  0% {\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n  to {\n    opacity: 0;\n    background-color: transparent;\n  }\n"])));
export var ModalContentsAppear = keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n"])));
export var ModalContentsDisAppear = keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translateZ(0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
