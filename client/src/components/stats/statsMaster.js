import React from "react";
import { withRouter } from "react-router-dom";

import LoggedInLandingNavbar from "../landing/loggedIn/landingNavbar";
import StatsBody from "./statsBody";
import LoggedInLandingFooter from "../landing/loggedIn/landingFooter";

import "./stats.css"
import "../landing/landing.css"

const StatsMaster = () => {
  return (
    <div id="landingMasterContainer">
      <LoggedInLandingNavbar />
      <StatsBody />
      <LoggedInLandingFooter />
    </div>
  );
};

export default withRouter(StatsMaster);
