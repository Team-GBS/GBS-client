import * as S from './style';
import { BookItemProps } from 'types/Book';
import { getBookColor } from 'Utils/Libs/getBookColor';
import { NoneBookIcon } from 'assets/svg';
import { useRecoilState } from 'recoil';
import { ShowModalAtom } from 'components/Main/atoms/state';

const BookListItem = ({ title, bookType, cover, width, height, translateX }: BookItemProps) => {
  const [showModal, setShowModal] = useRecoilState(ShowModalAtom);
  const BookClick = () => {
    setShowModal(!showModal);
  };
  return (
    <S.ItemWrapper onClick={BookClick}>
      <S.CoverWrapper bookType={getBookColor[bookType]} width={width} height={height} translateX={translateX}>
        {cover ? <></> : <NoneBookIcon />}
      </S.CoverWrapper>
      <S.Title>{title}</S.Title>
    </S.ItemWrapper>
  );
};

export default BookListItem;
