import React from "react"
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const TOKEN = process.env.REACT_APP_API_KEY

const Map = ReactMapboxGl({
  accessToken: TOKEN
});

function MapBoxGL() {

  let center =  [-0.120736, 51.5118219]


  return (
    <Map
    center = {center}
      style="mapbox://styles/mapbox/streets-v10"
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'harbor-15' }}>
        <Feature coordinates={[-73.8831, 40.7557]} />
      </Layer>
    </Map>
  )
}



export default MapBoxGL
