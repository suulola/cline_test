import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: PrivateComponent,
  ...otherProps
}) => {
  /*
   Logic to check if user is logged in
  */
  let loggedIn = false;
  const reduxState = JSON.parse(localStorage.getItem("cline_loggedIn_user"));
  if (reduxState?.auth?.token) {
    loggedIn = true;
  }

  return (
    <Route
      {...otherProps}
      render={(props) => {
        return loggedIn ? (
          <PrivateComponent {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    />
  );
};
