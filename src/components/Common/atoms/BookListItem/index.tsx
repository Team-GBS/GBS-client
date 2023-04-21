import * as S from './style';
import { BookItemProps, BookItemStyleProps } from 'types/Book';
import { getBookColor } from 'Utils/Libs/getBookColor';
import { NoneBookIcon } from 'assets/svg';
import { useRecoilState } from 'recoil';
import { ShowModalAtom } from 'recoilAtoms/recoilAtomContainer';

const BookListItem = ({ title, bookType, cover, state, translateX }: BookItemProps) => {
  const [showModal, setShowModal] = useRecoilState(ShowModalAtom);

  return (
    <S.ItemWrapper onClick={() => setShowModal(!showModal)}>
      <S.CoverWrapper bookType={getBookColor[bookType]} state={state} translateX={translateX}>
        {cover ? <></> : <NoneBookIcon />}
      </S.CoverWrapper>
      <S.Title>{title}</S.Title>
    </S.ItemWrapper>
  );
};

export default BookListItem;
