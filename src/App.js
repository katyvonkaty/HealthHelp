import React from "react";
import People from "./containers/People"
import axios from "axios"


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <People />
      </div>
    )
  }
}

export default App;
