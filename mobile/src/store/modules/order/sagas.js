import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateOrderSuccess, updateOrderFail } from './actions';

export function* updateOrder({ payload }) {
  yield put(updateOrderFail(true));

  try {
    const { type, orderId } = payload;

    const body = new FormData();
    body.append('file', type);

    const response = yield call(api.put, `endorders/${orderId}`, body);

    Alert.alert('Sucesso!', 'Entrega atualizada com sucesso');

    yield put(updateOrderSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização da entrega, tente novamente em breve'
    );
    yield put(updateOrderFail(false));
  }
}

export default all([takeLatest('@order/UPDATE_ORDER_REQUEST', updateOrder)]);
