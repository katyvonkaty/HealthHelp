import React from "react";
import { BrowserRouter } from "react-router-dom";

import Home from "./containers/People/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
