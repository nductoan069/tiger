import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Topics from "./pages/Topics";
import NoMatch from "./pages/NoMatch";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default Routes;
