import { Article } from 'components/Article/Article.styled';
import { MainTitle } from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';
import { IdentForm } from 'components/IdentForm/IdentForm';

export const FirstTime = () => {
  return (
    <div>
      <HomeLogoLink />
      <MainTitle>Ідентифікація</MainTitle>
      <Article>
        Вітаю, схоже, що ви вперше використовуєте цей сервіс. Пройдіть, будь
        ласка, ідентифікацію. Після заповнення форми адміністратор отримає Ваш
        запит. Ви зможе продовжити роботу коли Ваш запит буде схавлено.
      </Article>
      <IdentForm />
    </div>
  );
};
