import { createContext } from 'react';
var ModalContext = createContext({
    modals: [],
    currentModal: null,
    openModal: function (name) { },
    closeModal: function (name) { },
});
export default ModalContext;
