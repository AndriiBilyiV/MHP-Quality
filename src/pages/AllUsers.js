import { AllUsersTable } from 'components/AllUsersTable/AllUsersTable';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';
import { UserInfo } from 'components/UserInfo/UserInfo';

export const AllUsers = () => {
  return (
    <div>
      <HomeLogoLink />
      <UserInfo />
      <AllUsersTable />
    </div>
  );
};
