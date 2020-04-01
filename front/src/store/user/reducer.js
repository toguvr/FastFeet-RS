import produce from 'immer';

// Action Types
export const Types = {
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
};

const initialState = {
  profile: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    case '@user/UPDATE_PROFILE_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.profile;
      });
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.profile = null;
      });
    default:
      return state;
  }
}

export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
