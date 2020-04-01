import produce from 'immer';

const initialState = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return produce(state, draft => {
        draft.profile = action.payload.user;
        draft.loading = true;
      });
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
      });
    case '@auth/SIGN_IN_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.token = null;
        draft.signed = false;
      });
    default:
      return state;
  }
}
