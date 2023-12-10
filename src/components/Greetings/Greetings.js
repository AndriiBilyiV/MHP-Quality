import { useAuth } from 'hooks/useAuth';

export const Greetings = () => {
  const { userName } = useAuth();
  const { userType } = useAuth();
  return (
    <p>
      {userName} {userType}
    </p>
  );
};
