import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Nav from "./components/nav";
import Hero from "./components/hero";

const app = () => (
  <>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Hero} exact />
      </Switch>
    </Router>
  </>
);

export default app;
