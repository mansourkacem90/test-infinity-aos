import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.scss";

const SignInComponent = lazy(() => import("./components/pages/sign-in"));



function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Redirect to={"/sign-in"} />
          </Route>
          <Route path="/sign-in" component={SignInComponent} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
