import React from "react";
import { FETCH_ROUTES } from "../../../graphql/queries";
import { Query } from "react-apollo";

class ActiveBodyCard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      location: {
        lat: "",
        lng: ""
      }
    }

    this.distanceInKmBetweenEarthCoordinates = this.distanceInKmBetweenEarthCoordinates.bind(this)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      },
      () => {
        fetch("https://ipapi.co/json")
          .then(res => res.json())
          .then(location => {
            this.setState({
              location: {
                lat: location.latitude,
                lng: location.longitude
              }
            })
          });
      },

    );
  }

  degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    const earthRadiusKm = 6371;

    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);

    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Number((earthRadiusKm * c).toFixed(1));
  }

  render() {
    return (
      <div id="landingHeroActiveBodyCard">
        <div id="routesNearYouHeader">RECOMMENDED ROUTES</div>
        <div id="routesNearYouBody">
          <Query query={FETCH_ROUTES}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>{error}</div>;

              return data.routes.map(({ _id, title, start, end }) => {
                const startLat = parseFloat(start.split(",")[0]);
                const startLng = parseFloat(start.split(",")[1]);
                const endLat = parseFloat(end.split(",")[0]);
                const endLng = parseFloat(end.split(",")[1]);

                const myLat = this.state.location.lat
                const myLng = this.state.location.lng

                const distFromStart = this.distanceInKmBetweenEarthCoordinates(startLat, startLng, myLat, myLng)

                const distFromEnd = this.distanceInKmBetweenEarthCoordinates(endLat, endLng, myLat, myLng)

                const result = {
                  distance: distFromEnd,
                  point: "end", 
                  _id: _id,
                  title: title
                }

                if (distFromStart < distFromEnd) {
                  result["point"] = "start"
                  result["distance"] = distFromStart
                }

                return result

                
              }).sort((a, b) => {
                return (a.distance > b.distance) ? 1 : -1
              }).slice(0, 10).map(result => {
                // console.log(result.distance)
                return (
                  <div className="routeRecommendationCard" key={result._id}>
                    {result.title}
                    <br />
                    distance:{" "}
                    {result.distance} km
                  </div>
                );
              })
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default ActiveBodyCard;