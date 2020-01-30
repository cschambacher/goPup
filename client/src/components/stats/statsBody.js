import React from "react";
import { FETCH_ROUTES } from "../graphql/queries";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

class StatsBody extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
      location: {
        lat: "",
        lng: ""
      }
    }

    this.distanceInKmBetweenEarthCoordinates = this.distanceInKmBetweenEarthCoordinates.bind(this)
    this.routeDistance = this.routeDistance.bind(this)
    this.poopCount = this.poopCount.bind(this)
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

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  routeDistance (routes, operator) {
    let furthestRoute = null
    routes.forEach(route => {
      const startLat = parseFloat(route.start.split(",")[0]);
      const startLng = parseFloat(route.start.split(",")[1]);
      const endLat = parseFloat(route.end.split(",")[0]);
      const endLng = parseFloat(route.end.split(",")[1]);

      const myLat = this.state.location.lat
      const myLng = this.state.location.lng

      const distFromStart = this.distanceInKmBetweenEarthCoordinates(startLat, startLng, myLat, myLng)

      const distFromEnd = this.distanceInKmBetweenEarthCoordinates(endLat, endLng, myLat, myLng)

      const result = route
      result.distance = distFromEnd

      if (distFromStart < distFromEnd) {
        result.distance = distFromStart
      }

      if (!furthestRoute) {
        furthestRoute = result
      } else {
        if (operator === "<") {
          if (furthestRoute.distance < result.distance) {
            furthestRoute = result
          }
        } else if (operator === ">") {
          if (furthestRoute.distance > result.distance) {
            furthestRoute = result
          }
        }
        
      }
      
    })
    return furthestRoute
  }

  poopCount (routes, operator) {
    let poops = null
    routes.forEach(route => {
      if (!poops) {
        poops = route
      } else {
        if (operator === "<") {
          if (poops.poop < route.poop) {
            poops = route
          }
        } else if (operator === ">") {
          if (poops.poop > route.poop) {
            poops = route
          }
        }
      }
    })
    return poops
  }


  render () {
    return <div id="landingStatsContainer">
        <Query query={FETCH_ROUTES}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading stats...</div>;
            if (error) return <div>{error}</div>;

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

            data.routes.forEach(route => {
              route.doggoPic = this.shuffle(doggos)[0]
            })

            // const poopCount = result.poop
            const furthestRoute = this.routeDistance(data.routes, "<")
            const closestRoute = this.routeDistance(data.routes, ">")
            const mostPoop = this.poopCount(data.routes, "<")
            const leastPoop = this.poopCount(data.routes, ">")
            console.log(data)
            return (
              <div id="statsContainer" className="flex-around">
                <div className="landingStatsBox">
                  <Link
                    key={furthestRoute._id}
                    style={{ "textDecoration": "none" }}
                    className="statCard"
                    to={`/routes/${furthestRoute._id}`}
                  >
                    <div className="flex-center">
                      <img className="doggoAvatar" src={furthestRoute.doggoPic} alt="Cute doggo icon!" />
                    </div>

                    <div className="flex-center doggoRouteTitle">
                      {furthestRoute.title.length > 12 ? furthestRoute.title.slice(0, 12) + "..." : furthestRoute.title}
                    </div>

                    <div className="flex-center">
                      <div className="flex-center">
                        Wow, such far!
                      </div>
                    </div>

                    <div className="doggoRouteFooter flex-center">
                      <small>
                        {furthestRoute.distance} km away!
                      </small>
                    </div>
                  </Link>
                </div>
                <div className="landingStatsBox">
                  <Link
                    key={closestRoute._id}
                    style={{ "textDecoration": "none" }}
                    className="statCard"
                    to={`/routes/${closestRoute._id}`}
                  >
                    <div className="flex-center">
                      <img className="doggoAvatar" src={closestRoute.doggoPic} alt="Cute doggo icon!" />
                    </div>

                    <div className="flex-center doggoRouteTitle">
                      {closestRoute.title.length > 12 ? closestRoute.title.slice(0, 12) + "..." : closestRoute.title}
                    </div>

                    <div className="flex-center">
                      <div className="flex-center">
                        The nearest of the near!
                      </div>
                    </div>

                    <div className="doggoRouteFooter flex-center">
                      <small>
                        {closestRoute.distance} km away!
                      </small>
                    </div>
                  </Link>
                </div>
                <div className="landingStatsBox">
                  <Link
                    key={mostPoop._id}
                    style={{ "textDecoration": "none" }}
                    className="statCard"
                    to={`/routes/${mostPoop._id}`}
                  >
                    <div className="flex-center">
                      <img className="doggoAvatar" src={mostPoop.doggoPic} alt="Cute doggo icon!" />
                    </div>

                    <div className="flex-center doggoRouteTitle">
                      {mostPoop.title.length > 12 ? mostPoop.title.slice(0, 12) + "..." : mostPoop.title}
                    </div>

                    <div className="flex-center">
                      <div className="flex-center">
                        Incredibly püppy.
                      </div>
                    </div>

                    <div className="doggoRouteFooter flex-center">
                      <small>
                        {mostPoop.poop} püps!
                      </small>
                    </div>
                  </Link>
                </div>
                <div className="landingStatsBox">
                  <Link
                    key={leastPoop._id}
                    style={{ "textDecoration": "none" }}
                    className="statCard"
                    to={`/routes/${leastPoop._id}`}
                  >
                    <div className="flex-center">
                      <img className="doggoAvatar" src={leastPoop.doggoPic} alt="Cute doggo icon!" />
                    </div>

                    <div className="flex-center doggoRouteTitle">
                      {leastPoop.title.length > 12 ? leastPoop.title.slice(0, 12) + "..." : leastPoop.title}
                    </div>

                    <div className="flex-center">
                      <div className="flex-center">
                        Not so püppy.
                      </div>
                    </div>

                    <div className="doggoRouteFooter flex-center">
                      <small>
                        {leastPoop.poop} püps!
                      </small>
                    </div>
                  </Link>
                </div>
              </div>
            )
          }}
        </Query>
    </div>
  };
};

export default StatsBody;
