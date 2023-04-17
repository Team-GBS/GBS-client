import { useRecoilState } from 'recoil';
import * as S from './style';
import { ShowModalAtom } from 'components/Main/atoms/state';
import { useEffect, useRef, useState } from 'react';
import BookBox from 'components/Main/atoms/BookBox';
import { LeftBookIcon, NoMark, RightBookIcon } from 'assets/svg';
import Mark from 'assets/svg/Mark';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookModal = () => {
  const [showModal, setShowModal] = useRecoilState(ShowModalAtom);
  const [bookMark, setBookMark] = useState<boolean>(false);
  const [canRent, setCanRent] = useState<boolean>(true);
  const outModal = useRef(null);
  const inModal = useRef(null);
  const [color, setColor] = useState({
    red: '#FFF5F5',
    yellow: '#FEFFF5',
    skyblue: '#F5FBFF',
    pink: '#FFF5FF',
  });

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = 'hidden')
      : document.body.style.removeProperty('overflow');
  }, [showModal]);

  const BookMarking = () => {
    setBookMark(!bookMark);
    if (!bookMark) {
      toast.success('북마크 되었습니다.', {
        hideProgressBar: true,
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <S.Wrap
        ref={outModal}
        onClick={(e) => {
          if (outModal.current === e.target) setShowModal(!showModal);
        }}
        display={showModal ? 'flex' : 'none'}
      >
        <S.Modal ref={inModal}>
          <BookBox backgroundColor={color.skyblue} width="50rem" />
          <S.BookInfo>
            <S.BookExplain>
              <S.BookTitle>[과학] 세상의 모든 과학</S.BookTitle>
              <S.BookMaker>Chun-ho-Yi</S.BookMaker>
              <S.BookSummary>
                150여개 그림으로 펼쳐낸 가장 우아한 '빅 히스토리' 인기 팟캐스트
                과빛밤 지기의 친절한 빅 히스토리 과학 여행서
              </S.BookSummary>
            </S.BookExplain>
            <S.BookBorrowWrap>
              <S.BookRemain>남은 권수 : 1</S.BookRemain>
              {canRent ? (
                <S.BookRent>대여하기</S.BookRent>
              ) : (
                <S.NoBookRent>대여중</S.NoBookRent>
              )}
            </S.BookBorrowWrap>
          </S.BookInfo>
          <S.BookMark top={bookMark ? '-10px' : '-40px'} onClick={BookMarking}>
            {bookMark ? <Mark /> : <NoMark />}
          </S.BookMark>
        </S.Modal>
        <S.PrevBook>
          <LeftBookIcon />
        </S.PrevBook>
        <S.NextBook>
          <RightBookIcon />
        </S.NextBook>
      </S.Wrap>
    </>
  );
};

export default BookModal;
