import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { ErrorFallBack } from "./lib/components/ErrorFallBack/ErrorFallBack";
import store from "./lib/store";
import routes from "./lib/routes";
import GuestNav from "./lib/components/Nav/GuestNav";
import UserNav from "./lib/components/Nav/UserNav";
import { Loader } from "./lib/components/Loaders/Loaders";
import "./assets/output.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <Suspense fallback={<Loader fullscreen />}>
            <Switch>
              {routes.map((route, i) => {
                return route.protected ? (
                  // <PrivateRoute key={i} {...route} />
                  <React.Fragment key={i}>
                    <div className="bg-gray-50 h-screen w-100">
                      <UserNav />
                      <Route {...route} />
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>
                    <div className="bg-gray-50 h-screen w-100">
                      {/* <GuestNav /> */}
                      <Route {...route} />
                    </div>
                  </React.Fragment>
                );
              })}
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
}

export default App;
