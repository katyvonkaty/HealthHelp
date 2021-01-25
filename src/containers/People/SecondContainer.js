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
                  How often do you need to find reliable health care? We all know
                  how hectic life can be; between navigatiting transportation
                  issues, scheduling challenges and simple easy communication. Would
                  it make your life easier to log on and search within your area for
                  an extra hand when necessary? We are hoping to simply the process.{" "}
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
