import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ContainerText from "./ContainerText";

import SecondContainer from "./SecondContainer";
// import {map} from "./Map";
import AideSearch from "./AideSearch";
import MapView from "./MapView";


const Home = (props) => (
  <>
    <Navbar />
    <ContainerText />
    <AideSearch />

    <SecondContainer/>
<MapView />
<Contact />

  </>
);

export default Home;
