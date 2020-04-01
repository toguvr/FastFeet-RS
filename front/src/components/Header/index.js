import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '~/assets/logo.png';
import { Container, Content, Profile, LinkPage } from './styles';
import { routes } from '~/routes';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push(routes.signin);
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <LinkPage
            thisPage={history.location.pathname === routes.orders}
            to={routes.orders}
          >
            ENCOMENDAS
          </LinkPage>
          <LinkPage
            thisPage={history.location.pathname === routes.deliveryman}
            to={routes.deliveryman}
          >
            ENTREGADORES
          </LinkPage>
          <LinkPage
            thisPage={history.location.pathname === routes.recipient}
            to={routes.recipient}
          >
            DESTINATÁRIOS
          </LinkPage>
          <LinkPage
            thisPage={history.location.pathname === routes.problem}
            to={routes.problem}
          >
            PROBLEMAS
          </LinkPage>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <span onClick={logout}>Sair do sistema</span>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
