/* eslint-disable max-len */

import React from 'react'
import { Grid, Container } from 'semantic-ui-react'

const SecondContainer = () => (
  <div>

  <Container fluid stackable textAlign='center' className="secondContainer" id="about">
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
        </Grid.Column>
          <Grid.Column width={10} centered>
            <h1> Searching for Health Care Efficiently </h1>
            <p> How often do you need to find reliable health care? We all know how hectic life can be; between navigatiting transportation
            issues, scheduling challenges and simple easy communication. Would it make your life easier to log on and search within your area for an extra hand when necessary? We are hoping to simply the process. </p>
              <img alt="test" style={{marginBottom:"50px"}} src="https://cdn.dribbble.com/users/104062/screenshots/7859787/media/939be6bdd89076dbcf9206511dc17798.png?compress=1&resize=1000x350" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
)

export default SecondContainer
