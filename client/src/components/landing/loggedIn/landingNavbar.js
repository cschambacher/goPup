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
                        <div id="logoFont">goPüp</div>
                        <div id="landingNavbarSearch">
                          <i className="fas fa-search"></i>
                        </div>
                        <div 
                          id="landingNavbarMenuDashboard"
                          className="landingNavbarMenu landingNavbarSelected"
                        >
                          Routes
                          <div
                            id="landingBarDashboardDrop"
                            className="landingBarDrop"
                          >
                            <div id="mask"></div>
                            <div className="dropItem">Create</div>
                            <div className="dropItem">Search</div>
                            <div className="dropItem">Explore</div>
                            <div className="dropItem">Stats</div>
                          </div>
                        </div>
                        
                      </div>
                      <div id="landingNavbarLeftContainer">
                        <div
                          id="landingNavbarMenuUser"
                          className="landingNavbarMenu"
                        >
                          <i className="far fa-user-circle"></i>
                          <div
                            id="landingBarUserDrop"
                            className="landingBarDrop"
                          >
                            <div id="userDropMask"></div>
                            <div
                              className="dropItem"
                              id="sessionLogoutButton"
                              onClick={e => {
                                e.preventDefault();
                                localStorage.removeItem("auth-token");
                                client.writeData({ data: { isLoggedIn: false } });
                                props.history.push("/login");
                              }}
                            >
                              Logout
                            </div>
                          </div>
                        </div>
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
