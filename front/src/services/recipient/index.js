import axios from 'axios';
import { baseURL } from 'services';

export async function addRecipient(data) {
  const token = localStorage.getItem('token');

  const body = {
    name: data.name,
    street: data.street,
    number: data.number,
    complement: data.complement,
    state: data.state,
    city: data.city,
    cep: data.cep,
  };

  const response = await axios.post(`${baseURL}/recipients`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}

export async function updateRecipient(data, recipientId) {
  const token = localStorage.getItem('token');

  const body = {
    name: data.name,
    street: data.street,
    number: data.number,
    complement: data.complement,
    state: data.state,
    city: data.city,
    cep: data.cep,
  };

  const response = await axios.put(
    `${baseURL}/recipients/${recipientId}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
