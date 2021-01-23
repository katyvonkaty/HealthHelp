/* eslint-disable max-len */

import React from "react";
import { Grid, Container } from "semantic-ui-react";
import product from "../../assets/images/product.png";

const SecondContainer = () => (
  <div>
    <Container
      fluid
      stackable
      textAlign="center"
      className="secondContainer"
      id="about"
    >
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>
          <Grid.Column width={10} centered>
            <h1> Searching for Health Care Efficiently </h1>
            <p>
              {" "}
              How often do you need to find reliable health care? We all know
              how hectic life can be; between navigatiting transportation
              issues, scheduling challenges and simple easy communication. Would
              it make your life easier to log on and search within your area for
              an extra hand when necessary? We are hoping to simply the process.{" "}
            </p>
            <img src={product} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default SecondContainer;
