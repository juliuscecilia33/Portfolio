import React, { Suspense, lazy } from "react";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/scrollToTop";

const HomePage = lazy(() => import("./pages/HomePage"));
const FeaturedPage = lazy(() => import("./pages/FeaturedPage"));
const InstaDeckPage = lazy(() => import("./pages/InstaDeckPage"));
const FAOutletsPage = lazy(() => import("./pages/FAOutletsPage"));
const CycleScanPage = lazy(() => import("./pages/CycleScanPage"));
const ReThinkPage = lazy(() => import("./pages/ReThinkPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BeeehivePage = lazy(() => import("./pages/BeeehivePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const JoblicantPage = lazy(() => import("./pages/JoblicantPage"));

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Suspense
            fallback={
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Loading Page...
              </div>
            }
          >
            <Route path={ROUTES.HOME} exact render={() => <HomePage />} />
            <Route
              path={ROUTES.PROJECTS}
              exact
              render={() => <FeaturedPage />}
            />
            <Route
              path={ROUTES.INSTADECK}
              exact
              render={() => <InstaDeckPage />}
            />
            <Route
              path={ROUTES.FAOUTLETS}
              exact
              render={() => <FAOutletsPage />}
            />
            <Route
              path={ROUTES.CYCLESCAN}
              exact
              render={() => <CycleScanPage />}
            />
            <Route
              path={ROUTES.JOBLICANT}
              exact
              render={() => <JoblicantPage />}
            />
            <Route path={ROUTES.RETHINK} exact render={() => <ReThinkPage />} />
            <Route
              path={ROUTES.BEEEHIVE}
              exact
              render={() => <BeeehivePage />}
            />
            <Route path={ROUTES.ABOUT} exact render={() => <AboutPage />} />
            <Route path={ROUTES.CONTACT} exact render={() => <ContactPage />} />
          </Suspense>
        </Switch>
      </Router>
    </>
  );
}
