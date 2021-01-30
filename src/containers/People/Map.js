
import * as React from 'react';
import ReactMapGL, {Popup, ScaleControl} from 'react-map-gl';


const TOKEN = process.env.REACT_APP_API_KEY

const scaleControlStyle= {
  left: 20,
  bottom: 100
};


function Map() {
  const [viewport, setViewport] = React.useState({
    longitude: -73.8831,
    latitude: 40.7557,
    zoom: 14

  });
  const [showPopup, togglePopup] = React.useState(true);



  return (
    <ReactMapGL {...viewport}
        mapboxApiAccessToken={TOKEN}
        width="100vw" height="80vh"
        zoom={14}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/mapbox/light-v10"
         >
         <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />

      {showPopup && <Popup
          latitude={40.7557}
          longitude={-73.8831}
          closeButton={true}
          closeOnClick={true}
          anchor="top" >
          <div>You are here</div>
        </Popup>}

    </ReactMapGL>
  );
}



export default Map;
