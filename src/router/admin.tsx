import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home";
import Admin from "@/Admin";
import sheet from "@/pages/sheet";

export default class AdminRouter extends React.Component {
  render() {
    return (
      <Admin>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/sheet" exact component={sheet} />
          <Redirect to="/home"></Redirect>
        </Switch>
      </Admin>
    );
  }
}
