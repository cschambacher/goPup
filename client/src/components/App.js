import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthRoute from "./util/route_util";
import SessionMaster from "./session/sessionMaster";
import LandingMaster from "./landing/landingMaster";
import MapAPI from "./routes/map";
import RouteIndex from "./routes/routeIndex";
import RouteDetail from "./routes/routeDetail";
import StatsMaster from "./stats/statsMaster"


const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute path="/routes/new" component={MapAPI} />
        <AuthRoute path="/routes/stats" component={StatsMaster} />
        <AuthRoute exact path="/routes/:id" component={RouteDetail} />
        <AuthRoute path="/routes" component={RouteIndex} />
        <Route path="/(register|login)" component={SessionMaster} />
        <AuthRoute path="/" component={LandingMaster} />
      </Switch>
    </div>
  );
};

export default App;
