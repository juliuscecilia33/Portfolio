import React from "react";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={ROUTES.HOME} exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}