
import React, { useState, useEffect } from 'react';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { Container, Search } from './styles';

import { routes } from '~/routes';
import { addRecipient } from '~/services/recipient';
import { toast } from 'react-toastify';
import AvatarInput from '~/components/AvatarInput'
import { postDeliveryman } from '~/services/deliveryman';
import { useSelector } from 'react-redux';

export default function SignUpDeliveryman() {
  const avatar_id = useSelector(state=>state.deliveryman.avatar_id)
  const history = useHistory();

  const [values, setValues] = useState({});

  async function createRecipient() {
    try{
    await postDeliveryman(values, avatar_id);
    setValues({
      name:'',
      email:''
    });
    toast.success('Cadastrado com sucesso')
    }catch{
      toast.error('Não foi possível cadastrar')
    }
  }

  return (
    <>
      <Container>
        <header>
          <strong>Cadastro de entregadores</strong>
          <div className="div">
            <button
              className="back"
              onClick={() => history.push(routes.deliveryman)}
            >
              <MdKeyboardArrowLeft color="#fff" size={18} />
              Voltar
            </button>
            <button onClick={createRecipient}>
              <MdDone color="#fff" size={18} />
              Salvar
            </button>
          </div>
        </header>
        <form>
        <AvatarInput onChange={event =>
              setValues({ ...values, [event.target.name]: event.target.value })
            } name="avatar_id" />
          <label htmlFor="name">Nome</label>

          <input
            onChange={event =>
              setValues({ ...values, [event.target.name]: event.target.value })
            }
            value={values.name}
            name="name"
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={event =>
              setValues({ ...values, [event.target.name]: event.target.value })
            }
            value={values.email}
            name="email"
            type="text"
          />

        </form>
      </Container>
    </>
  );
}
