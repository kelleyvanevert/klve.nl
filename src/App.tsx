import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "~/components/Layout";
import Home from "~/pages/Home";
import Photography from "~/pages/photography/Photography";
import PhotoCategory from "./pages/photography/PhotoCategory";
import Sandbox from "~/pages/Sandbox";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/photography/:category" component={PhotoCategory} />
          <Route path="/photography" component={Photography} />
          <Route path="/projects" component={Sandbox} />
        </Switch>
      </Layout>
    </Router>
  );
}

const wrap =
  process.env.NODE_ENV === "development" ? hot(module) : (x: any) => x;

export default wrap(App);
