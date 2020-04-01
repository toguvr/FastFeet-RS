import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { StatusBar } from 'react-native';
import Avatar from '~/components/Avatar';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Title, Form, Name, LogoutButton } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Form>
        <Avatar
          url={profile.avatar && profile.avatar.url}
          width="140"
          name={profile.name}
          mBottom="40"
        />
        <Title>Nome Completo</Title>
        <Name>{profile.name}</Name>
        <Title>Email</Title>
        <Name>{profile.email}</Name>
        <Title>Data de cadastro</Title>
        <Name>
          {format(new Date(profile.createdAt), 'dd/MM/yyyy', { locale: pt })}
        </Name>
        <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
      </Form>
    </Container>
  );
}
