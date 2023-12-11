import { useAuth } from 'hooks/useAuth';
import { styled } from 'styled-components';
import { FaRegCircleUser } from 'react-icons/fa6';

const Wrapper = styled.div`
  color: ${p => p.theme.theme.colors.white};
  background-color: ${p => p.theme.theme.colors.dark};
  padding: 12px;
  margin: 18px 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserInfo = () => {
  const { userName, userPositionDisplay, isAdmin } = useAuth();
  return (
    <Wrapper>
      <FaRegCircleUser size={28} />
      <strong>{userName}</strong> {userPositionDisplay}{' '}
      {isAdmin ? '(Адміністратор)' : null}
    </Wrapper>
  );
};
