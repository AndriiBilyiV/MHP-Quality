import { AproveList } from 'components/Aprove/AproveList';
import { MainTitle } from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';
import { UserInfo } from 'components/UserInfo/UserInfo';

export const Aprove = () => {
  return (
    <div>
      <HomeLogoLink />
      <UserInfo />
      <MainTitle>Заявки користувачів</MainTitle>
      <AproveList />
    </div>
  );
};
