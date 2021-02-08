import React, { Component } from "react";
import { Form, Container } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

class Contact extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (


      <Container fluid id="contact" className="contactForm">
        <Form className="testing">
          <h1 style={{ textAlign: "center", fontSize:"46px" }}> Sign Up for Early Access</h1>

          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
            <Form.Select
              fluid
              label="Gender"
              options={options}
              placeholder="Gender"
            />
          </Form.Group>
          
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
          />
          <Form.Button>
            <a href="mailto:healthhelpnyc@gmail.com">Submit </a>
          </Form.Button>
        </Form>
      </Container>


    );
  }
}

export default Contact;
