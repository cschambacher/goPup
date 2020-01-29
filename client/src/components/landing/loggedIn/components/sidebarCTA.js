import React from "react";
// import {Link} from "react-router-dom"

class SideBarCard extends React.Component {
  render() {
    return (
      <div id="landingHeroSideBarCard">
        <div className="sideCTA">
          <div className="sideCTAIcon">
            <i className="fas fa-paw"></i>
          </div>
          <div className="sideCTABody">
            <div className="sideCTAHeaderText">Dogs Are Neat</div>
            <div className="sideCTABodyText">Need a cute pup in your life? Better click now!</div>
            <a
              style={{ "textDecoration": "none" }}
              href="https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="CTALink">
                <small>Mega good boy!</small>
              </div>
            </a>
          </div>
        </div>

        <div className="sideCTA">
          <div className="sideCTAIcon">
            <i className="fas fa-bug"></i>
          </div>
          <div className="sideCTABody">
            <div className="sideCTAHeaderText">Report A Bug</div>
            <div className="sideCTABodyText">Found an issue? Put that sucker in our repo and we'll take care of it!</div>
            <a 
              style={{ "textDecoration": "none" }} 
              href="https://github.com/corina-s/goPup/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="CTALink">
                <small>Report that dumb bug!</small>
              </div>
            </a>
          </div>
        </div>

      </div>
    )
  }
}

export default SideBarCard;