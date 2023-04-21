import * as S from './style';
import BookListItem from 'components/Common/atoms/BookListItem';

const BookList = () => {
  return (
    <S.ListWrapper>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i, idx) => (
        <BookListItem title={'세상의 모든 과학'} bookType={'500'} width='190px' height='270px' />
      ))}
    </S.ListWrapper>
  );
};

export default BookList;
