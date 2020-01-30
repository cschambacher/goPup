import React from "react";
import { Link } from "react-router-dom";


class LandingFooter extends React.Component{

  render(){
    return (
      <div id="landingFooterCont">
        <div id="landing-navGroup">
          <div id="landingLogoFont">goPüp</div>
          <p>&copy; 2020 goPüp</p>
        </div>
        {/* <div id="landing-navGroup">
          <div>
            <h5>Menu</h5>
            <ul>
              <li>
                <a 
                  href="https://github.com/corina-s/goPup/wiki/Proposal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About (dead link)
                </a>
              </li>
              <li>
                <a 
                  href="/features"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Features (dead link)
                </a>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy (dead link)</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions (dead link)</Link>
              </li>
            </ul>
          </div>
        </div> */}
        <div id="landing-navGroup">
          <div>
            <h5>Developers</h5>
            <ul>
              <li>
                <i className="fab fa-github icon"></i>
                <a href="https://github.com/corina-s" target="_blank" rel="noopener noreferrer">
                  corina-s
                </a>
              </li>
              <li>
                <i className="fab fa-github icon"></i>
                <a href="https://github.com/lee025" target="_blank" rel="noopener noreferrer">
                  lee025
                </a>
              </li>
              <li>
                <i className="fab fa-github icon"></i>
                <a href="https://github.com/jessewarren-aa" target="_blank" rel="noopener noreferrer">
                  jessewarren-aa
                </a>
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
                  goPüp Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="landing-navGroup">
          <div>
            <h5>Credits</h5>
            <ul>
              <li>
                <a 
                  href="https://www.flaticon.com/authors/freepik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Freepik Icons
                </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingFooter;