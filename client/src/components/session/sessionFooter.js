import React from "react";
import { Link } from "react-router-dom";
import "../session/session.css";

class SessionFooter extends React.Component {
  render() {
    return (
      <div id="sessionFooterCont">
        <div id="session-navGroup">
          <div id="sessionLogoFont">goPup</div>
          <p>&copy; 2020 goPup</p>
        </div>
        <div id="session-navGroup">
          <div>
            <h5>Menu</h5>
          </div>
        </div>
        <div id="session-navGroup">
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
        <div id="session-navGroup">
          <div>
            <h5>Get Started</h5>
            <ul>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionFooter;
