declare const useModal: () => {
    openModal: (name: string) => void;
    closeModal: (name: string) => void;
    Modal: import("../types").ModalComponentReturnType | null;
    isModalOpen: boolean;
};
export default useModal;
