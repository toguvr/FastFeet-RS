import styled, { css } from 'styled-components';

export const TableOverFlow = styled.header`
  overflow-x: auto;
  min-width: 100px;
`;

export const TableContainer = styled.table`
  border-collapse: separate;
  border-spacing: 0 21px;
  width: 100%;

  ${props =>
    props.fixed &&
    css`
      tbody :nth-child(${props => props.fixed}) {
        position: sticky;
        left: 0;
        background: #ffffff;
      }

      thead :nth-child(${props => props.fixed}) {
        position: sticky;
        left: 0;
        background: #f5f5f5;
      }
    `}

  tbody {
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 4px;

    td {
      width: ${props => props.width};
      font-size: 16px;
      padding: 20px 25px 16px;
      white-space: nowrap;
      text-overflow: elipsis;
    }
  }

  thead {
    th {
      width: ${props => props.width};
      font-size: 16px;
      margin: 22px 0 14px;
      padding: 0 25px;
      white-space: nowrap;
      text-overflow: elipsis;
    }
  }
`;
