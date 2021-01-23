import React from "react"
import FullPerson from './FullPerson';
import Aide from './Aide';
import axios from "axios";
import {Route} from "react-router-dom";

import { Button } from 'semantic-ui-react'


class AideSearch extends React.Component {
    state = {
      people: [],
      showing: true
    }

    onSearchSubmit = async() => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      const people = response.data.slice(0,5);
      const updatedPeople = people.map( person => {
        return {
          ...person
        }
      })
      this.setState({people: updatedPeople})
      console.log(response.data);
    }


    personSelected = (id) => {
      // this.setState({selectedPerson: id})
      this.props.history.push( "/profile/" + id)
    }



render(){
    const {showing} = this.state
      const people = this.state.people.map( person => {
        return (
          // <Link to={"/" + person.id}>
            <Aide
            name = {person.name}
            username = {person.username}
            email= {person.email}
            street = {person.address.street}
            city = {person.address.city}
            zip = {person.address.zip}
            phone = {person.phone}
            website={person.website}
            companyName={person.company.name}
            {...this.props}
            clicked={() => this.personSelected(person.id)}
            />
          // </Link>
        )
      })

      return (
        <div className="magic" id="magic">
          <h1 style={{textAlign:"center"}}> Get Home Health Help Today</h1>
          <h4 style={{textAlign:"center"}}> Click the button to see a list of eligible healthcare aides in your area.</h4>

              <Button primary massive
                className="buttonSearch"
                style={{display:"block", margin:"0 auto"}}
                onClick=
                { () =>
                  {this.setState({ showing: !showing }); this.onSearchSubmit() }
                }>  Search Health Help

              </Button>

              <section className="Posts" stackable>
                { showing ? null : people }
              </section>
            <Route path="/:id" exact component={FullPerson} />
        </div>
      )
    }
}


export default AideSearch
