import Header from 'components/Common/organisms/Header';
import * as S from './style';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NewBook from 'components/Main/organisms/NewBook';
import BookList from '../organisms/BookList';
import BookModal from '../organisms/BookModal';

const Main = () => {

  return (
    <>
      <BookModal />
      <MainTemplates>
        <Header />
        <NewBook />
        <BookList />
      </MainTemplates>
    </>
  );
};

export default Main;
