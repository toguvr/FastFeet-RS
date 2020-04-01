import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 50px;

  & div {
    color: #c6c6c6;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 50px;
    font-weight: bold;
    text-align: center;
  }
`;

export const ActionList = styled.ul`
  box-shadow: 0px 0px 2px #00000026;
  background: #ffffff 0% 0% no-repeat padding-box;
  position: absolute;
  width: 150px;
  left: calc(100% - 102px);
  top: 25px;
  color: #999999;
  border-radius: 4px;
  padding: 21px 10px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 7px);
    top: -7px;
    width: 0;
    height: 0;
    border-right: 9px solid transparent;
    border-left: 9px solid transparent;
    border-bottom: 7px solid #fff;
  }

  li {
    display: flex;
    align-items: center;
    span {
      margin-left: 8px;
      cursor: pointer;
    }
  }
`;
