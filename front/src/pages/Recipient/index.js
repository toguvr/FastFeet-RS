import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Table from '~/components/Table';
import Avatar from '~/components/Avatar';
import Status from '~/components/Status';
import Action from '~/components/Action';
import { Container, Search } from './styles';
import { DivFlex } from '~/styles';
import { filterResult } from '~/services/filter';
import { routes } from '~/routes';
import { holdRecipient } from '~/store/recipient/reducer';
import EditRecipient from '../EditRecipient';

export default function Recipient() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');
  const [orders, setOrders] = useState(false);

  useEffect(() => {
    async function getOrder() {
      const response = await filterResult('recipientFilter', filter);

      setOrders(response.data.recipient);
    }

    getOrder();
  }, [filter]);

  function editRecipient(item) {
    dispatch(holdRecipient(item));
    history.push(routes.editRecipient);
  }

  return (
    <>
      <Container>
        <strong>Gerenciando destinatários</strong>
        <header>
          <Search>
            <MdSearch color="#999999" size={16} />
            <input
              value={filter}
              onChange={e => setFilter(e.target.value)}
              type="text"
              placeholder="Buscar por encomendas"
            />
          </Search>
          <button onClick={() => history.push(routes.signupRecipient)}>
            <MdAdd color="#fff" size={16} />
            Cadastrar
          </button>
        </header>
        <Table>
          <thead>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </thead>
          {orders &&
            orders.map(recipient => (
              <tbody>
                <td>#{recipient.id}</td>

                <td>{recipient.name}</td>
                <td>
                  {recipient.street}, {recipient.number}, {recipient.city} -{' '}
                  {recipient.state}
                </td>

                <td>
                  <Action edit={() => editRecipient(recipient)} />
                </td>
              </tbody>
            ))}
        </Table>
      </Container>
    </>
  );
}
