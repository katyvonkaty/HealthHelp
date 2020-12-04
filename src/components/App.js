import React from "react";
import axios from "axios"
import PeopleList from "./PeopleList"


// import baseURL from "../api/baseURL";



class App extends React.Component {

  state = {people: []}

  onSearchSubmit = async () => {
    const response = await axios.get("https://randomuser.me/api/?gender=female&results=30&nat=us")
    this.setState({people: response.data.results})
    console.log(response.data.results);

  }

  render(){
    return (
      <div className="ui container">
      <button onClick={this.onSearchSubmit}> click me </button>
      <PeopleList people={this.state.people} />
      </div>
    );
  }
}

export default App;
