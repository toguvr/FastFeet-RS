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
import { addOrder, updateOrder } from '~/services/order';
import { useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';

export default function EditOrder() {
  const history = useHistory();
  const currentOrder = useSelector(state=>state.order.order)

  const [currentValue, setCurrentValue] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [data, setData] = useState([])
  const [values, setValues] = useState({
    deliveryman_id:'',
    recipient_id: '',
    product: ''
  });

  useEffect(()=>{

    currentOrder && setValues(currentOrder)

    currentOrder && setCurrentValue({recipient: {value:currentOrder.recipient.id, label:currentOrder.recipient.name}, deliveryman: {value:currentOrder.deliveryman.id, label:currentOrder.deliveryman.name}})

  },[currentOrder])

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


    }
    getOrder()
  },[])

  async function createOrder() {
    try{
    await updateOrder(values, currentOrder.id);

    toast.success('Atualizado com sucesso')
    }catch{
      toast.error('Não foi possível atualizar')
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

  const handleChangeRecipient = (newValue: any, actionMeta: any) => {
    setValues({...values, recipient_id: newValue.value})
    setCurrentValue({...currentValue, recipient: newValue})
  };

  const handleChangeDeliveryman = (newValue: any, actionMeta: any) => {
    setValues({...values, deliveryman_id: newValue.value})
    setCurrentValue({...currentValue, deliveryman: newValue})

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
          <strong>Edição de encomendas</strong>
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
