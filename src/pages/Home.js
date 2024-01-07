import { UserInfo } from 'components/UserInfo/UserInfo';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';
import { useAuth } from 'hooks/useAuth';
import {
  OptionLink,
  OptionLinkAdmin,
} from 'components/DefoultStyledComponetns/DefoultStyledComponetns';

export const Home = () => {
  const { isAdmin } = useAuth();
  return (
    <div>
      <HomeLogoLink />
      <UserInfo />
      {isAdmin ? (
        <OptionLinkAdmin to="/user-requests">
          Заявки користувачів
        </OptionLinkAdmin>
      ) : null}
      {isAdmin ? (
        <OptionLinkAdmin to="/all-users">
          Переглянути користувачів
        </OptionLinkAdmin>
      ) : null}
      {isAdmin ? (
        <OptionLinkAdmin to="/add-department">Додати підрозділ</OptionLinkAdmin>
      ) : null}
      {isAdmin ? (
        <OptionLinkAdmin to="/add-position">Додати посаду</OptionLinkAdmin>
      ) : null}
      {isAdmin ? (
        <OptionLinkAdmin to="/add-area">Додати дільницю</OptionLinkAdmin>
      ) : null}
      <OptionLink to="/crash">Реєстр крихких предметів</OptionLink>
      <OptionLink to="/crash/table">
        Таблиця записів крихких предметів
      </OptionLink>
    </div>
  );
};
