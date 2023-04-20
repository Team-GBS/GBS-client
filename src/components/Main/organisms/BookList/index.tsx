import * as S from './style';
import CommoneBookList from 'components/Common/molecules/BookList';

const BookList = () => {
  return (
    <>
      <S.Wrap>
        <S.TitleText>도서 목록</S.TitleText>
        <S.Container>
          <CommoneBookList />
        </S.Container>
      </S.Wrap>
    </>
  );
};

export default BookList;
