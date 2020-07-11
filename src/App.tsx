import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import useDarkMode from "use-dark-mode";

import { GlobalStyle } from "web/config";
import Layout from "web/components/Layout";

import Home from "web/pages/Home";
import Photography from "web/pages/photography/Photography";
import PhotoCategory from "web/pages/photography/PhotoCategory";
import Sandbox from "web/pages/Sandbox";
import Drawings from "web/pages/Drawings";

export default function App() {
  useDarkMode();

  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/photography/:category" component={PhotoCategory} />
            <Route path="/photography" component={Photography} />
            <Route path="/projects" component={Sandbox} />
            <Route path="/drawings" component={Drawings} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}
