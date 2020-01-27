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
            <ul>
              <li>
                <Link to="#">About (dead link)</Link>
              </li>
              <li>
                <Link to="#">Features (dead link)</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy (dead link)</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions (dead link)</Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="landing-navGroup">
          <div>
            <h5>Follow</h5>
            <ul>
              <li>
                <i className="fab fa-facebook-f icon"></i>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
              <li>
                <i className="fas fa-camera-retro icon"></i>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li>
                <i className="fab fa-twitter icon"></i>
                <a href="https://www.twitter.com">Twitter</a>
              </li>
              <li>
                <i className="fab fa-youtube icon"></i>
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
            <ul>
              <li><Link to="/locals">Local (dead link)</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingFooter;