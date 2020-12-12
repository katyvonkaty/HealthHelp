import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Aide from './Aide';
import FullPerson from './FullPerson';


const AideProfile = (props) => {
  return(
    <div>
      <FullPerson phone={props.location.pathname}  />
      <h1> hi </h1>
    </div>

  )
}

export default AideProfile
