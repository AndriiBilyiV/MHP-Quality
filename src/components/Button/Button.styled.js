import { styled } from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: ${p => p.theme.theme.colors.dark};
  border-radius: 32px;
  padding: 18px;
  color: ${p => p.theme.theme.colors.lightest};
  font-size: 26px;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  margin: auto;
  transition: background-color 200ms linear;
  &:hover {
    background-color: ${p => p.theme.theme.colors.darkest};
    transition: background-color 200ms linear;
  }
`;
