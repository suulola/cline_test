import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from 'lib/components';

export const PrivateRoute = ({
  component: PrivateComponent,
  bgType,
  ...otherProps
}) => {
  /*
   Logic to check if user is logged in
  */
  let loggedIn = false;
  const reduxState = JSON.parse(localStorage.getItem('greenpole_redux_state'));
  if (reduxState?.auth?.token) {
    loggedIn = true;
  }

  // Get & set user profile
  const userPayload = useSelector((state) => state.auth.user);
  const user = {
    name: `${userPayload?.firstName} ${userPayload?.lastName}`,
    pic:
      'https://www.sunjs.com/staticfile/ace_admin_v1.4.0/assets/avatars/profile-pic.jpg',
  };

  return (
    <Route
      {...otherProps}
      render={(props) => {
        return loggedIn ? (
          <Layout withSearch={true} user={user} bgType={bgType}>
            <PrivateComponent {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};
