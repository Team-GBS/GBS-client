import * as S from './style';
import { BookItemProps, BookItemStyleProps } from 'types/Book';
import { getBookColor } from 'Utils/Libs/getBookColor';
import { NoneBookIcon } from 'assets/svg';
import { useRecoilState } from 'recoil';
import {
  ShowModalAtom,
  ThisBookColorAtom,
} from 'recoilAtoms/recoilAtomContainer';
import { useEffect } from 'react';

const BookListItem = ({
  title,
  bookType,
  cover,
  state,
  translateX,
}: BookItemProps) => {
  const [showModal, setShowModal] = useRecoilState(ShowModalAtom);
  const [thisBookColor, setThisBookColor] = useRecoilState(ThisBookColorAtom);

  return (
    <S.ItemWrapper
      onClick={() => {
        setShowModal(!showModal);
        setThisBookColor(bookType);
      }}
      translateX={translateX}
      bookType=""
    >
      <S.CoverWrapper bookType={getBookColor[bookType]} state={state}>
        {cover ? <></> : <NoneBookIcon />}
      </S.CoverWrapper>
      <S.Title>{title}</S.Title>
    </S.ItemWrapper>
  );
};

export default BookListItem;
