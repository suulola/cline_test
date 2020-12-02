import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "./assets/output.css";
import { ErrorFallBack } from "./lib/screens/ErrorFallBack/ErrorFallBack";
import store from "./lib/store";
import routes from "./lib/routes";
import { Loader } from "./lib/screens/Loaders/Loaders";

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
                  <Route key={i} {...route} />
                ) : (
                  <Route key={i} {...route} />
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
