import React from "react";
import { BrowserRouter } from "react-router-dom"

import AideHome from "./containers/People/AideHome"


class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <AideHome />
      </div>
      </BrowserRouter>

    )
  }
}

export default App;
