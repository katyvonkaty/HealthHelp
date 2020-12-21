import React, { Component } from 'react';
import axios from "axios"
import Home from './Home';
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
              <Route path="/" exact component= {Home} />
              <Route path="/"  component= {AideSearch} />
              <Route path="/:id" component= {FullPerson} />
            </Switch>
            </div>
        );
    }
}

export default AideHome;
