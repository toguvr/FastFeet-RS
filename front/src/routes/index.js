import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// import { SignIn, SignUp, Dashboard, Profile } from 'pages';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Deliveryman from '../pages/Deliveryman';
import Orders from '../pages/Orders';
import Recipient from '../pages/Recipient';
import Problem from '../pages/Problem';
import Profile from '../pages/Profile';
import SignUpRecipient from '../pages/SignUpRecipient';
import SignUpOrder from '../pages/SignUpOrder';
import EditDeliveryman from '../pages/EditDeliveryman';
import EditOrder from '../pages/EditOrder';
import SignUpDeliveryman from '../pages/SignUpDeliveryman';
import EditRecipient from '../pages/EditRecipient';

export const routes = {
  signin: '/',
  signupOrders: '/orders/signup',
  editOrders: '/orders/edit',
  orders: '/orders',
  signupDeliveryman: '/deliveryman/signup',
  deliveryman: '/deliveryman',
  editDeliveryman: '/deliveryman/edit',
  signupRecipient: '/recipient/signup',
  editRecipient: '/recipient/edit',
  recipient: '/recipient',
  problem: '/problem',
};

export default function Routes() {
  return (
    <Switch>
      <Route path={routes.editOrders} component={EditOrder} isPrivate />
      <Route path={routes.signupOrders} component={SignUpOrder} isPrivate />
      <Route path={routes.orders} component={Orders} isPrivate />
      <Route
        path={routes.signupDeliveryman}
        component={SignUpDeliveryman}
        isPrivate
      />
      <Route
        path={routes.editDeliveryman}
        component={EditDeliveryman}
        isPrivate
      />
      <Route path={routes.deliveryman} component={Deliveryman} isPrivate />
      <Route
        path={routes.signupRecipient}
        component={SignUpRecipient}
        isPrivate
      />
      <Route path={routes.editRecipient} component={EditRecipient} isPrivate />
      <Route path={routes.recipient} component={Recipient} isPrivate />
      <Route path={routes.problem} component={Problem} isPrivate />
      <Route path={routes.signin} component={SignIn} />
    </Switch>
  );
}
