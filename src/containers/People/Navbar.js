import React, { Component } from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'
import { Route, NavLink, Switch, Link } from "react-router-dom"
import AideSearch from './AideSearch';
import Home from './Home';

import FullPerson from './FullPerson';


export default class Navbar extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          style={{fontWeight:"800"}}
          onClick={this.handleItemClick}
        >
            <Icon name='medkit' /> HealthHelp
        </Menu.Item>
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
           About
        </Menu.Item>


        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        > How It Works
        </Menu.Item>

        <Menu.Item position="right">
           <Button floated="right">
             <a href="mailto:healthhelpnyc@gmail.com">
             Contact Us
            </a>
          </Button>
        </Menu.Item>



      </Menu>
    )
  }
}
