import React from "react";

import LandingNavbar from "./landingNavbar";
import LandingHero from "./landingHero";
import LandingFooter from "./landingFooter";

const LandingMaster = () => {
  return (
    <div>
      <LandingNavbar />
      <LandingHero />
      <LandingFooter />
    </div>
  );
};

export default LandingMaster;
