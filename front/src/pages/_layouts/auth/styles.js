import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #7d40e7 0% 0% no-repeat padding-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Content = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;

  padding: 60px 30px;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  height: 425px;

  img {
    width: 259px;
    align-self: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  label {
    text-align: left;
    letter-spacing: 0;
    color: #444444;
    opacity: 1;
    font-weight: bold;
    font-size: 14px;
  }

  input {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dddddd;
    border-radius: 4px;
    height: 45px;
    width: 100%;
    padding: 0 15px;
    margin: 0 0 10px;

    &::placeholder {
      color: #999999;
    }
  }

  button {
    margin: 5px 0 0;
    height: 45px;
    background: #7d40e7 0% 0% no-repeat padding-box;
    border-radius: 4px;
    font-weight: bold;
    color: #fff;
    border: 0;
    font-size: 16px;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.08, '#7d40e7')};
    }
  }
`;
