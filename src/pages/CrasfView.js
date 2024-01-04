import { CrashTable } from 'components/Crash/CrashForm/CrashTable';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';
import { UserInfo } from 'components/UserInfo/UserInfo';

export const CrashView = () => {
  return (
    <div>
      <HomeLogoLink />
      <UserInfo />
      <CrashTable />
    </div>
  );
};
