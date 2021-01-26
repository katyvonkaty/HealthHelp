import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import ContainerText from "./ContainerText";
import Profile from "./Profile";

import SecondContainer from "./SecondContainer";

import AideSearch from "./AideSearch";

const Home = (props) => (
  <>
    <Navbar />
    <ContainerText />
    <Profile />
    <SecondContainer />
    <AideSearch />
    <Contact />

  </>
);

export default Home;
