import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import Dialog from '@material-ui/core/Dialog';
import { toast } from 'react-toastify';
import Table from '~/components/Table';
import Action from '~/components/Action';
import { Container, PopUp } from './styles';

import {
  getDeliveryProblem,
  cancelOrderProblem,
} from '~/services/deliveryProblem';

export default function Problem() {
  const [filter, setFilter] = useState('');
  const [orders, setOrders] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentProblem, setCurrentProblem] = useState({});

  useEffect(() => {
    async function getOrder() {
      const response = await getDeliveryProblem();

      setOrders(response.data);
    }

    getOrder();
  }, [filter]);

  function viewDialog(item) {
    setCurrentProblem(item);
    setOpen(true);
  }

  return (
    <>
      <Container>
        <strong>Gerenciando destinatários</strong>
        <Table>
          <thead>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </thead>
          {orders &&
            orders.map(problem => (
              <tbody>
                <td>#{problem.delivery && problem.delivery.id}</td>

                <td>{problem.description}</td>
                <td>
                  <Action
                    del={() => {
                      const confirm = window.confirm(
                        'Deseja realmente cancelar ?'
                      );
                      if (confirm) {
                        cancelOrderProblem(problem.id);
                        toast.success('Cancelada com sucesso');
                      }
                    }}
                    view={() => viewDialog(problem)}
                  />
                </td>
              </tbody>
            ))}
        </Table>
      </Container>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <PopUp>
          <strong>VISUALIZAR PROBLEMA</strong>
          <p>{currentProblem.description && currentProblem.description}</p>
        </PopUp>
      </Dialog>
    </>
  );
}
