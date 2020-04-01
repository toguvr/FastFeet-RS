import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import order from './order/reducer';

export default combineReducers({
  auth,
  user,
  order,
});
