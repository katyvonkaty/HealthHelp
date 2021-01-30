// import React from "react";
// import ReactDOM from "react-dom";
// import mapboxgl from "mapbox-gl";
//
// mapboxgl.accessToken =
//   "pk.eyJ1Ijoia2F0aWVpbnRlbGxpZ2VudCIsImEiOiJja2tpaGRoYWQwM3R1MnFxYTYyemx0Ym1lIn0.acG14rBKgjYuCUTi4r46qA";
//
// class Map extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lng: -73.8823,
//       lat: 40.7553,
//       zoom: 12
//     };
//   }
//
//
//   componentDidMount() {
//     const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [this.state.lng, this.state.lat],
//       zoom: this.state.zoom,
//     });
//     map.on("move", () => {
//       this.setState({
//         lng: map.getCenter().lng.toFixed(4),
//         lat: map.getCenter().lat.toFixed(4),
//         zoom: map.getZoom().toFixed(2),
//       });
//     });
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <div className='sidebarStyle'>
//             Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
//             {this.state.zoom}
//           </div>
//         </div>
//         <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
//       </div>
//     );
//   }
// }
//
// export default Map;
import * as React from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
const TOKEN = process.env.REACT_APP_API_KEY




function Map() {
  const [viewport, setViewport] = React.useState({
    longitude: -73.8831,
    latitude: 40.7557,
    zoom: 14
  });
  const [showPopup, togglePopup] = React.useState({
    showPopup:true
});

  return (
    <ReactMapGL {...viewport}
        mapboxApiAccessToken={TOKEN}
        width="100vw" height="80vh"
         >
      {showPopup && <Popup
          latitude={40.7557}
          longitude={-73.8831}
          closeButton={true}
          closeOnClick={true}
          onClick={() => this.setState({showPopup:false})}
          anchor="top" >
          <div>You are here</div>
        </Popup>}

    </ReactMapGL>
  );
}

export default Map;
