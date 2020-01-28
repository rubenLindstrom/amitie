import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// Components
import Nav from "./components/nav";
import Hero from "./components/hero";
import Story from "./pages/story";
import Gallery from "./pages/gallery";
import Visit from "./pages/visit";
import Menu from "./pages/menu";

import { withFooter } from "./hoc";

const App = props => {
  useEffect(() => {
    const location = props.location.pathname;
    const pageTitle =
      location === "/" ? "Home" : location[1].toUpperCase() + location.slice(2);

    document.title = `${pageTitle} • Amitié`;
    window.scrollTo(0, 0);
  }, [props.location]);

  const invertedNavPages = ["/menu", "/visit"];

  return (
    <>
      <Nav invert={invertedNavPages.includes(props.location.pathname)} />
      <Switch>
        <Route path="/" component={Hero} exact />
        <Route path="/story" component={() => withFooter(Story)} exact />
        <Route path="/gallery" component={() => withFooter(Gallery)} exact />
        <Route path="/visit" component={() => withFooter(Visit)} exact />
        <Route path="/menu" component={() => withFooter(Menu)} exact />
      </Switch>
    </>
  );
};

export default withRouter(App);
