import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { View, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import api from '~/services/api';

import {
  Container,
  OrderList,
  Provider,
  Name,
  Title,
  Header,
  FlexView,
  ViewStyled,
  SubHeader,
  Filter,
  FlexFilter,
} from './styles';
import Avatar from '~/components/Avatar';
import { signOut } from '~/store/modules/auth/actions';
import Order from './Order';

export default function Orders({ navigation }) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState('pendent');

  function handleLogout() {
    dispatch(signOut());
  }

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get(`orders/${profile.id}/deliveries`);

      setOrders(response.data);
    }
    async function loadFinishOrders() {
      const response = await api.get(`orders/${profile.id}/delivered`);

      setOrders(response.data);
    }
    if (currentOrder === 'pendent') {
      loadOrders();
    } else {
      loadFinishOrders();
    }
  }, [currentOrder, profile.id]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <ViewStyled>
          <ViewStyled>
            <Avatar
              url={profile.avatar && profile.avatar.url}
              width="68"
              name={profile.name}
              mBottom={0}
              top={0}
            />
          </ViewStyled>
          <FlexView>
            <Title>Bem vindo de volta,</Title>
            <Name>{profile.name}</Name>
          </FlexView>
        </ViewStyled>
        <Icon
          onPress={handleLogout}
          name="exit-to-app"
          size={24}
          color="#E74040"
        />
      </Header>
      <SubHeader>
        <Name>Entregas</Name>
        <FlexFilter>
          <Filter
            onPress={() => setCurrentOrder('pendent')}
            checked={currentOrder === 'pendent'}
          >
            Pendentes
          </Filter>
          <Filter
            onPress={() => setCurrentOrder('finished')}
            checked={currentOrder === 'finished'}
          >
            Entregues
          </Filter>
        </FlexFilter>
      </SubHeader>
      <View>
        <OrderList
          data={orders}
          keyExtractor={order => String(order.id)}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          renderItem={({ item: order }) => (
            <Order
              name={order.id}
              start={order.start_date}
              end={order.end_date}
              createdAt={order.createdAt}
              city={order.recipient.city}
              order={order}
            />
          )}
        />
      </View>
    </Container>
  );
}

Orders.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.shape,
  }).isRequired,
};
