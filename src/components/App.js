import React from "react";
import { Button } from 'semantic-ui-react'
import axios from "axios"
import PeopleList from "./PeopleList"
import LoaderExampleText from "./Loader"
import FormExampleSubcomponentControl from "./Form"


class App extends React.Component {

  state = {
    people: [],
    isLoading:false
  }

  onSearchSubmit = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=30&nat=us")
    this.setState({
      people: response.data.results})
  }


  render(){
    return (
      <div className="ui container">
      <Button primary onClick={ () => {
        this.onSearchSubmit();

      }}> Search Aides </Button>


      <FormExampleSubcomponentControl />
      <PeopleList people={this.state.people} />


      </div>
    );
  }
}

// this.onSearchSubmit} {() => {this.showLoader}

export default App;
