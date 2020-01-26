import React from "react";
import { withRouter, Link, Route, Switch } from "react-router-dom";

const SessionNavbar = props => {
  return (
    <div id="sessionNavbarContainer">
      <div id="logoFont">goPup</div>
      <Switch>
        <Route
          path="/register"
          component={() => (
            <Link id="sessionLoginButton" to="/login">
              Log In
            </Link>
          )}
        />
        <Route
          path="/login"
          component={() => (
            <Link id="sessionRegisterButton" to="/register">
              Sign Up
            </Link>
          )}
        />
      </Switch>
    </div>
  );
};

export default withRouter(SessionNavbar);