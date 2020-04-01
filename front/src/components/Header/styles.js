import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 135px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #666666;
      font-size: 14px;
    }

    span {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #de3b3b;
      cursor: pointer;
    }
  }
`;

export const LinkPage = styled(Link)`
  font-weight: bold;
  color: ${props => (props.thisPage ? '#444444' : '#999999')};
  margin-right: 21px;
`;
