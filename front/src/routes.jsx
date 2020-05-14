import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Login from "./containers/login";
import Register from "./containers/register";
import HomeLogged from "./containers/homeLogged";

export default function MainRouter() {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/user/login" component={Login} />
          <Route path="/user/register" component={Register} />
          <Route path="/home" component={HomeLogged} />
        </Switch>
      </div>
    </Router>
  )
}