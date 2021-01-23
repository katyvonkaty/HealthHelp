import React, { Component } from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'
import AideSearch from './AideSearch';
import Home from './Home';
import { Link } from 'react-scroll'
import FullPerson from './FullPerson';

// const ScrollLink = Scroll.ScrollLink

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
        <Link
          href="#about"
          to="about"
          activeClass="active"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
            About
          </Link>
        </Menu.Item>

        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        >
        <Link
          href="#magic"
          to="magic"
          activeClass="active"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
            How It Works
          </Link>
        </Menu.Item>

        <Menu.Item position="right">
          <Button floated="right">
            <Link
              href="#contact"
              to="contact"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
               Contact Us
              </Link>
            </Button>
        </Menu.Item>


      </Menu>

    )
  }
}
