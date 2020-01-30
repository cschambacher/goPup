import React from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { Map, TileLayer } from "react-leaflet";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "bootstrap/dist/css/bootstrap.css";
import "reactstrap/dist/reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./map.css";

import { Mutation } from "react-apollo";
import { NEW_ROUTE } from "../graphql/mutations";
import { FETCH_ROUTES } from "../graphql/queries";

import LoggedInLandingNavbar from "../landing/loggedIn/landingNavbar";
import LoggedInLandingFooter from "../landing/loggedIn/landingFooter";

// var myIcon = L.icon({
//   iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",
//   iconSize: [25, 41],
//   iconAnchor: [12.5, 41],
//   popupAnchor: [0, -41],
//   // shadowUrl: "my-icon-shadow.png",
//   // shadowSize: [68, 95],
//   // shadowAnchor: [22, 94]
// });



class MapAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {
        lat: 37.799,
        lng: -122.4014
      },
      zoom: 3,
      haveUserLocation: false,
      navToggle: false,
      navIsOpen: false,
      title: "",
      description: "",
      startCoords: "",
      endCoords: "",
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.isOpen = this.isOpen.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.renderModal = this.renderModal.bind(this);
  }

  leafletElement() {
    var map = L.map("mapId").setView([0, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    L.Routing.control({
      waypoints: [
        L.latLng(this.state.location.lat, this.state.location.lng),
        L.latLng(this.state.location.lat, this.state.location.lng)
      ],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim()
    })
      .on(
        "routeselected",
        function(e) {
          var route = e.route;

          var start = Object.values(route.inputWaypoints[0].latLng).toString();
          var end = Object.values(route.inputWaypoints[1].latLng).toString();

          this.setState({ startCoords: start });
          this.setState({ endCoords: end });
        }.bind(this)
      )
      .addTo(map);
  }

  componentDidMount() {
    // gets user location (if they allow it) with browser
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          haveUserLocation: true,
          zoom: 13
        },this.leafletElement);
      },
      () => {
        fetch("https://ipapi.co/json")
          .then(res => res.json())
          .then(location => {
            this.setState({
              location: {
                lat: location.latitude,
                lng: location.longitude
              },
              haveUserLocation: true,
              zoom: 13
            }, this.leafletElement)
          });
      },
      
      );
  }

  toggle(e) {
    e.preventDefault();
    if (this.state.navToggle) {
      this.setState({ navToggle: true });
    } else {
      this.setState({ navToggle: false });
    }
  }

  isOpen(e) {
    e.preventDefault();
    if (this.state.navIsOpen) {
      this.setState({ navIsOpen: true });
    } else {
      this.setState({ navIsOpen: false });
    }
  }

  handleSubmit(e, newRoute) {
    e.preventDefault();
    newRoute({
      variables: {
        title: this.state.title,
        description: this.state.description,
        start: this.state.startCoords,
        end: this.state.endCoords
      }
    })
    this.closeModal();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  openModal() {
    this.setState({ modal: true });
  }

  closeModal() {
    this.setState({ modal: false });
  }
  updateCache(cache, { data: { newRoute } }) {
    let routes;
    try {
      routes = cache.readQuery({ query: FETCH_ROUTES });
    } catch (err) {
      return;
    }

    if (routes) {
      let routeArray = routes.routes;

      cache.writeQuery({
        query: FETCH_ROUTES,
        data: { routes: routeArray.concat(newRoute) }
      });
    }
  }

  renderModal(e) {
    // e.preventDefault();
    if (!this.state.modal) {
      return null;
    } else {
      return (
          <Mutation
            mutation={NEW_ROUTE}
            update={(cache, data) => this.updateCache(cache, data)}
          >
            {(newRoute, { data }) => (
              <div className="modal-wrapper">
                <div className="modal1">
                  <form
                    className="modal-form"
                    onSubmit={e => this.handleSubmit(e, newRoute)}
                  >
                    <h2 className="modal-header">Save</h2>
                    <p>
                      Enter a name and description for your route below.
                    </p>
                    <div className="modal-input-cont">
                      <label>Route Name(required)</label>
                      <input
                        type="text"
                        placeholder="Route Name"
                        onChange={this.update("title")}
                      />
                    </div>
                    <div className="modal-input-cont">
                      <label>Description</label>
                      <textarea
                        placeholder="Description"
                        onChange={this.update("description")}
                      />
                    </div>
                    <div className="modal-button-cont">
                      <button
                        className="modal-button cancel"
                        onClick={this.closeModal}
                      >
                        Cancel
                      </button>
                      <button className="modal-button save">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </Mutation>

      );
    }
  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    return (
      <div>          
        <LoggedInLandingNavbar />

        <div className="map-cont">
          <Navbar className="map-nav" color="light" light expand="md">
            {/* <NavbarBrand href="/">goPup</NavbarBrand> */}
            <div className="map-search-cont">
              <input className="map-searchbar" type="text" placeholder="Search" />
              <i className="fas fa-search"></i>
            </div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <div className="map-button">
                    <i className="fas fa-undo"></i>
                    <p>Undo</p>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="map-button">
                    <i className="fas fa-times"></i>
                    <p>Undo</p>
                  </div>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/corina-s/goPup/wiki">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <button className="map-save-button" onClick={this.openModal}>
                Save
              </button>
            </Collapse>
          </Navbar>
          {this.renderModal()}
          <div id="mapId">
            
            <Map className="map" center={position} zoom={this.state.zoom}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* {this.state.haveUserLocation ? (
                <Marker position={position} icon={myIcon}>

                  <Popup>Route Name</Popup>
                </Marker>
              ) : (
                " "
              )} */}
            </Map>
          </div>
        </div>
        <LoggedInLandingFooter />
      </div>
    );
  }
}

export default MapAPI;