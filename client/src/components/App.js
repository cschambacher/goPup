import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./session/sessionLogin";
import AuthRoute from "./util/route_util";
import Register from "./session/sessionRegister";
import SessionNavbar from "./session/sessionNavbar";

const App = () => {
  return (
    <div>
      <SessionNavbar />
      <h1> goPup! </h1>
      <Switch>
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute
          exact
          path="/register"
          component={Register}
          routeType="auth"
        />
      </Switch>
    </div>
  );
};

export default App;
