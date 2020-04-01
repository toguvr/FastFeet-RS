import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { StatusBar, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import api from '~/services/api';

import {
  Container,
  PurpleBack,
  Card,
  Title,
  Problem,
  DateText,
} from './styles';

export default function ViewProblem() {
  const order = useSelector(state => state.order.order);
  const [allProblems, setAllProblems] = useState([]);

  useEffect(() => {
    async function getProblems() {
      try {
        const response = await api.get(`/deliveries/${order.id}/problem`);
        setAllProblems(response.data);
      } catch (err) {}
    }
    getProblems();
  }, [order.id]);
  // dispatch(updateOrders('start_date', order.id));
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <PurpleBack />
      <Title>Encomenda {order.id}</Title>

      <FlatList
        data={allProblems}
        keyExtractor={problem => String(problem.id)}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        renderItem={({ item: problem }) => (
          <Card>
            <Problem>{problem.description}</Problem>
            <DateText>
              {format(new Date(problem.createdAt), 'dd/MM/yyyy', {
                locale: pt,
              })}
            </DateText>
          </Card>
        )}
      />
    </Container>
  );
}

// OrderInfo.propTypes = {};
