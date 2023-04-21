import Header from 'components/Common/organisms/Header';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import ProfileTable from 'components/Profile/templates/ProfileTable';
import { ProfileTemplates } from 'components/Profile/templates/ProfileTemplate/style';

const ProfilePage = () => {
  return (
    <MainTemplates>
      <Header />
      <ProfileTemplates>
        <ProfileTable />
      </ProfileTemplates>
    </MainTemplates>
  );
};

export default ProfilePage;
