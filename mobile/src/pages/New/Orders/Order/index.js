import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {
  Container,
  HeaderStyled,
  NameText,
  Body,
  FlexDiv,
  Title,
  Name,
  Detail,
  Footer,
  Line,
  Ball,
  Div,
  Status,
} from './styles';
import { setOrder } from '~/store/modules/order/actions';

export default function Order({ order, name, start, end, createdAt, city }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function goToDetailsPage() {
    dispatch(setOrder(order));
    navigation.navigate('OrderInfo');
  }

  return (
    <Container>
      <HeaderStyled>
        <Icon name="local-shipping" size={24} color="#7D40E7" />
        <NameText>Encomenda {name}</NameText>
      </HeaderStyled>
      <Body>
        <Line />
        <Div>
          <Ball checked />
          <Status>Aguardando Retirada</Status>
        </Div>
        <Div>
          <Ball checked={start} />
          <Status>Retirada</Status>
        </Div>
        <Div>
          <Ball checked={end} />
          <Status>Entregue</Status>
        </Div>
      </Body>
      <Footer>
        <FlexDiv>
          <Title>Data</Title>
          <Name>
            {format(new Date(createdAt), 'dd/MM/yyyy', { locale: pt })}
          </Name>
        </FlexDiv>
        <FlexDiv>
          <Title>Cidade</Title>
          <Name>{city}</Name>
        </FlexDiv>

        <Detail onPress={goToDetailsPage}>Ver Detalhes</Detail>
      </Footer>
    </Container>
  );
}
