import { AddDepartmentForm } from 'components/AddDepartmentForm/AddDepartmentForm';
import { DepartmentsList } from 'components/AddDepartmentForm/DepartmentsList';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';
import { UserInfo } from 'components/UserInfo/UserInfo';

export const AddDepartment = () => {
  return (
    <div>
      <HomeLogoLink />
      <UserInfo />
      <AddDepartmentForm />
      <DepartmentsList />
    </div>
  );
};
