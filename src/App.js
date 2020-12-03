import React, { Suspense } from "react";
import { connect } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { ErrorFallBack } from "./lib/components/ErrorFallBack/ErrorFallBack";
import routes from "./lib/routes";
import GuestNav from "./lib/components/Nav/GuestNav";
import UserNav from "./lib/components/Nav/UserNav";
import { Loader } from "./lib/components/Loaders/Loaders";
import "./assets/output.css";

function App({ auth }) {
  console.log(auth);
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <Suspense fallback={<Loader fullscreen />}>
          <div className="bg-gray-50 h-screen w-100">
            {auth && auth.isLoggedIn ? <UserNav /> : <GuestNav />}
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
            </Switch>
          </div>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: null,
  };
};

export default connect(mapStateToProps, null)(App);
