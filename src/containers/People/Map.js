
import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';


const TOKEN = process.env.REACT_APP_API_KEY




function Map() {
  const [viewport, setViewport] = React.useState({
    longitude: -73.8831,
    latitude: 40.7557,
    zoom: 14
  });



  return (
    <ReactMapGL {...viewport}
        mapboxApiAccessToken={TOKEN}
        width="100vw" height="80vh"
        zoom={11}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/mapbox/light-v10"
         >

         <Marker
           latitude={40.77850} longitude={-73.9228} onClick={()=> alert("hi")}>

           <img className="imgMarker" src='https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-12/king-cake-scones.jpg?itok=RsTpmMHZ'/>
         </Marker>

         <Marker
           latitude={40.7769} longitude={-73.8740}
           >
           <img className="imgMarker" src='https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-12/king-cake-scones.jpg?itok=RsTpmMHZ'/>
         </Marker>

         <Marker
           latitude={40.7455} longitude={-73.9587}
           >
           <img className="imgMarker" src='https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-12/king-cake-scones.jpg?itok=RsTpmMHZ'/>
         </Marker>


    </ReactMapGL>
  );
}



export default Map;
