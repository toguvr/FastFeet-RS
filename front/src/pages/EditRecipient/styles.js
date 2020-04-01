import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 34px 120px;

  form {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    width: 100%;
    padding: 30px;

    .group {
      display: flex;
      background: #ffffff;
    }

    .css-yk16xz-control {
      margin-right: 15px;
    }

    label {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 9px 0;
    }

    input {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 12px 15px;
      color: #999999;
      margin-right: 16px;
    }
  }

  strong {
    font-size: 24px;
  }

  header {
    margin: 34px 0 22px;
    display: flex;
    justify-content: space-between;
  }

  .div {
    display: flex;
  }

  .back {
    background: #cccccc;
  }

  button {
    background: #7d40e7;
    border-radius: 4px;
    width: 142px;
    height: 36px;
    font-size: 14px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;

    &:focus {
      outline: none;
    }
  }
`;
