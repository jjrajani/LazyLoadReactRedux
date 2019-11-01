import React from "react";
import { Switch, Route } from "react-router-dom";

import { Users } from "components/Users";
import { LazyHome } from "components/Home";

import { Login } from "components/ecosystems";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/tri-level" exact>
        <LazyHome />
      </Route>
    </Switch>
  );
}
