import React from "react";
import { Link } from "react-router-dom";
import "../session/session.css";

class SessionFooter extends React.Component {
  render() {
    return (
      <div id="sessionFooterCont">
        <div id="session-navGroup">
          <div id="sessionLogoFont">goPüp</div>
          <p>&copy; 2020 goPüp</p>
        </div>
        <div id="session-navGroup">
          <div>
            <h5>Menu</h5>
            <ul>
              <li>
                <Link to="#">Features (dead link)</Link>
              </li>
              <li>
                <Link to="#">About (dead link)</Link>
              </li>
              <li>
                <Link to="#">Terms (dead link)</Link>
              </li>
              <li>
                <Link to="#">Privacy (dead link)</Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="session-navGroup">
          <div>
            <h5>Follow</h5>
            <ul>
              <li>
                <i className="fab fa-facebook-f icon"></i>
                <Link to="https://www.facebook.com">Facebook</Link>
              </li>
              <li>
                <i className="fas fa-camera-retro icon"></i>
                <Link to="https://www.instagram.com">Instagram</Link>
              </li>
              <li>
                <i className="fab fa-twitter icon"></i>
                <Link to="https://www.twitter.com">Twitter</Link>
              </li>
              <li>
                <i className="fab fa-youtube icon"></i>
                <Link to="https://www.youtube.com">YouTube</Link>
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
