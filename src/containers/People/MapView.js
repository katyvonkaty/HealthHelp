import React, { PureComponent } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Container, Col, Row, Item, Button } from "reactstrap";
import Geocoder from "react-mapbox-gl-geocoder";

const mapStyle = {
  width: "100%",
  height: 600,
};

const TOKEN = process.env.REACT_APP_API_KEY;

const mapboxApiKey = TOKEN;

const params = {
  country: "us",
};




const CustomPopup = ({index, marker, closePopup, remove}) => {
  return (
    <Popup
      latitude={marker.latitude}
      longitude={marker.longitude}
      onClose={closePopup}
      closeButton={true}
      closeOnClick={false}
      offsetTop={-30}
     >
     <p>{marker.name}</p>
    <div>
      <Button color="secondary" onClick={() => remove(index)}>Remove</Button>
    </div>
    </Popup>
  )};


  const CustomMarker = ({index, marker, openPopup}) => {
      return (
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}>
          <div className="marker" onClick={() => openPopup(index)}>
            <span><b>{index + 1}</b></span>

          </div>

        </Marker>
    )};


class MapView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 40.7557,
        longitude: -73.8831,
        zoom: 15,
      },
      tempMarker:null,
      markers:[],
      selectedIndex:null
    };
  }



  onSelected = (viewport, item) => {
    this.setState({
      viewport,
      tempMarker: {
        name: item.place_name,
        longitude: item.center[0],
        latitude: item.center[1],
      },
    });
  };

    setSelectedMarker = (index) => {
        this.setState({ selectedIndex: index })
    }

    closePopup = () => {
        this.setSelectedMarker(null)
    };

    openPopup = (index) => {
        this.setSelectedMarker(index)
    }

  add = () => {
      var { tempMarker } = this.state
      this.setState(prevState => ({
         markers: [...prevState.markers, tempMarker],
         tempMarker: null
       }))
  }

  remove = (index) => {
    this.setState(prevState => ({
      markers: prevState.markers.filter((marker, i) => index !== i),
      selectedIndex: null
    }))
  }


  render() {
    const { viewport, tempMarker, markers, selectedIndex } = this.state;
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <h2>Mapbox Tutorial</h2>
          </Col>
        </Row>
        <Row className="py-8">
          <p> Search to see </p>
          <Col xs={8}>
            <Geocoder
              mapboxApiAccessToken={mapboxApiKey}
              onSelected={this.onSelected}
              viewport={viewport}
              hideOnSelect={true}
              value=""
              queryParams={params}
            />
            <Button color="primary" onClick={this.add}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/light-v10"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({ viewport })}
            >
            <Marker
              latitude={40.7557} longitude={-73.8831}>
              <div className="marker" >
                <span><b>{1}</b></span>
              </div>
            </Marker>
            <Marker
              latitude={40.7557} longitude={-73.8740}>
              <div className="marker" >
                <span><b>{2}</b></span>
              </div>
            </Marker>
            { tempMarker &&
              <Marker
                longitude={tempMarker.longitude}
                latitude={tempMarker.latitude}>
                <div className="marker temporary-marker"><span></span></div>
              </Marker>
            }
            {
              this.state.markers.map((marker, index) => {
                return(
                  <CustomMarker
                    key={`marker-${index}`}
                    index={index}
                    marker={marker}
                    openPopup={this.openPopup}

                  />
                 )
              })
            }
            {
          selectedIndex !== null &&
           <CustomPopup
             index={selectedIndex}
             marker={markers[selectedIndex]}
             closePopup={this.closePopup}
             remove={this.remove}
            />
        }
            </ReactMapGL>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MapView;
