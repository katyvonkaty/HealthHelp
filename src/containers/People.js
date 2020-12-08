import React, { Component } from 'react';
import axios from "axios"

import Person from '../components/Person';
import FullPerson from '../components/FullPerson';
import NewPost from '../components/NewPost';


class People extends Component {

  state= {
    people: [],
    selectedPerson:null
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=5&nat=us")
        .then(response => {
          this.setState({people: response.data.results})
          console.log(response.data.results);
        })
  }

  personSelectedHandler = (phone) => {
    this.setState({selectedPerson: phone})
  }

    render () {

      const people = this.state.people.map( person => {
        return <Person
          key={person.id.value}
          picture= {person.picture.large}
          firstName= {person.name.first}
          lastName= {person.name.last}
          city = {person.location.city}
          state={person.location.state}
          zip = {person.location.postcode}
          cell = {person.cell}
          clicked={() => this.personSelectedHandler(person.phone)}
           />
      })
        return (
            <div>
                <section className="Posts">
                {people}
                </section>
                <section>
                    <FullPerson phone={this.state.selectedPerson} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default People;
