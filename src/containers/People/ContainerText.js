import React from 'react'
import { Container,Button, Header, Grid } from 'semantic-ui-react'

const ContainerText = () => (
  <Container style={{ height: "100%" }} stackable  center className="header">
    <Grid verticalAlign='middle' columns={1} centered>
      <Grid.Column>
        <Container text>
          <Header centered style={{ fontSize: "56px" }}>Hi, We Want to Disrupt the Home Health Care Industry.</Header>
          <p>
            Why should finding reliable and quality home health aides be such a challenge? <br /> Sign up to learn more.
          </p>
          <Grid.Column  style={{ textAlign: "center", marginBottom:"190px" }} className="bottom">
            <Button ><a href="mailto:healthhelpnyc@gmail.com"> Talk to us </a> </Button>
          </Grid.Column>
        </Container>
      </Grid.Column>
    </Grid>
    </Container>
)

export default ContainerText
