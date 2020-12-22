import React, { Component } from 'react'
import { Form, Container } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class Contact extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Container fluid  id="contact" className="contactForm">
      <Form className="testing">
      <h1 style={{textAlign:"center"}}> Sign Up for Early Access</h1>

        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>
        <Form.Group inline>
          <label>Role</label>
          <Form.Radio
            label='Caregiver'
            value='sm'
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Child'
            value='md'
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Spouse'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Button>Submit</Form.Button>
      </Form>
      </Container>
    )
  }
}

export default Contact
