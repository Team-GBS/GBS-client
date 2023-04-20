import Header from 'components/Common/organisms/Header';
import * as S from './style';
import NewBook from 'components/Main/organisms/NewBook';
import BookModal from '../organisms/BookModal';
import BookList from '../organisms/BookList';

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
