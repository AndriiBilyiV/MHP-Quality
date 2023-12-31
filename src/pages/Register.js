import { Article } from 'components/Article/Article.styled';
import {
  MainTitle,
  Button,
} from 'components/DefoultStyledComponetns/DefoultStyledComponetns';
import { LogoGoogle } from 'components/Logo/Google';
import { LogoMHPMain } from 'components/Logo/MHP';
import { useDispatch } from 'react-redux';
import { signIn } from '../redux/operations';

export const Register = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <LogoMHPMain />
      <MainTitle>Реєстрація</MainTitle>
      <Article>
        Вітаю в сервісі електронних протоколів департаменту якості, для початку
        роботи натисніть кнопку нижче та пройдіть аутентифікацію
      </Article>
      <Button onClick={() => dispatch(signIn())}>
        Увійти
        <LogoGoogle />
      </Button>
    </div>
  );
};
