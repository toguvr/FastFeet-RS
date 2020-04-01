import produce from 'immer';

const INITIAL_STATE = {
  order: null,
  loading: false,
};

export default function order(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@order/SET_ORDER': {
        draft.order = action.payload.data;
        break;
      }
      case '@order/UPDATE_ORDER_SUCCESS': {
        draft.order = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@order/UPDATE_ORDER_FAIL': {
        draft.loading = action.payload.data;
        break;
      }
      default:
    }
  });
}
