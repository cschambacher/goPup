import React from "react";
import { Link } from "react-router-dom";
import { Map } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";


class Thumbnail extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      zoom: 12,
      idx: this.props.idx,
      start: this.props.start,
      end: this.props.end,
      title: this.props.title,
      distance: "",
    }

    this.getCoords = this.getCoords.bind(this);
  }
    
    getCoords(str){
        return str.split(",").map(coord => parseFloat(coord))
    }


    componentDidMount(){
    var map = L.map(`map-${this.props.idx}`)
      .setView([0, 0], 16)
      // .setMinZoom(16)
      // .setMaxZoom(16)
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);
    
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
        // fitSelectedRoutes: false,
        // routeWhileDragging: false
      }).addTo(map);

      control.hide();
      control
        .on("routesfound", function(e) {
          var routes = e.routes;
          var summary = routes[0].summary;
          // console.log("summary:", summary)
          var distance = (summary.totalDistance/1000).toFixed(2)
          // console.log(typeof distance === "string")
          // alert("distance:" + distance + " km")
          this.setState({ distance: distance }, 
            // () => console.log("state-dist", this.state.distance)
            )
        }.bind(this))
    }

    render(){
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
              <h6><Link to={`/routes/${this.state.idx}`}>{this.state.title}</Link></h6>
                <div className="map-thumb-footer-dist-cont">
                  <div className="map-thumb-footer-dist">
                  {this.state.distance} <small>km</small>
                  </div>
                  <label>Distance</label>
                </div>
              </div>
          </div>
          );
          
      }
  }
  
export default Thumbnail;