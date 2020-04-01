import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '~/routes';

// const mapStateToProps = state => ({
//     actualProfile: state.requests.actualProfile,
//     actualPage: state.router.location.pathname,
// })

export const Authenticator = connect(
  null,
  null
)(props => {
  const token = window.localStorage.getItem('userId');
  if (!token) {
    return (
      <Redirect
        to={{ pathname: routes.signin, state: { from: props.location } }}
      />
    );
    // } else if (!props.actualProfile.hasAddress && props.actualPage !== routes.address) {
    // return (<Redirect to={ routes.address } />)
  }
  return props.children;
});

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Authenticator>
        <Component {...props} />
      </Authenticator>
    )}
  />
);
