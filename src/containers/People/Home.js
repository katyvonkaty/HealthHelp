import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ContainerText from "./ContainerText";
import TableExamplePadded from "./Table";

import SecondContainer from "./SecondContainer";
// import {map} from "./Map";
import AideSearch from "./AideSearch";
import MapView from "./MapView";

const Home = (props) => (
  <>
    <Navbar />
    <ContainerText />

    <SecondContainer />
      <TableExamplePadded />
       <AideSearch />
    <MapView />
    <Contact />
  </>
);

export default Home;
