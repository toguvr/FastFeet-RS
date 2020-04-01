import axios from 'axios';
import { baseURL } from '~/services';

export async function postDeliveryman(data, avatar_id) {
  const token = localStorage.getItem('token');

  const body = {
    name: data.name,
    email: data.email,
    avatar_id,
  };

  const response = await axios.post(`${baseURL}/deliveryman`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}

export async function updateDeliveryman(data, avatar_id, deliverymanId) {
  const token = localStorage.getItem('token');

  const body = {
    name: data.name,
    email: data.email,
    avatar_id,
  };

  const response = await axios.put(
    `${baseURL}/deliveryman/${deliverymanId}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}

export async function deleteDeliveryman(deliverymanId) {
  const token = localStorage.getItem('token');

  const response = await axios.delete(
    `${baseURL}/deliveryman/${deliverymanId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
