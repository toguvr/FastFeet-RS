import axios from 'axios';
import { baseURL } from 'services';

export async function createSession(email, password) {
  const body = {
    email,
    password,
  };

  const response = await axios.post(`${baseURL}/sessions`, body);

  return response;
}
