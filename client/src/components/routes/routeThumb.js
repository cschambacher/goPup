import React from "react";
// import { Query } from "react-apollo";
import { Map } from "react-leaflet";
// import { Map, TileLayer, Marker } from "react-leaflet";
// import { FETCH_ROUTES } from "../graphql/queries";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// var myIcon = L.icon({
//   iconUrl:
//     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",
//   iconSize: [25, 41],
//   iconAnchor: [12.5, 41],
//   popupAnchor: [0, -41]
// });


class Thumbnail extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      zoom: 12,
      start: this.props.start,
      end: this.props.end,
      title: this.props.title,
      distance: "",
    }

    this.getCoords = this.getCoords.bind(this);
    // this.getDistance = this.getDistance.bind(this);
    this.distanceInKmBetweenEarthCoordinates = this.distanceInKmBetweenEarthCoordinates.bind(this)

  }
    
    getCoords(str){
        return str.split(",").map(coord => parseFloat(coord))
    }

    // setDistance(e){
    //       var routes = e.routes;
    //       var summary = routes[0].summary;
    //       var distance = summary.totalDistance.toString()
    //       console.log(typeof distance === "string")
    //       // this.setState({ distance: distance })
    // }

    // getDistance(str){
    //   this.setState({ distance: str })
    // }

    componentDidMount(){
      
    var map = L.map(`map-${this.props.idx}`).setView([0, 0], 12);
    
    // debugger
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);
    
      // let distance;
      // console.log("distance:",distance)

      var control = L.Routing.control({
        waypoints: [
          L.latLng(
            this.getCoords(this.state.start)[0],
            this.getCoords(this.state.start)[1]
          ),
          L.latLng(
            this.getCoords(this.state.end)[0],
            this.getCoords(this.state.end)[1]
          )
        ],
        
        // useZoomParameter: false,
        // fitSelectedRoutes: 'smart',
        // routeWhileDragging: false
      }).addTo(map);
      control.hide();
      control
        .on("routesfound", function(e) {
          var routes = e.routes;
          // console.log("routes:", routes)
          var summary = routes[0].summary;
          console.log("summary:", summary)
          var distance = (summary.totalDistance/1000).toString()
          // console.log(typeof distance === "string")
          // alert("distance:" + distance + " km")
          // console.log(distance)
          // this.setState({ distance: distance })
          // this.getDistance(distance)
        },
        console.log("state-dist",this.state.distance) )
        // console.log(this.state.distance)    
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

    render(){
      // console.log(this.props)
      const startLat = parseFloat(this.state.start.split(",")[0]);
      const startLon = parseFloat(this.state.start.split(",")[1]);
      const endLat = parseFloat(this.state.end.split(",")[0]);
      const endLon = parseFloat(this.state.end.split(",")[1]);

        return (
          <div>
            <div id={`map-${this.props.idx}`}>
              <Map
                className="map-card"
                center={this.getCoords(this.state.start)}
                zoom={this.state.zoom}
              >
                {/* <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}

                {/* <Marker position={this.getCoords(this.state.start)} icon={myIcon} />
                <Marker position={this.getCoords(this.state.end)} icon={myIcon} /> */}

              </Map>
            </div>
              <div className="map-thumb-footer">
                <h6>{this.state.title}</h6>
                <div className="map-thumb-footer-dist-cont">
                <div className="map-thumb-footer-dist">
                    {this.distanceInKmBetweenEarthCoordinates(
                      startLat,
                      startLon,
                      endLat,
                      endLon
                      )} km
                  </div>
                  <label>Distance</label>
                </div>
              </div>
          </div>
          );
          
      }
  }
  
export default Thumbnail;