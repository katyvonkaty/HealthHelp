/* eslint-disable max-len */

import React from 'react'
import { Grid, Container } from 'semantic-ui-react'

const SecondContainer = () => (
  <div>

  <Container fluid textAlign='center' className="secondContainer" id="about">
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}>
        </Grid.Column>
          <Grid.Column width={8} centered>
            <h1> Lets just search for home health care at the click of the button, shall we? </h1>
            <p>  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
              quis enim. Donec pe </p>
              <img alt="test" src="https://cdn.dribbble.com/users/104062/screenshots/7859787/media/939be6bdd89076dbcf9206511dc17798.png?compress=1&resize=1000x350" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default SecondContainer
