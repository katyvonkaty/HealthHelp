import React, { Component } from 'react';
import axios from 'axios';
import Aide from './Aide';



class FullPerson extends Component {
    state = {
        profile: null
    }

  componentDidMount(){
      console.log(this.props);
      if (this.props.match.params.id){
        if ( !this.state.profile || ( this.state.profile && this.state.profile.id !== this.props.id) ) {
          axios.get("https://dummyapi.io/data/api/user?limit=5", {
            headers: {
              "app-id": "600d9cabc9d5e51f4f50c151"
            }} + this.props.match.params.id)
            .then(response => {
              this.setState({profile: response.data})
            })
          }
        }
    }

    render () {
        let post = null

        if(this.props.id){
          post = <p style={{textAlign: "center"}}> Loading </p>
        }

        if ( this.state.profile ) {
          post =
          <Aide
          firstName = {this.state.profile.firstName}
          lastName = {this.state.lastName}
          email= {this.state.profile.email}
          picture = {this.state.profile.picture}


          />
        }

        return post;
    }
}

export default FullPerson;

// <Aide
// name = {this.state.profile.name}
// username = {this.state.username}
// email= {this.state.profile.email}
// street = {this.state.profile.address.street}
// phone = {this.state.profile.phone}
// website={this.state.profile.website}
// companyName={this.state.profile.company.name}
//
// />
