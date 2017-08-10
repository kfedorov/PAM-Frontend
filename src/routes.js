/* Temporary not-used: will need some refactoring */

/* Utils */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

/* Components (possible routes) */
import App from "./containers/App";
import About from "./containers/About";
import NotFound from "./containers/NotFound";

const Routes = props =>
  <Router {...props}>
    <main>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </main>
  </Router>;

export default Routes;
