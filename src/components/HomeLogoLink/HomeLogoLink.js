import { LogoMHPHeader } from 'components/Logo/MHP';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const LinkStyled = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 18px;
`;
const LinkSpan = styled.span`
  font-size: 24px;
  font-weight: 900;
  color: ${p => p.theme.theme.colors.dark};
`;

export const HomeLogoLink = () => {
  const { company } = useAuth();
  return (
    <LinkStyled to="/home">
      <LogoMHPHeader />
      <LinkSpan>{company} Quality</LinkSpan>
    </LinkStyled>
  );
};
