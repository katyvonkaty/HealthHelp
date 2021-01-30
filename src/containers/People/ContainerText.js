import React from "react";
import { Container, Button, Header, Grid } from "semantic-ui-react";
import TypeWriterEffect from 'react-typewriter-effect';


const ContainerText = () => (
  <Container
    style={{ height: "100%" }}
    stackable
    id="header"
    center
    className="header"
  >
    <Grid verticalAlign="middle" columns={1} centered>
      <Grid.Column>
        <Container text>
          <Header centered style={{ fontSize: "56px", textAlign:"center",color:"#002375" }}>
          <TypeWriterEffect
           textStyle={{ fontFamily: 'Red Hat Display' }}
           startDelay={100}
           className="header"
           textAlign="center"
           cursorColor="black"
           text="Invisibility cloak metamaterials make their way into products"
           typeSpeed={100}
         />

          </Header>
          <p>
          Wave-bending materials revamp satellite antennas and drones — as a start
          </p>
          <Grid.Column
            style={{ textAlign: "center", marginBottom: "190px" }}
            className="bottom"
          >
            <Button>
              <a href="mailto:healthhelpnyc@gmail.com"> Talk to us </a>{" "}
            </Button>
          </Grid.Column>
        </Container>
      </Grid.Column>
    </Grid>
  </Container>
);

export default ContainerText;
