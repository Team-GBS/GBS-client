import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import ProfileTable from 'components/Profile/organisms/ProfileTable';
import { ProfileTemplates } from 'components/Profile/templates/ProfileTemplate/style';

const ProfilePage = () => {
  return (
    <MainTemplates>
      <ProfileTemplates>
        {/* Header */}
        <ProfileTable />
      </ProfileTemplates>
    </MainTemplates>
  );
};

export default ProfilePage;
