import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import Dialog from '@material-ui/core/Dialog';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Table from '~/components/Table';
import Avatar from '~/components/Avatar';
import Status from '~/components/Status';
import Action from '~/components/Action';
import { Container, Search, PopUp } from './styles';
import { DivFlex } from '~/styles';
import { filterResult } from '~/services/filter';
import { routes } from '~/routes';
import { deleteOrder } from '~/services/order';
import { holdOrder } from '~/store/order/reducer';

export default function Orders() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const [orders, setOrders] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState({});

  async function getOrder() {
    const response = await filterResult('orderFilter', filter);

    setOrders(response.data.order);
  }
  useEffect(() => {
    getOrder();
  }, [filter]);

  function viewDialog(item) {
    setCurrentOrder(item);
    setOpen(true);
  }

  function editOrder(item) {
    dispatch(holdOrder(item));
    history.push(routes.editOrders);
  }

  return (
    <>
      <Container>
        <strong>Gerenciando Encomendas</strong>
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
          <button onClick={() => history.push(routes.signupOrders)}>
            <MdAdd color="#fff" size={16} />
            Cadastrar
          </button>
        </header>
        <Table>
          <thead>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </thead>
          {orders &&
            orders.map(order => (
              <tbody>
                <td>#{order.id}</td>
                <td>{order.recipient.name}</td>
                <td>
                  <DivFlex>
                    <Avatar
                      color="#F4EFFC"
                      name={
                        order.deliveryman ? order.deliveryman.name : 'FastFeet'
                      }
                    />
                    {order.deliveryman && order.deliveryman.name}
                  </DivFlex>
                </td>
                <td>{order.recipient.city}</td>
                <td>{order.recipient.state}</td>
                <td>
                  <Status
                    type={
                      order.canceled_at
                        ? 'canceled'
                        : order.end_date
                        ? 'success'
                        : order.start_date
                        ? 'retired'
                        : 'pending'
                    }
                  />
                </td>
                <td>
                  <Action
                    edit={() => {
                      editOrder(order);
                    }}
                    del={async () => {
                      try {
                        const confirm = window.confirm(
                          'Deseja realmente deletar ?'
                        );
                        if (confirm) {
                          await deleteOrder(order.id);
                          await getOrder();
                          toast.success('Deletada com sucesso');
                        }
                      } catch (err) {
                        toast.error('Não foi possível deletar');
                      }
                    }}
                    view={() => viewDialog(order)}
                  />
                </td>
                <Dialog
                  open={open}
                  onClose={() => setOpen(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <PopUp>
                    <strong>Informações da encomenda</strong>
                    <span>
                      {currentOrder.recipient && currentOrder.recipient.street},{' '}
                      {currentOrder.recipient && currentOrder.recipient.number}
                    </span>
                    <span>
                      {currentOrder.recipient && currentOrder.recipient.city} -{' '}
                      {currentOrder.recipient && currentOrder.recipient.state}
                    </span>
                    <span>
                      {currentOrder.recipient && currentOrder.recipient.cep}
                    </span>
                    <br />
                    <strong>Datas</strong>
                    <div>
                      <strong>Retirada:</strong>

                      {currentOrder.start_date &&
                        format(new Date(currentOrder.start_date), 'dd/MM/yyyy')}
                    </div>
                    <div>
                      <strong>Entrega:</strong>
                      {currentOrder.end_date &&
                        format(new Date(currentOrder.end_date), 'dd/MM/yyyy')}
                    </div>
                    <br />
                    <strong>Assinatura do destinatário</strong>

                    <img
                      src={currentOrder.signature && currentOrder.signature.url}
                    />
                  </PopUp>
                </Dialog>
              </tbody>
            ))}
        </Table>
      </Container>
    </>
  );
}
