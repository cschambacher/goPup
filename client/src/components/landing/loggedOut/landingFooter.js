import React from "react";
import { Link } from "react-router-dom";


class LandingFooter extends React.Component{

  render(){
    return (
      <div id="landingFooterCont">
        <div id="landing-navGroup">
          <div id="landingLogoFont">goPup</div>
          <p>&copy; 2020 goPup</p>
        </div>
        <div id="landing-navGroup">
          <div>
            <h5>Menu</h5>
          </div>
        </div>
        <div id="landing-navGroup">
          <div>
            <h5>Follow</h5>
            <ul>
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://www.twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://www.youtube.com">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="landing-navGroup">
          <div>
            <h5>Help</h5>
            <ul>
              <li>
                <a href="https://www.youtube.com/watch?v=PztO-OvzRyg">
                  goPup Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="landing-navGroup">
          <div>
            <h5>More</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingFooter;