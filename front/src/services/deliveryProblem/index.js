import axios from 'axios';
import { baseURL } from '~/services';

export async function getDeliveryProblem() {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${baseURL}/deliveries/problem`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}

export async function cancelOrderProblem(problemId) {
  const token = localStorage.getItem('token');

  const body = {
    canceled_at: Date.now(),
  };

  const response = await axios.put(
    `${baseURL}/deliveries/${problemId}/problem`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
