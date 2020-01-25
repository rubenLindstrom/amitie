import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Nav from "./components/nav";
import Hero from "./components/hero";
import Story from "./pages/story";
import Gallery from "./pages/gallery";
import Visit from "./pages/visit";

import { withFooter } from "./hoc";

const App = () => {
  useEffect(() => {
    const location = window.location.pathname;
    const pageTitle =
      location === "/" ? "Home" : location[1].toUpperCase() + location.slice(2);

    document.title = `${pageTitle} • Amitié`;
  }, [window.location]);

  return (
    <div id="container">
      <Router>
        <Nav invert={window.location.pathname.slice(1) === "visit"} />
        <Switch>
          <Route path="/" component={Hero} exact />
          <Route path="/story" component={() => withFooter(Story)} exact />
          <Route path="/gallery" component={() => withFooter(Gallery)} exact />
          <Route path="/visit" component={() => withFooter(Visit)} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
