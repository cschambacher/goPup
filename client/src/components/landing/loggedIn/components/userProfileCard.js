import React from "react";
import { Link } from "react-router-dom";

class UserProfileCard extends React.Component {
  render() {
    return (
      <div id="landingHeroUserProfileCard">
        <div id="userCardIcon" className="flex-center">
          <i class="fas fa-paw"></i>
        </div>
        <div className="flex-center">
          username
        </div>
        <div className="flex-around">
          <div>following</div>
          <div>followers</div>
          <div>routes</div>
        </div>
        <Link 
          style={{ "text-decoration": "none" }}
          to="/routes/new"
        >
          <div id="userCardFooter" className="flex-between">
            <div><small>Add a route</small></div>
            <div><i class="fas fa-chevron-right"></i></div>
          </div>
        </Link>
      </div>
    )
  }
}

export default UserProfileCard;