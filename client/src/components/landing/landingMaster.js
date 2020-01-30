import React from "react";
import { withRouter } from "react-router-dom";
import { Query, ApolloConsumer } from "react-apollo";
import { IS_LOGGED_IN } from "../graphql/queries";

import LoggedInLandingNavbar from "./loggedIn/landingNavbar";
import LoggedInLandingHero from "./loggedIn/landingHero";
import LoggedInLandingFooter from "./loggedIn/landingFooter";

import LoggedOutLandingNavbar from "./loggedOut/landingNavbar";
import LoggedOutLandingHero from "./loggedOut/landingHero";
import LoggedOutLandingFooter from "./loggedOut/landingFooter";

import "./landing.css"

const LandingMaster = () => {
  return (
    <div>
      <ApolloConsumer>
        {client => (
          <Query query={IS_LOGGED_IN}>
            {({ data }) => {
              if (data.isLoggedIn) {
                return (
                  <div id="landingMasterContainer">
                    <LoggedInLandingNavbar />
                    <LoggedInLandingHero currUserId={data.currUserId}/>
                    {/* <Route path="/" component={LoggedInLandingHero} /> */}
                    <LoggedInLandingFooter />
                  </div>
                );
              } else {
                return (
                  <div id="landingMasterContainer">
                    <LoggedOutLandingNavbar />
                    <LoggedOutLandingHero />
                    <LoggedOutLandingFooter />
                  </div>
                );
              }
            }}
          </Query>
        )}
      </ApolloConsumer>
    </div>
  );
};

export default withRouter(LandingMaster);
