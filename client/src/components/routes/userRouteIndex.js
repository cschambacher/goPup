import React from "react";
import { Link } from "react-router-dom";

class UserRouteIndex extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
      <div id="usersRoutes">
      {this.props.routes.map((route) => {
        if (!route.user) return null
        if(route.user._id === this.props.currUserId){
          return (
            <Link
              key={route._id}
              style={{ "textDecoration": "none" }}
              className="routeRecommendationCard"
              to={`/routes/${route._id}`}
            >
              <div className="" key={route._id}>
                <div className="flex-center">
                  <img className="doggoAvatar" src={route.doggoPic} alt="Cute doggo icon!" />
                </div>
                <div className="doggoRouteTitle">
                  {route.title.length > 12 ? route.title.slice(0, 12) + "..." : route.title}
                </div>
                <div>
                  {route.description.length > 48 ? route.description.slice(0, 48) + "..." : route.description}
                </div>
              </div>
            </Link>
          )
        }}
      )}
      </div>
    )}
}

export default UserRouteIndex;