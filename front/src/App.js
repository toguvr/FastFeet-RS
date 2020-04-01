import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes';
import history from './config/history';

import GlobalStyle, { ToastContainerStyled } from './styles/global';
import store from './config/createStore';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainerStyled autoClose={5000} />
      </Router>
    </Provider>
  );
}

export default App;
