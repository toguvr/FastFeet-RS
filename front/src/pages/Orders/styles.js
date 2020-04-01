import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 34px 120px;

  strong {
    font-size: 24px;
  }

  header {
    margin: 34px 0 22px;
    display: flex;
    justify-content: space-between;
  }

  button {
    background: #7d40e7 0% 0% no-repeat padding-box;
    border-radius: 4px;
    width: 142px;
    height: 36px;
    font-size: 14px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      outline: none;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 237px;
  height: 36px;
  justify-content: flex-start;
  align-items: center;
  padding: 9px 16px;

  input {
    margin-left: 8px;
    border: none;
    color: #999999;
    width: 100%;
    font-size: 14px;

    ::placeholder {
      color: #999999;
    }
  }
`;

export const PopUp = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 25px;
  width: 100%;
  min-width: 450px;
  height: 353px;

  strong {
    margin-bottom: 4px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
