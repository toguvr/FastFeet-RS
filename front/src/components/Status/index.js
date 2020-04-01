import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Status({ type }) {
  function status(type) {
    let status;
    switch (type) {
      case 'success':
        return (status = {
          name: 'ENTREGUE',
          color: '#DFF0DF',
          colorTitle: '#2CA42B',
        });
      case 'pending':
        return (status = {
          name: 'PENDENTE',
          color: '#F0F0DF',
          colorTitle: '#C1BC35',
        });
      case 'retired':
        return (status = {
          name: 'RETIRADA',
          color: '#BAD2FF',
          colorTitle: '#4D85EE',
        });
      case 'canceled':
        return (status = {
          name: 'CANCELEDA',
          color: '#FAB0B0',
          colorTitle: '#DE3B3B',
        });

      default:
        return (status = {
          name: 'PENDENTE',
          color: '#F0F0DF',
          colorTitle: '#C1BC35',
        });
    }
  }
  return (
    <Container color={status(type).color} colorTitle={status(type).colorTitle}>
      {status(type).name}
    </Container>
  );
}

Status.propTypes = {
  type: PropTypes.string,
};
