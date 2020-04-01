export function setOrder(data) {
  return {
    type: '@order/SET_ORDER',
    payload: { data },
  };
}

export function updateOrderSuccess(data) {
  return {
    type: '@order/UPDATE_ORDER_SUCCESS',
    payload: { data },
  };
}

export function updateOrderFail(data) {
  return {
    type: '@order/UPDATE_ORDER_FAIL',
    payload: { data },
  };
}

export function updateOrders(type, orderId) {
  return {
    type: '@order/UPDATE_ORDER_REQUEST',
    payload: { type, orderId },
  };
}
