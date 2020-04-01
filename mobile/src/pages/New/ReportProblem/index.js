import React, { useMemo, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { StatusBar, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useSelector, useDispatch } from 'react-redux';
import api from '~/services/api';

import { Container, PurpleBack, Card, TInput } from './styles';
import { updateOrders } from '~/store/modules/order/actions';
import Button from '~/components/Button';
import Input from '~/components/Input';

export default function ReportProblem() {
  const order = useSelector(state => state.order.order);
  const loading = useSelector(state => state.order.loading);

  const [problem, setProblem] = useState('');

  async function handleSubmit() {
    try {
      const body = {
        delivery_id: order.id,
        description: problem,
      };

      await api.post('/deliveries/problem', body);
      Alert.alert('Sucesso!', 'Problema reportado com sucesso');
      setProblem('');
    } catch (err) {
      Alert.alert(
        'Falha ao rerportar',
        'Houve um erro ao reportar o problema, tente novamente em breve'
      );
    }
  }
  // dispatch(updateOrders('start_date', order.id));
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <PurpleBack />
      <Card>
        <TInput
          placeholderTextColor="#999999"
          multiline
          numberOfLines={40}
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={problem}
          onChangeText={setProblem}
        />
      </Card>

      <Button loading={loading} onPress={handleSubmit}>
        Enviar
      </Button>
    </Container>
  );
}

// OrderInfo.propTypes = {};
