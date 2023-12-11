import { Field } from 'formik';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MainTitle = styled.h1`
  color: ${p => p.theme.theme.colors.lightest};
  width: 100%-12px;
  padding: 12px;
  background-color: ${p => p.theme.theme.colors.dark};
`;

export const Label = styled.label`
  font-size: 24px;
  display: block;
`;
export const Input = styled(Field)`
  outline: transparent;
  width: 80%;
  font-size: 18px;
  padding: 8px 12px;
  margin: 18px 0;
  transition: outline 200ms linear;
  &:focus-visible {
    outline: ${p => p.theme.theme.colors.medium} 4px solid;
    transition: outline 200ms linear;
  }
`;
export const CheckBox = styled(Field)``;

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
export const OptionLink = styled(Link)`
  text-decoration: none;
  background-color: ${p => p.theme.theme.colors.light};
  padding: 18px;
  color: ${p => p.theme.theme.colors.lightest};
  font-size: 26px;
  display: flex;
  align-items: center;
  gap: 18px;

  margin: auto;
  transition: background-color 200ms linear;
  &:hover {
    background-color: ${p => p.theme.theme.colors.medium};
    transition: background-color 200ms linear;
  }
`;
