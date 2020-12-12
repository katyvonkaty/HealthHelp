import React from "react"
import FullPerson from './FullPerson';
import Aide from './Aide';
import axios from "axios";
import {Route} from "react-router-dom";

import { Button } from 'semantic-ui-react'


class AideSearch extends React.Component {
  state = {
    people: []
  }

  onSearchSubmit = async() => {
    const response = await axios.get("https://randomuser.me/api/?results=5&nat=us")
    this.setState({people: response.data.results})
  }

  // personSelectedHandler = (phone) => {
  //   this.setState({selectedPerson: phone})
  // }
  //phone is synymous with id to identify / differtiate users


    render() {
      const people = this.state.people.map( person => {
        return <Aide
          key={person.id.value}
          picture= {person.picture.large}
          firstName= {person.name.first}
          lastName= {person.name.last}
          city = {person.location.city}
          state={person.location.state}
          zip = {person.location.postcode}
          cell = {person.cell}
          // clicked={() => this.personSelectedHandler(person.phone)}
           />
      })

      return (
        <div>
            <Button massive primary
              onClick={ () => {
              this.onSearchSubmit() }}>
              Search Aides In Your Area </Button>
            <section className="Posts">
              {people}
            </section>
            <Route path="/:phone" exact component={FullPerson} />
          </div>


      )
    }
}


export default AideSearch
