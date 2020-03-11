import React from "react";
import { Link } from "react-router-dom";
import { FETCH_ROUTES } from "../graphql/queries";
import { Query } from "react-apollo";
import "leaflet-control-geocoder/dist/Control.Geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

import Thumbnail from "./routeThumb";
import LoggedInLandingNavbar from "../landing/loggedIn/landingNavbar";
import LoggedInLandingFooter from "../landing/loggedIn/landingFooter";
import IndexSearch from "./indexSearch";


class MapIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      zoom: 12,
      location: {
        lat: 37.799,
        lng: -122.4014
      },
      startCoords: "",
    }

  }


  render(){
    const position = [this.state.location.lat, this.state.location.lng]
    return (
      <div>
        <LoggedInLandingNavbar />
        <div className="routeIndex-header">
          <h2>Routes</h2>
          <button className="routeIndex-create-button">
            <Link to="/routes/new">Create New Route</Link>
          </button>
          <IndexSearch />
        </div>


        <ul className="map-index-cont">
          <Query query={FETCH_ROUTES}>
            {({ loading, error, data }) => {
              if (loading) return <h1>Loading...</h1>;
              if (error) return <h1>{error}</h1>;

              return data.routes.map(({ _id, title, start, end, description }) => (
                <li className="map-card-li" key={_id}>
                  <Thumbnail 
                    idx={`${_id}`} 
                    start={start} 
                    end={end} 
                    title={title}
                    description={description}
                  />
                </li>
              ));
            }}
          </Query>
        </ul>
        <LoggedInLandingFooter />
      </div>
    );
  }
}

export default MapIndex;