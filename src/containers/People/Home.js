import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ContainerText from "./ContainerText";

import SecondContainer from "./SecondContainer";
// import {map} from "./Map";
import AideSearch from "./AideSearch";
import Maps from "./Map";

const Home = (props) => (
  <>
    <Navbar />
    <ContainerText />
    <SecondContainer />
      <ContainerText />
    <Maps />
    <AideSearch />
    <Contact />

  </>
);

export default Home;
