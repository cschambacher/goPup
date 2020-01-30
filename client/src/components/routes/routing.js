import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

class RoutingMachine extends MapLayer {
  componentWillMount() {
    super.componentWillMount();
    this.leafletElement.addTo(this.props.map);
  }

  render(){
    return null;
  }

  createLeafletElement(props) {
    const { map, from, to } = this.props;
    
    var leafletElement = L.Routing.control({
      waypoints: [
        L.latLng(from[0], from[1]),
        L.latLng(to[0], to[1]),
      ],
      routeWhileDragging: true,
    })
    .addTo(map);
    return leafletElement;
  }
}

export default RoutingMachine;