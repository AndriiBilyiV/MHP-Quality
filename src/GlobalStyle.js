import { createGlobalStyle } from 'styled-components';
import { theme } from 'components/theme';

export const GlobalStyle = createGlobalStyle` 
body {
  user-select: none;
  background-color: ${theme.colors.light};
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Montserrat Alternates', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
