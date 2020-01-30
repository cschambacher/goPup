// https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png

import React from "react";
import { Route } from "react-router-dom";
import "./components/landingHero.css"

import ActiveBodyCard from "./components/activeBody"
import SideBarCard from "./components/sidebarCTA"
import UserProfileCard from "./components/userProfileCard"

class LandingHero extends React.Component{

  
  render(){
    return(
      <div id="landingHeroContainer">
        <div id="landingHeroLeftContainer" className="landingHeroBox">
          {/* <Route path="/" component={UserProfileCard} /> */}
          <UserProfileCard currUserId={this.props.currUserId}/>
        </div>

        <div id="landingHeroCenterContainer" className="landingHeroBox">
          <ActiveBodyCard />
        </div>

        <div id="landingHeroRightContainer" className="landingHeroSideBox">
          <SideBarCard />
        </div>
      </div>
    )
  }
}

export default LandingHero;