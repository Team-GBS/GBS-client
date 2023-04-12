import { ProfileModalProps } from 'types/Modal';
import * as S from './style';

const ProfileModal = ({ isClick, setState }: ProfileModalProps) => {
  return (
    <>
      <S.ProfileOverlay isClick={isClick} onClick={() => setState(!isClick)} />
      <S.ProfileModalWrapper>
        <S.ModalMenu>프로필 수정</S.ModalMenu>
        <S.ModalMenu>로그아웃</S.ModalMenu>
      </S.ProfileModalWrapper>
    </>
  );
};

export default ProfileModal;
