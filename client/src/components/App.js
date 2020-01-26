import React from "react";
import { Route, Switch } from "react-router-dom";
import SessionMaster from "./session/sessionMaster";
import LandingMaster from "./landing/landingMaster";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/(register|login)" component={SessionMaster} />
        <Route path="/" component={LandingMaster} />
        <Route path="/" component={() => <div>Hello, there. Landing page belongs here!</div>} />
      </Switch>
    </div>
  );
};

export default App;
