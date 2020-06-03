import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import AdminRouter from "./admin";

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/" render={() => <AdminRouter></AdminRouter>}></Route>
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
