import React from "react";
import { Switch } from "react-router-dom";
import Login from "./sessionLogin";
import AuthRoute from "../util/route_util";
import Register from "./sessionRegister";
import SessionNavbar from "./sessionNavbar";

import "./session.css"

const SessionMaster = () => {
  return (
    <div id="sessionMasterContainer">
      <SessionNavbar />
      <Switch>
        <AuthRoute 
          exact path="/login" 
          component={Login} 
          routeType="auth" 
        />
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

export default SessionMaster;
