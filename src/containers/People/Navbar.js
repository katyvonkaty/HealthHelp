import React, { Component } from "react";
import { Menu, Button, Icon, Sticky } from "semantic-ui-react";
import { Link } from "react-scroll";
import { Route, Switch } from "react-router-dom"
import AideSearch from "./AideSearch"
import FullPerson from "./FullPerson"
import AideHome from "./AideHome"
// const ScrollLink = Scroll.ScrollLink

export default class Navbar extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Sticky>
        <Menu attached='top'stackable>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            style={{ fontWeight: "800" }}
            onClick={this.handleItemClick}
          >
            <Link
              to="/"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >

              {" "}
              <Icon name="medkit" /> HealthHelp
            </Link>
          </Menu.Item>

          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          >
            <Link
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
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          >
            <Link
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
      </Sticky>



    );


  }
}
