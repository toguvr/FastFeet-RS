import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';

export const ToastContainerStyled = styled(ToastContainer)`
  margin-top: 65px;

  .Toastify__toast--success {
    background: rgb(51, 187, 102);
  }

  .Toastify__toast--info {
    background: rgb(51, 102, 255);
  }

  .Toastify__toast--warning {
    background: rgb(254, 255, 20);
  }

  .Toastify__toast--error {
    background: rgb(255, 102, 102);
  }
`;

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html,body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

`;
