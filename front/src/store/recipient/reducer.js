import produce from 'immer';

// Action Types
export const Types = {
  GET_RECIPIENT: 'GET_RECIPIENT',
};

const initialState = {
  recipient: null,
};

export default function recipient(state = initialState, action) {
  switch (action.type) {
    case 'GET_RECIPIENT':
      return produce(state, draft => {
        draft.recipient = action.payload.data;
      });
    default:
      return state;
  }
}

export function holdRecipient(data) {
  return {
    type: 'GET_RECIPIENT',
    payload: { data },
  };
}
