/* Utils */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Components (possible routes) */
import App from "./containers/App";
import About from "./containers/About";
import NotFound from "./containers/NotFound";

const Routes = props =>
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>;

export default Routes;
