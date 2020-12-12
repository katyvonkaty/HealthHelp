import React, { useState, useEffect } from "react";
import Reveal from "./Reveal";
import PeopleList from "./PeopleList";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export default function Loading() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);


  const helloHandeler = () => {
    setLoading(!loading);
    setShow(!show);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  if (loading) return <Reveal />;

  return (
    <div className="App">
      <div className="bodyContainer">
        {!show && <button onClick={helloHandeler}>Click me</button>}
        {show && "ahh"}
      </div>
    </div>
  );
}

//useEffect
//const function vs export default functopm
