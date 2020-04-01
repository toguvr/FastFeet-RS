import axios from 'axios';
import { baseURL } from '~/services';

export async function filterResult(filterType, filter) {
  const token = localStorage.getItem('token');
  const response = await axios.get(
    `${baseURL}/filter?${filterType}=${filter}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
}
