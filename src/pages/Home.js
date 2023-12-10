import { Greetings } from 'components/Greetings/Greetings';
import { HomeLogoLink } from 'components/HomeLogoLink/HomeLogoLink';

export const Home = () => {
  return (
    <div>
      <HomeLogoLink />
      <Greetings />
    </div>
  );
};
