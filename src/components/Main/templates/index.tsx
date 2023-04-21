import Header from 'components/Common/organisms/Header';
import * as S from './style';
import NewBook from 'components/Main/organisms/NewBook';
import BookModal from '../organisms/BookModal';
import BookList from 'components/Common/molecules/BookList';

const Main = () => {
  return (
    <>
      <BookModal />
      <S.HomeTemplate>
        <Header />
        <NewBook />
        <S.BooklistTitle>도서목록</S.BooklistTitle>
        <BookList />
      </S.HomeTemplate>
    </>
  );
};

export default Main;
