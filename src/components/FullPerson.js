import React, { Component } from 'react';
import axios from 'axios';
import Person from '../components/Person';



class FullPerson extends Component {
    state = {
        loadedPerson: []
    }

    componentDidUpdate () {
      if(this.props.phone) {
        if( this.state.loadedPerson.length === 0 || (this.state.loadedPerson && this.props.phone !== this.props.phone)){
          axios.get('https://randomuser.me/api/?nat=us&phone=' + this.props.phone )
              .then( response => {
                this.setState({loadedPerson:response.data.results})
              });
            }
        }
      }


    render () {
        let post = <p style={{ textAlign: 'center' }}> Please select a Person!</p>;

        const loadedPerson = this.state.loadedPerson.map( person => {
          return <Person
                picture= {person.picture.large}
                  firstName= {person.name.first}
                  city = {person.location.city}
                  state={person.location.state}
                   />
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
