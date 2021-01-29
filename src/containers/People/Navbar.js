import React, { Component } from "react";
import { Menu, Button, Sticky } from "semantic-ui-react";
import { Link } from "react-scroll";
import { Route, Switch } from "react-router-dom"
import AideSearch from "./AideSearch"
import Profile from "./Profile"
import logo from "../../assets/images/logo.png"
import FullPerson from "./FullPerson"
// const ScrollLink = Scroll.ScrollLink

export default class Navbar extends Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Sticky>
        <Menu attached='top'stackable fluid widths={5}>


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
          <Menu.Item>

          <img src= {logo} alt="logo" className="logo" />
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

          <Menu.Item>
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

          <Route path="/profile/" component={Profile} />


        </Menu>
      </Sticky>



    );


  }
}
