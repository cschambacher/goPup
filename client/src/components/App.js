import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthRoute from "./util/route_util";
import SessionMaster from "./session/sessionMaster";
import LandingMaster from "./landing/landingMaster";
import MapAPI from "./routes/map";
import RouteIndex from "./routes/routeIndex";

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute path="/routes/new" component={MapAPI} />
        <AuthRoute path="/routes" component={RouteIndex} />
        <Route path="/(register|login)" component={SessionMaster} />
        <AuthRoute path="/" component={LandingMaster} />
      </Switch>
    </div>
  );
};

export default App;
