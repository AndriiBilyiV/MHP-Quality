import { UserInfo } from 'components/UserInfo/UserInfo';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';
import { useAuth } from 'hooks/useAuth';
import { OptionLink } from 'components/DefoultStyledComponetns/DefoultStyledComponetns';

export const Home = () => {
  const { isAdmin } = useAuth();
  return (
    <div>
      <HomeLogoLink />
      <UserInfo />
      {isAdmin ? (
        <OptionLink to="/add-department">Заявки користувачів</OptionLink>
      ) : null}
      {isAdmin ? (
        <OptionLink to="/all-users">Переглянути користувачів</OptionLink>
      ) : null}
      {isAdmin ? (
        <OptionLink to="/add-department">Додати підрозділ</OptionLink>
      ) : null}
      {isAdmin ? (
        <OptionLink to="/add-position">Додати посаду</OptionLink>
      ) : null}
    </div>
  );
};
