import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthRoute from "./util/route_util";
import SessionMaster from "./session/sessionMaster";
import LandingMaster from "./landing/landingMaster";
import MapAPI from "./routes/map";
import RouteDetail from "./routes/routeDetail";
import MapIndex from "./routes/mapIndex";


const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute path="/routes/new" component={MapAPI} />
        <Route exact path="/routes/:id" component={RouteDetail} />
        <AuthRoute path="/routes" component={MapIndex} />
        <Route path="/(register|login)" component={SessionMaster} />
        <AuthRoute path="/" component={LandingMaster} />
      </Switch>
    </div>
  );
};

export default App;
