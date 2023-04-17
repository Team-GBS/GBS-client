import BookList from 'components/Common/molecules/BookList';
import * as S from './style';

const SearchTable = () => {
  return (
    <S.TableWrapper>
      <S.Header>{'00'}에 대한 검색 결과</S.Header>
      <BookList />
    </S.TableWrapper>
  );
};

export default SearchTable;
