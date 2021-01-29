/* eslint-disable max-len */

import React, {createRef} from "react";
import { Grid, Container, Sticky,Ref } from "semantic-ui-react";
import product from "../../assets/images/product.png";

class SecondContainer extends React.Component {
  contextRef = createRef()

  render() {
    return(
      <div>
        <Container
          fluid
          stackable
          textAlign="center"
          className="secondContainer"
          id="about"
        >

          <Grid>
          <Ref innerRef={this.contextRef}>
            <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={10} centered>
                <h2> Searching for Health Care Efficiently </h2>
                <p>
                  {" "}

  	               The device benefits from three scientific breakthroughs. First, the shrinking of the size of pixels on display screens to almost the size of the wavelength of light. It can detect small changes in the body and beam them back at high resolution.{" "}
                </p>
                <Sticky context={this.contextRef} pushing >
                <img src={product} style={{width:"100%"}} />
                </Sticky>
              </Grid.Column>
            </Grid.Row>
              </Ref>
          </Grid>

        </Container>
      </div>
    )
  }

}

export default SecondContainer;
