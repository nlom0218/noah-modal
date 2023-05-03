declare const useModal: () => {
    isModalOpen: boolean;
    animation: "appear" | "disappear";
    delayMsTime: number;
    openModal: () => void;
    closeModal: () => void;
    changeDelayMsTime: (time: number) => void;
};
export default useModal;
