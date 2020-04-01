import produce from 'immer';

// Action Types
export const Types = {
  ADD_ORDER: 'ADD_ORDER',
};

const initialState = {
  order: null,
};

export default function order(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ORDER':
      return produce(state, draft => {
        draft.order = action.payload.data;
      });
    default:
      return state;
  }
}

export function holdOrder(data) {
  return {
    type: 'ADD_ORDER',
    payload: { data },
  };
}
