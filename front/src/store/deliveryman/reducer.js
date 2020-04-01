import produce from 'immer';

// Action Types
export const Types = {
  ADD_AVATAR_ID: 'ADD_AVATAR_ID',
  ADD_DELIVERYMAN: 'ADD_DELIVERYMAN',
};

const initialState = {
  avatar_id: null,
  deliveryman: null,
};

export default function deliveryman(state = initialState, action) {
  switch (action.type) {
    case 'ADD_AVATAR_ID':
      return produce(state, draft => {
        draft.avatar_id = action.payload.data;
      });
    case 'ADD_DELIVERYMAN':
      return produce(state, draft => {
        draft.deliveryman = action.payload.data;
      });
    default:
      return state;
  }
}

export function addAvatarId(data) {
  return {
    type: 'ADD_AVATAR_ID',
    payload: { data },
  };
}

export function holdDeliveryman(data) {
  return {
    type: 'ADD_DELIVERYMAN',
    payload: { data },
  };
}
