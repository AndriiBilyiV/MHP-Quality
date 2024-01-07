import { AddPositionForm } from 'components/AddPositionForm/AddPositionForm';
import { PositionsList } from 'components/AddPositionForm/PositionsList';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';
import { UserInfo } from 'components/UserInfo/UserInfo';

export const AddPosition = () => {
  return (
    <div>
      <HomeLogoLink />
      <UserInfo />
      <AddPositionForm />
      <PositionsList />
    </div>
  );
};
