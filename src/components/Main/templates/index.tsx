import Header from 'components/Common/organisms/Header';
import * as S from './style';
import NewBook from 'components/Main/organisms/NewBook';
import BookList from '../organisms/BookList';
import BookModal from '../organisms/BookModal';

const Main = () => {
  return (
    <>
      <BookModal />
      <S.HomeTemplate>
        <Header />
        <NewBook />
        <BookList />
      </S.HomeTemplate>
    </>
  );
};

export default Main;
