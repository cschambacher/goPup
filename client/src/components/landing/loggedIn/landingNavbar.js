import React from "react";
import { Route, withRouter } from "react-router-dom";
import { Query, ApolloConsumer } from "react-apollo";
import { IS_LOGGED_IN } from "../../graphql/queries";
import SessionMaster from "../../session/sessionMaster";

const LandingNavbar = props => {
  return (
    <div className="LandingNavMainCont">
      <div className="LandingNavCont">
        <ApolloConsumer>
          {client => (
            <Query query={IS_LOGGED_IN}>
              {({ data }) => {
                if (data.isLoggedIn) {
                  return (
                    <div id="landingNavbarContainer">
                      <div id="landingNavbarLeftContainer">
                        <div id="logoFont">goPup</div>
                        <div id="landingNavbarSearch">
                          <i class="fas fa-search"></i>
                        </div>
                        <div 
                          id="landingNavbarMenuDashboard"
                          class="landingNavbarMenu"
                        >
                          Dashboard
                        </div>
                        <div 
                          id="landingNavbarMenuExplore"
                          class="landingNavbarMenu"
                        >
                          Explore
                        </div>
                      </div>
                      <div>
                        <button
                          className="landingNavButton"
                          onClick={e => {
                            e.preventDefault();
                            localStorage.removeItem("auth-token");
                            client.writeData({ data: { isLoggedIn: false } });
                            props.history.push("/login");
                          }}
                        >
                          Logout
                      </button>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <Route path="/login" component={SessionMaster} />
                    </div>
                  );
                }
              }}
            </Query>
          )}
        </ApolloConsumer>
      </div>
    </div>
  );
};
export default withRouter(LandingNavbar);
