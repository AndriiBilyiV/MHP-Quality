import { AddPositionForm } from 'components/AddPositionForm/AddPositionForm';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';
import { UserInfo } from 'components/UserInfo/UserInfo';

export const AddPosition = () => {
  return (
    <div>
      <HomeLogoLink />
      <UserInfo />
      <AddPositionForm />
    </div>
  );
};
