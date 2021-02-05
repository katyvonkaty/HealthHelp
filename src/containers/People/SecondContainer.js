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


                  	Now, the same technology is starting to be used in a number of commercial products. Because certain metamaterials can control electromagnetic waves, they can also be used to improve the performance of satellite antennas and sensors.
                </p>
                <Sticky context={this.contextRef} pushing >
                <img alt="productshot" src={product} style={{width:"100%"}} />
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
