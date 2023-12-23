import { AddAreaForm } from 'components/AddAreaForm/AddAreaForm';
import { AllAreasTable } from 'components/AllAreasTable/AllAreasTable';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';
import { UserInfo } from 'components/UserInfo/UserInfo';

export const AddArea = () => {
  return (
    <div>
      <HomeLogoLink />
      <UserInfo />
      <AddAreaForm />
      <AllAreasTable />
    </div>
  );
};
