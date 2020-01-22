import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Nav from "./components/nav";
import Hero from "./components/hero";
import Story from "./pages/story";

const app = () => (
  <>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Hero} exact />
        <Route path="/story" component={Story} exact />
      </Switch>
    </Router>
  </>
);

export default app;
