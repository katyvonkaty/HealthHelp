import React, { Component } from 'react';
import axios from 'axios';
import Aide from './Aide';
import {Link } from "react-router-dom"


class FullPerson extends Component {
    state = {
        loadedPerson: []
    }
//how is props being past to comp did mount
    componentDidMount () {
      if(this.props.phone) {
        if( this.state.loadedPerson.length === 0 || (this.state.loadedPerson && this.props.phone !== this.props.phone)){
          axios.get('https://randomuser.me/api/?nat=us&phone=' + this.props.phone )
              .then( response => {
                this.setState({loadedPerson:response.data.results})
              });
            }
        }
      }

      componentDidUpdate() {
        console.log(this.props);
      }

      personSelectedHandler = (phone) => {
        this.setState({selectedPerson: phone})
      }

      // personSelectedHandler = (phone) => {
      //   this.setState({selectedPerson: phone})
      // }

    render () {
        let post = <p style={{ textAlign: 'center' }}> Your conversation!</p>;

        const loadedPerson = this.state.loadedPerson.map( person => {
          return <Link to={"/"+ person.phone}>
            <Aide
            picture= {person.picture.large}
            firstName= {person.name.first}
            lastName= {person.name.last}
            city = {person.location.city}
            state={person.location.state}
            zip = {person.location.postcode}
            cell = {person.cell}
            clicked={() => this.personSelectedHandler(person.phone)}
             />
          </Link>
        })

        if ( this.props.phone ) {
            post = <div className="FullPost">
                  <h1>{loadedPerson}</h1>
                  <div className="Edit">
                      <button className="Delete">Delete</button>
                  </div>
                </div>
        }

        return post;
    }
}

export default FullPerson;
