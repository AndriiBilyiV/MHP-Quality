import { styled } from 'styled-components';

export const Table = styled.table`
  width: 100%;
  font-size: 24px;
  th,
  td {
    border-bottom: 1px solid #ddd;
  }
  tr:hover {
    background-color: ${p => p.theme.theme.colors.light};
  }
  th {
    background-color: ${p => p.theme.theme.colors.medium};
    color: white;
  }
`;
