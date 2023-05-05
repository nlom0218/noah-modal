declare const useModal: () => {
    openModal: (name: string) => void;
    closeModal: (name: string) => void;
    Modal: import("../types").ModalComponentReturnType | null;
};
export default useModal;
