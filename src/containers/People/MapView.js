import React, { PureComponent } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import { Container, Col, Row } from "reactstrap";
import Geocoder from "react-mapbox-gl-geocoder";
import { Icon, Input, Button } from 'semantic-ui-react'

const mapStyle = {
  width: "100%",
  height: 600,
};

const TOKEN = process.env.REACT_APP_API_KEY;

// const TOKEN = "pk.eyJ1Ijoia2F0aWVpbnRlbGxpZ2VudCIsImEiOiJja2tpaGRoYWQwM3R1MnFxYTYyemx0Ym1lIn0.acG14rBKgjYuCUTi4r46qA"
const mapboxApiKey = TOKEN;

const params = {
  country: "us",
};

const navControlStyle= {
  right: 10,
  top: 10
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
        zoom: 10,
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
      <Container fluid={true} >

        <Row className="py-8 texting">
        <h1 className="bigHeader"> Are You Sick of People Speaking Their Mind? </h1>
          <h3> Search the Map to Avoid Freedom of Speech Havens</h3>
          <p> If you're area is not on the map - add your address below and our people will contact you.</p>

          <Col sm={6}>
        <Input type="text" placeholder='Search...'>
            <Geocoder
              mapboxApiAccessToken={mapboxApiKey}
              onSelected={this.onSelected}
              viewport={viewport}
              hideOnSelect={true}
              value=""
              className="ui input"
              queryParams={params}>
              <Icon name='users' />
              </Geocoder>
              </Input>


          <Button color="primary" onClick={this.add}>
            Add <Icon disabled name='search' />
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
            index={1}
              openPopup={this.openPopup}
              marker = {1}
              latitude={40.7557} longitude={-73.8740}>
              <div className="marker" >
                <span><b>{2}</b></span>
              </div>
            </Marker>
            <Marker
            index={1}
              openPopup={this.openPopup}
              marker = {1}
              latitude={40.7557} longitude={-73.8140}>
              <div className="marker" >
                <span><b>{3}</b></span>
              </div>
            </Marker>
            <Marker
            index={1}
              openPopup={this.openPopup}
              marker = {1}
              latitude={40.7557} longitude={-73.8040}>
              <div className="marker" >
                <span><b>{4}</b></span>
              </div>
            </Marker>

            <Marker
            index={1}
              openPopup={this.openPopup}
              marker = {1}
              latitude={40.7557} longitude={-73.2040}>
              <div className="marker" >
                <span><b>{5}</b></span>
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
        <NavigationControl style={navControlStyle} />

            </ReactMapGL>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MapView;
