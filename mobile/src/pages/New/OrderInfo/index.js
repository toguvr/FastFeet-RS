import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { StatusBar, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCM from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import api from '~/services/api';

import {
  Container,
  PurpleBack,
  Card,
  Header,
  Title,
  Flex,
  SubTitle,
  Name,
  Between,
  Footer,
  ButtonText,
  FlexButton,
} from './styles';
import { updateOrders } from '~/store/modules/order/actions';

export default function OrderInfo() {
  const order = useSelector(state => state.order.order);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <PurpleBack />
      <ScrollView contentContainerStyle={Platform.OS === 'ios' && { padding: 20}} showsVerticalScrollIndicator={false}>
        <Card>
          <Header>
            <Icon name="local-shipping" color="#7D40E7" size={24} />
            <Title>Informações da entrega</Title>
          </Header>
          <Flex>
            <SubTitle>DESTINATÁRIO</SubTitle>
            <Name>{order.recipient.name}</Name>
          </Flex>

          <Flex>
            <SubTitle>ENDEREÇO DE ENTREGA</SubTitle>
            <Name>
              {order.recipient.street}, {order.recipient.number},{' '}
              {order.recipient.city} - {order.recipient.state}{' '}
              {order.recipient.cep}
            </Name>
          </Flex>

          <Flex>
            <SubTitle>PRODUTO</SubTitle>
            <Name>{order.product}</Name>
          </Flex>
        </Card>
        <Card>
          <Header>
            <Icon name="event" color="#7D40E7" size={24} />
            <Title>Situação da entrega</Title>
          </Header>
          <Flex>
            <SubTitle>STATUS</SubTitle>
            <Name>
              {order.canceled_at
                ? 'Cancelada'
                : order.end_date
                ? 'Entregue'
                : order.start_date
                ? 'Retirada'
                : 'Pendente'}
            </Name>
          </Flex>
          <Between>
            <Flex>
              <SubTitle>DATA DE RETIRADA</SubTitle>
              <Name>
                {order.start_date
                  ? format(new Date(order.start_date), 'dd/MM/yyyy', {
                      locale: pt,
                    })
                  : '--/--/--'}
              </Name>
            </Flex>
            <Flex>
              <SubTitle>DATA DE ENTREGA</SubTitle>
              <Name>
                {order.end_date
                  ? format(new Date(order.end_date), 'dd/MM/yyyy', {
                      locale: pt,
                    })
                  : '--/--/--'}
              </Name>
            </Flex>
          </Between>
          <Footer>
            <FlexButton onPress={() => navigation.navigate('ReportProblem')}>
              <Icon name="highlight-off" color="#E74040" size={24} />
              <ButtonText>Informar Problema</ButtonText>
            </FlexButton>
            <FlexButton onPress={() => navigation.navigate('ViewProblem')}>
              <Icon name="info-outline" color="#E7BA40" size={24} />
              <ButtonText>Visualizar Problemas</ButtonText>
            </FlexButton>
            <FlexButton onPress={() => navigation.navigate('EndOrder')}>
              <IconCM name="check-circle-outline" color="#7D40E7" size={24} />
              <ButtonText>Confirmar Entrega</ButtonText>
            </FlexButton>
          </Footer>
        </Card>
      </ScrollView>
    </Container>
  );
}

// OrderInfo.propTypes = {};
