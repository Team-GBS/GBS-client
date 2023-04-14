import ApplicationTable from 'components/Application/templates/ApplicationTable';
import { ApplicationTemplate } from 'components/Application/templates/ApplicationTemplate/style';
import Header from 'components/Common/Header';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';

const ApplicationPage = () => {
  return (
    <MainTemplates>
      <Header />
      <ApplicationTemplate>
        <ApplicationTable />
      </ApplicationTemplate>
    </MainTemplates>
  );
};

export default ApplicationPage;
