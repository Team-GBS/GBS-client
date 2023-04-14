import Header from 'components/Common/Header';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import SearchTable from 'components/Search/templates/SearchTable';
import { SearchTemplate } from 'components/Search/templates/SearchTemplate/style';

const SearchPage = () => {
  return (
    <MainTemplates>
      <Header />
      <SearchTemplate>
        <SearchTable />
      </SearchTemplate>
    </MainTemplates>
  );
};

export default SearchPage;
