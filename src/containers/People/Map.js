
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
