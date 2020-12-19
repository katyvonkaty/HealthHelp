import React, { Component } from 'react';
import axios from "axios"
import Aide from './Aide';
import AideSearch from './AideSearch';
import FullPerson from './FullPerson';
import { Route, NavLink, Switch } from "react-router-dom"
// import classes from "people.css"


class AideHome extends Component {

    render () {

        return (
          <div className="people">
          <header>
            <nav>
              <ul>
                <li><NavLink
                activeStyle={{color:"red"}} to="/"> Home </NavLink> </li>
                <li> <NavLink to="/:phone">Profile </NavLink> </li>
              </ul>
            </nav>

          </header>
            <Switch>
              <Route path="/" exact component= {AideSearch} />
              <Route path="/:id" component= {FullPerson} />
            </Switch>
            </div>
        );
    }
}

export default AideHome;



// <Route path="/" exact render={() => <h1> Home </h1>} />
// <Route path="/" render={() => <h1> Home2 </h1>} />
