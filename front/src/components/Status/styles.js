import styled from 'styled-components';

export const Container = styled.div`
  width:135px;
  background: ${props => props.color} 0% 0% no-repeat padding-box;
  border-radius: 12px;
  padding: 4px 7px 4px 28px;
  color: ${props => props.colorTitle};
  position: relative;
  font-weight: bold;

  &::after {
    position: absolute;
    left: 11px;
    bottom: 9px;
    width: 10px;
    height: 10px;
    background: ${props => props.colorTitle};
    border-radius: 50%;
    content: '';
  }
`;
