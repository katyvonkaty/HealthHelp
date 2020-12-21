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
          axios.get("https://jsonplaceholder.typicode.com/users/" + this.props.match.params.id)
            .then(response => {
              this.setState({profile: response.data})
            })
          }
        }
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}> One Sec!</p>;

        if(this.props.id){
          post = <p style={{textAlign: "center"}}> Loading </p>
        }

        if ( this.state.profile ) {
          post =
          <Aide
          name = {this.state.profile.name}
          username = {this.state.username}
          email= {this.state.profile.email}
          street = {this.state.profile.address.street}
          phone = {this.state.profile.phone}
          website={this.state.profile.website}
          companyName={this.state.profile.company.name}

          />
        }

        return post;
    }
}

export default FullPerson;
