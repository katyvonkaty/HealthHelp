import React, { Component } from 'react';
import axios from 'axios';


class FullPerson extends Component {
    state = {
        profile: null
    }
//how is props being past to comp did mount
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
        let post = <p style={{ textAlign: 'center' }}> Profile!</p>;

        if(this.props.id){
          post = <p style={{textAlign: "center"}}> Loading </p>
        }

        if ( this.state.profile ) {
          post = <h1>{this.state.profile.name}</h1>
        }

        return post;
    }
}

export default FullPerson;
