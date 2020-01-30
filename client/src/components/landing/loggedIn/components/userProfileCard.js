import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { FETCH_USER } from "../../../graphql/queries"
// import { VERIFY_USER } from "../../../graphl/mutations"

class UserProfileCard extends React.Component {
  render() {
    return (
      <div id="landingHeroUserProfileCard">
        <div id="userCardIcon" className="flex-center">
          <i className="fas fa-paw"></i>
        </div>
        <div className="flex-center">
          {/* <Mutation mutation={VERIFY_USER}> */}
            <Query query={FETCH_USER}>
              {
                ({ data }) => {
                  console.log(data)
                  return (
                    <div>
                      username
                    </div>
                  );
                }
              }
            </Query>
          {/* </Mutation> */}
        </div>
        <div className="flex-around">
          <div>following</div>
          <div>followers</div>
          <div>routes</div>
        </div>
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