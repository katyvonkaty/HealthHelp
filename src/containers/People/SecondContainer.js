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
                <h2> Freedom of Speech Is Outdated </h2>
                <p>
Censors seek to limit freedom of thought and expression by restricting spoken words, printed matter, symbolic messages, freedom of association, books, art, music, movies, television programs, and Internet sites. When the government engages in censorship, First Amendment freedoms are implicated.                </p>

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
