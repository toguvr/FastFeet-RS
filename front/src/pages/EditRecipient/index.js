import React, { useState, useEffect } from 'react';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Table from '~/components/Table';
import Avatar from '~/components/Avatar';
import Status from '~/components/Status';
import Action from '~/components/Action';
import { Container, Search } from './styles';
import { DivFlex } from '~/styles';
import { filterResult } from '~/services/filter';
import { routes } from '~/routes';
import { addRecipient, updateRecipient,  } from '~/services/recipient';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { removeMask } from '~/utils/masks';

export default function EditRecipient() {
  const history = useHistory();
  const currentRecipient = useSelector(state=>state.recipient.recipient)
  const [values, setValues] = useState({
    name:'',
    street: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    cep: ''
  });

  useEffect(()=>{
    currentRecipient && setValues(currentRecipient)
  },[])

  async function createRecipient() {
    try{
      values.cep = removeMask(values.cep)
    await updateRecipient(values, values.id);

    toast.success('Atualizado com sucesso')
    }catch{
      toast.error('Não foi possível atualizar')
    }
  }

  return (
    <>
      <Container>
        <header>
          <strong>Edição de destinatários</strong>
          <div className="div">
            <button
              className="back"
              onClick={() => history.push(routes.recipient)}
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
          <label htmlFor="name">Nome</label>
          <input
            onChange={event =>
              setValues({ ...values, [event.target.name]: event.target.value })
            }
            value={values.name}
            name="name"
            type="text"
          />
          <div className="group">
            <label htmlFor="street">
              Rua
              <input
                onChange={event =>
                  setValues({
                    ...values,
                    [event.target.name]: event.target.value,
                  })
                }
                value={values.street}
                name="street"
                type="text"
              />
            </label>
          <div className="group">

            <label htmlFor="number">
              Número
              <input
                onChange={event =>
                  setValues({
                    ...values,
                    [event.target.name]: event.target.value,
                  })
                }
                value={values.number}
                name="number"
                type="text"
              />
            </label>
            <label htmlFor="complement">
              Complemento
              <input
                onChange={event =>
                  setValues({
                    ...values,
                    [event.target.name]: event.target.value,
                  })
                }
                value={values.complement}
                name="complement"
                type="text"
              />
            </label>
          </div>
          </div>
          <div className="group">
            <label htmlFor="city">
              Cidade
              <input
                onChange={event =>
                  setValues({
                    ...values,
                    [event.target.name]: event.target.value,
                  })
                }
                value={values.city}
                name="city"
                type="text"
              />
            </label>
            <label htmlFor="state">
              Estado
              <input
                onChange={event =>
                  setValues({
                    ...values,
                    [event.target.name]: event.target.value,
                  })
                }
                value={values.state}
                name="state"
                type="text"
              />
            </label>
            <label htmlFor="cep">
              CEP
              <NumberFormat
              format="#####-###"

                onChange={event =>
                  setValues({
                    ...values,
                    [event.target.name]: event.target.value,
                  })
                }
                value={values.cep}
                name="cep"
                type="text"
              />
            </label>
          </div>
        </form>
      </Container>
    </>
  );
}
