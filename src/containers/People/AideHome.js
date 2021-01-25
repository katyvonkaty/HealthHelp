import React, { Component } from 'react';
import Home from './Home';
import AideSearch from './AideSearch';
import FullPerson from './FullPerson';
import { Route, Switch } from "react-router-dom"
// import classes from "people.css"


class AideHome extends Component {

    render () {

        return (
          <>

            <Switch>
              <Route path="/" exact component= {Home} />
              <Route path="/"  component= {AideSearch} />
              <Route path="/:id" component= {FullPerson} />
            </Switch>
            </>
            // </div>
        );
    }
}

export default AideHome;
