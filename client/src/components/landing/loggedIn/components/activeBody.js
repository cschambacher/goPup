import React from "react";
import { FETCH_ROUTES } from "../../../graphql/queries";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

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

  shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
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

              return this.shuffle(data.routes.map(({ _id, title, start, end }) => {
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
              }).slice(0, 50)).slice(0,3).map(result => {
                const doggos = [
                  'https://image.flaticon.com/icons/svg/1820/1820810.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820858.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820778.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820885.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820794.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820814.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820845.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820789.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820812.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820785.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820797.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820821.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820791.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820839.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820780.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820783.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820861.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820803.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820899.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820818.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820777.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820873.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820901.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820855.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820903.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820842.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820851.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820825.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820876.svg',
                  'https://image.flaticon.com/icons/svg/1820/1820870.svg'
                ]
                
                const dogAvatar = this.shuffle(doggos)[0]
                const poopCount = this.shuffle([1,2,3,4,5,6,7,8,9,10,3,4,7,8,9,12,10,2,5,7,8,9,3,2,10,11,13])[0]

                return (
                  <Link 
                    key={result._id} 
                    style={{ "textDecoration": "none" }}
                    className="routeRecommendationCard" 
                    to={`/routes/${result._id}`}
                  >
                    <div className="flex-center">
                      <img className="doggoAvatar" src={dogAvatar} alt="Cute doggo icon!" />
                    </div>

                    <div className="flex-center doggoRouteTitle">
                      {result.title.length > 12 ? result.title.slice(0, 12) + "..." : result.title}
                    </div>

                    <div className="flex-center">
                      <div className="doggoRoutePoopIcon">
                        <i className="fas fa-poop smolIcon"></i>
                      </div>
                      <div>
                        {poopCount} püps
                      </div>
                      <div className="doggoRoutePoopIcon">
                        <i className="fas fa-poop"></i>
                      </div>
                    </div>
                    
                    <div className="doggoRouteFooter flex-center">
                      <small>
                        {result.distance < 20 ? "Only " : ""}
                        {result.distance > 50 && result.distance < 100 ? "Darn, " : ""}
                        {result.distance >= 100 ? "Yikes, " : ""}
                        {result.distance} km away!
                      </small>
                    </div>
                  </Link>
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