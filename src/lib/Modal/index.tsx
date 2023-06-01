import * as S from './style';
import { ModalProps } from './type';

function Modal({
  title,
  name,
  delayMsTime,
  isAbleBackdropClick,
  children,
  animation,
  closeModal,
  position = 'bottom',
}: ModalProps) {
  const handleCloseModal = () => closeModal(name);

  const handleClickBackdrop = () => {
    if (!isAbleBackdropClick) return;
    handleCloseModal();
  };

  return (
    <S.ModalLayout animation={animation} delayMsTime={delayMsTime}>
      <S.Backdrop
        onClick={handleClickBackdrop}
        isAbleBackdropClick={isAbleBackdropClick}
      />
      <S.ModalContents
        position={position}
        animation={animation}
        delayMsTime={delayMsTime}
      >
        <S.TopSheet>
          <S.Title>{title}</S.Title>
          <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>
        </S.TopSheet>
        {children}
      </S.ModalContents>
    </S.ModalLayout>
  );
}

export default Modal;
