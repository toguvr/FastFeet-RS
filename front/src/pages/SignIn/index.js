import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';
import logo from '~/assets/logo.png';
import { routes } from '~/routes';
import { createSession } from '~/services/user';
// import { signInRequest } from '~/store/modules/auth/actions';

const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Email Inválido')
    .required('Email obrigatório'),

  password: Yup.string().required('Senha obrigatória'),
});

export default function Signin() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    const { email, password } = data;
    setLoading(true);
    try {
      const response = await createSession(email, password);
      toast.success('Autenticado com sucesso e redirecionado para o painel');
      localStorage.setItem('token', response.data.token);
      history.push(routes.orders);
    } catch (err) {
      setLoading(false);
      toast.error('Falha na autenticação, confira seu usuário e senha');
    }
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={Schema} onSubmit={handleSubmit}>
        <label htmlFor="email">SEU E-MAIL</label>
        <Input
          is="email"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
        />
        <label htmlFor="id_password">SUA SENHA</label>
        <Input
          id="id_password"
          name="password"
          type="password"
          placeholder="********"
        />
        <button type="submit">
          {loading ? <CircularProgress size={24} /> : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
