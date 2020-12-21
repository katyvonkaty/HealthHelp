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
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      this.setState({people: response.data})
      console.log(response.data);
    }

    // onSearchSubmit = async() => {
    //   const [firstResponse, secondResponse] = await Promise.all ([
    //     axios.get("https://jsonplaceholder.typicode.com/users"),
    //     axios.get("https://randomuser.me/api")
    //   ])
    //   this.setState({people: firstResponse.data, photos: secondResponse.data.results})
    //   console.log(secondResponse.data.results);
    // }


    personSelected = (id) => {
      // this.setState({selectedPerson: id})
      this.props.history.push({pathname: "/" + id})
    }


render(){


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
        <div className="magic">
        <h1 style={{textAlign:"center"}}> How Does This Magic Work? </h1>
            <Button primary massive
              style={{display:"block", margin:"0 auto"}}
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
