import React from "react";
import { Link } from "react-router-dom";
import { Query, ApolloConsumer } from "react-apollo";
import { FETCH_USER } from "../../../graphql/queries"
// import { VERIFY_USER } from "../../../graphl/mutations"

class UserProfileCard extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props)
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
                      <div>following</div>
                      <div>followers</div>
                      <div>routes</div>
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