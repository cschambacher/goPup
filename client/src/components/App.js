import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthRoute from "./util/route_util";
import SessionMaster from "./session/sessionMaster";
import LandingMaster from "./landing/landingMaster";
import MapAPI from "./routes/map";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/routes/new" component={MapAPI} />
        <Route path="/(register|login)" component={SessionMaster} />
        <AuthRoute path="/" component={LandingMaster} />
        {/* <Route path="/" component={() => <div>Hello, there. Landing page belongs here!</div>} /> */}
      </Switch>
    </div>
  );
};

export default App;
