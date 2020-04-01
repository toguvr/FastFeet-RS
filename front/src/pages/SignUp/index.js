import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Helmet from 'react-helmet';
import { useDispatch } from 'react-redux';
import logo from '~/assets/logo.svg';
import { routes } from '~/routes';

const Schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .email('Email Inválido')
    .required('Email obrigatório'),

  password: Yup.string()
    .min(6, 'Mínimo 6 caracteres')
    .required('Senha obrigatória'),
});

export default function Signup() {
  const dispatch = useDispatch();
  function handleSubmit(data) {
    const { name, email, password } = data;
  }

  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={Schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
        <Link to={routes.signin}>Voltar para login</Link>
      </Form>
    </>
  );
}
