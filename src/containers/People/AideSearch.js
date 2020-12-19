import React from "react"
import FullPerson from './FullPerson';
import Aide from './Aide';
import axios from "axios";
import {Route, Link} from "react-router-dom";

import { Button } from 'semantic-ui-react'


class AideSearch extends React.Component {
    state = {
      people: []
    }

    onSearchSubmit = async() => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      this.setState({people: response.data})
      console.log(response.data);
    }


    personSelected = (id) => {
      this.setState({selectedPerson: id})
    }


    render() {
      const people = this.state.people.map( person => {
        return (
          <Link to={"/" + person.id}>
            <Aide
            name = {person.name}
            username = {person.username}
            {...this.props}
            clicked={() => this.personSelected(person.id)}
            />
          </Link>
        )
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
            <Route path="/:id" exact component={FullPerson} />
          </div>


      )
    }
}


export default AideSearch
