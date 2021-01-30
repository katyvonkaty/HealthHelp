
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/People/Home";

import Profile from "./containers/People/Profile";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
