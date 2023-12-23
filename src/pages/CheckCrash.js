import { AddPointForm } from 'components/Crash/AddPointForm/AddPointForm';
import { CrashForm } from 'components/Crash/CrashForm/CrashForm';
import { MainTitle } from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';
import { UserInfo } from 'components/UserInfo/UserInfo';

export const CheckCrash = () => {
  return (
    <div>
      <HomeLogoLink />
      <UserInfo />
      <MainTitle>Реєстр крихких предметів</MainTitle>
      <CrashForm />
      <AddPointForm />
    </div>
  );
};
