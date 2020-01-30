import React from "react";
import { Link } from "react-router-dom";
import { Query, ApolloConsumer } from "react-apollo";
import { FETCH_USER } from "../../../graphql/queries"
// import { VERIFY_USER } from "../../../graphl/mutations"

class UserProfileCard extends React.Component {
  render() {
    return (
      <div id="landingHeroUserProfileCard">
        <ApolloConsumer>
          {client => (
            <Query query={FETCH_USER} variables={{ id: this.props.currUserId }}>
              { ({ data }) => {
                
                if(!data) return null;
                return (
                  <div>
                    <div id="userCardIcon" className="flex-center">
                      <i className="fas fa-paw"></i>
                    </div>
                    <div className="flex-center">
                      {data.user.username}
                    </div>
                    <div className="flex-around">
<<<<<<< HEAD
                      <div><small>Routes</small></div>
                    </div>
                    <div className="flex-around">
                      <div>{data.user.routes.length}</div>
=======
                      <div>following</div>
                      <div>followers</div>
                      <div>
                        routes
                      <div>{data.user.routes.length}</div>
                      </div>
>>>>>>> c9a7e2648179fd4bfe38bdd3dafa81defe2547c1
                    </div>
                  </div>
                )
              }}
            </Query>
          )}
        </ApolloConsumer>
        <Link 
          style={{ "textDecoration": "none" }}
          to="/routes/new"
        >
          <div id="userCardFooter" className="flex-between">
            <div><small>Add a route</small></div>
            <div><i className="fas fa-chevron-right"></i></div>
          </div>
        </Link>
      </div>
    )
  }
}

export default UserProfileCard;