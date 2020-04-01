import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Table from '~/components/Table';
import Avatar from '~/components/Avatar';
import Status from '~/components/Status';
import Action from '~/components/Action';
import { Container, Search } from './styles';
import { DivFlex } from '~/styles';
import { filterResult } from '~/services/filter';
import { deleteDeliveryman } from '~/services/deliveryman';
import { routes } from '~/routes';
import { holdDeliveryman } from '~/store/deliveryman/reducer';

export default function Deliveryman() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');
  const [orders, setOrders] = useState(false);

  async function getOrder() {
    const response = await filterResult('deliverymanFilter', filter);

    setOrders(response.data.deliverymen);
  }
  useEffect(() => {
    getOrder();
  }, [filter]);

  function editDeliveryman(item) {
    dispatch(holdDeliveryman(item));
    history.push(routes.editDeliveryman);
  }

  return (
    <>
      <Container>
        <strong>Gerenciando Entregadores</strong>
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
          <button onClick={() => history.push(routes.signupDeliveryman)}>
            <MdAdd color="#fff" size={16} />
            Cadastrar
          </button>
        </header>
        <Table>
          <thead>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </thead>
          {orders &&
            orders.map(deliveryman => (
              <tbody>
                <td>#{deliveryman.id}</td>
                <td>
                  {deliveryman.avatar ? (
                    <Avatar url={deliveryman.avatar.url} />
                  ) : (
                    <Avatar color="#F4EFFC" name={deliveryman.name} />
                  )}
                </td>
                <td>{deliveryman.name}</td>
                <td>{deliveryman.email}</td>

                <td>
                  <Action
                    edit={() => editDeliveryman(deliveryman)}
                    del={async () => {
                      try {
                        const confirm = window.confirm(
                          'Deseja realmente deletar ?'
                        );
                        if (confirm) {
                          await deleteDeliveryman(deliveryman.id);
                          await getOrder();
                          toast.success('Deletado com sucesso');
                        }
                      } catch (err) {
                        toast.error('Não foi possível deletar');
                      }
                    }}
                  />
                </td>
              </tbody>
            ))}
        </Table>
      </Container>
    </>
  );
}
