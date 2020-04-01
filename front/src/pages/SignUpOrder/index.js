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
import { addRecipient } from '~/services/recipient';
import { toast } from 'react-toastify';
import { addOrder } from '~/services/order';
import AsyncSelect from 'react-select/async';

export default function SignUpOrder() {
  const history = useHistory();

  const [data, setData] = useState([])
  const [values, setValues] = useState({
    deliveryman_id:'',
    recipient_id: '',
    product: ''
  });
  const [inputValue, setInputValue] = useState("")
  const [currentValue, setCurrentValue] = useState("")

  useEffect(()=>{
    async function getOrder() {
      const response = await filterResult('recipientFilter', '');

      const optionsRecipient = response.data.recipient.map(recipient => ({
        value: recipient.id,
        label: recipient.name,
      }));

      const optionsDeliveryman = response.data.deliverymen.map(deliverymen => ({
        value: deliverymen.id,
        label: deliverymen.name,
      }));

      setData({recipient: optionsRecipient, deliverymen: optionsDeliveryman});

      setValues({...values,
        deliveryman_id: response.data.deliverymen[0].id,
        recipient_id: response.data.recipient[0].id
      })

    }
    getOrder()
  },[])

  const handleChangeRecipient = (newValue: any, actionMeta: any) => {
    setValues({...values, recipient_id: newValue.value})
    setCurrentValue({...currentValue, recipient: newValue})
  };

  const handleChangeDeliveryman = (newValue: any, actionMeta: any) => {
    setValues({...values, deliveryman_id: newValue.value})
    setCurrentValue({...currentValue, deliveryman: newValue})

  };

  async function createOrder() {
    try{
    await addOrder(values);
    setValues({
      deliveryman_id:'',
      recipient_id: '',
      product: ''
    });

    setCurrentValue({deliveryman: "", recipient: ""})

    toast.success('Cadastrado com sucesso')
    }catch{
      toast.error('Não foi possível cadastrar')
    }
  }

  const loadOptionsDeliveryman = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterDeliverymen(inputValue));
    }, 500);
  };

  const loadOptionsRecipient = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterRecipient(inputValue));
    }, 500);
  };




  const filterDeliverymen = (inputValue) => {
    if(data.deliverymen){
    return data.deliverymen.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };}

  const filterRecipient = (inputValue) => {
    if(data.recipient){
    return data.recipient.filter(i =>
       i.label.toLowerCase().includes(inputValue.toLowerCase())
    );}
  };

  const handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, '');
    setInputValue( inputValue );
    return inputValue;
  };

  return (
    <>
      <Container>
        <header>
          <strong>Cadastro de encomendas</strong>
          <div className="div">
            <button
              className="back"
              onClick={() => history.push(routes.orders)}
            >
              <MdKeyboardArrowLeft color="#fff" size={18} />
              Voltar
            </button>
            <button onClick={createOrder}>
              <MdDone color="#fff" size={18} />
              Salvar
            </button>
          </div>
        </header>
        <form>
          <div className="group">
            <label htmlFor="recipient_id">
              Destinatário
              <AsyncSelect
          cacheOptions
          onChange={handleChangeRecipient}
          loadOptions={loadOptionsRecipient}
          defaultOptions={data.recipient}
          onInputChange={handleInputChange}
          value={currentValue.recipient}

        />


            </label>
            <label htmlFor="deliveryman_id">
              Entregador
              <AsyncSelect
          cacheOptions
          loadOptions={loadOptionsDeliveryman}
          defaultOptions={data.deliverymen}
          onInputChange={handleInputChange}
          onChange={handleChangeDeliveryman}
          value={currentValue.deliveryman}
        />
            </label>
          </div>

            <label htmlFor="product">
              Produto
              <input
                onChange={event =>
                  setValues({
                    ...values,
                    [event.target.name]: event.target.value,
                  })
                }
                value={values.product}
                name="product"
                type="text"
              />
            </label>

        </form>
      </Container>
    </>
  );
}
