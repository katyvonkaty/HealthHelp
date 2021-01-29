import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ContainerText from "./ContainerText";

import SecondContainer from "./SecondContainer";

import AideSearch from "./AideSearch";

const Home = (props) => (
  <>
    <Navbar />
    <ContainerText />
    <SecondContainer />
    <AideSearch />
    <Contact />

  </>
);

export default Home;
