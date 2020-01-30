import React from "react";

class UserRouteIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      {this.props.routes.map((route) => {
        if(route.user._id === this.props.currUserId){
          return (
            <div className="routeRecommendationCard" key={route._id}>
              <div className="flex-center">
                <img className="doggoAvatar" src={route.doggoPic} alt="Cute doggo icon!" />
              </div>
              <div className="doggoRouteTitle">
                {route.title}
              </div>
              <div>
                {route.description}
              </div>
            </div>
          )
        }}
      )}
      </div>
    )}
}

export default UserRouteIndex;