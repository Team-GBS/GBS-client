import { BookIcon } from 'assets/svg';
import * as S from './style';
import BookModal from 'components/Main/organisms/BookModal';
import { useRecoilState } from 'recoil';
import { ShowModalAtom } from '../state';
import { useCallback } from 'react';

const BookBox = ({ backgroundColor, height, width }: any) => {
  const [showModal, setShowModal] = useRecoilState(ShowModalAtom);
  const BookClick = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  return (
    <>
      <S.BookBox
        onClick={BookClick}
        backgroundColor={backgroundColor}
        height={height}
        width={width}
        pointerEvents={showModal ? 'none' : 'auto'}
      >
        <BookIcon />
      </S.BookBox>
    </>
  );
};

export default BookBox;
