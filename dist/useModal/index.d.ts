declare const useModal: ({ disappearDelayMsTime, }: {
    disappearDelayMsTime?: number | undefined;
}) => {
    isModalOpen: boolean;
    animation: "appear" | "disappear";
    openModal: () => void;
    closeModal: () => void;
};
export default useModal;
