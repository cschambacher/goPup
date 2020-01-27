// https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_1280.png

import React from "react";
import "./components/landingHero.css"

class LandingHero extends React.Component{
  render(){
    return(
      <div id="landingHeroContainer">

        <div id="landingHeroLeftContainer" class="landingHeroBox">
          Left bar
        </div>

        <div id="landingHeroCenterContainer" class="landingHeroBox">
          Middle bar
        </div>

        <div id="landingHeroRightContainer" class="landingHeroBox">
          Right bar
        </div>

      </div>
    )
  }
}

export default LandingHero;