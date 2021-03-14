import React from "react";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, FeaturedPage, InstaDeckPage, FAOutletsPage } from "./pages";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={ROUTES.HOME} exact>
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route path={ROUTES.PROJECTS} exact>
            <FeaturedPage />
          </Route>
        </Switch>
        <Switch>
          <Route path={ROUTES.INSTADECK} exact>
            <InstaDeckPage />
          </Route>
        </Switch>
        <Switch>
          <Route path={ROUTES.FAOUTLETS} exact>
            <FAOutletsPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
