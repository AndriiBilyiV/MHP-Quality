import { useAuth } from 'hooks/useAuth';
import { styled } from 'styled-components';
import { FaRegCircleUser, FaArrowRightFromBracket } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/operations';

const Wrapper = styled.div`
  color: ${p => p.theme.theme.colors.white};
  background-color: ${p => p.theme.theme.colors.dark};
  padding: 12px;
  margin: 18px 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;
const EmptyButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${p => p.theme.theme.colors.white};
  cursor: pointer;
`;
const LogOut = () => {
  const dispatch = useDispatch();
  return (
    <EmptyButton onClick={() => dispatch(signOut())}>
      <FaArrowRightFromBracket size={24} />
    </EmptyButton>
  );
};

export const UserInfo = () => {
  const { userName, userPositionDisplay, isAdmin } = useAuth();
  return (
    <Wrapper>
      <FaRegCircleUser size={28} />
      <strong>{userName}</strong> {userPositionDisplay}{' '}
      {isAdmin ? '(Адміністратор)' : null}
      <LogOut />
    </Wrapper>
  );
};
