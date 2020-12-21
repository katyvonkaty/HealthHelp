import React from 'react'
import { Container,Button, Header, Grid } from 'semantic-ui-react'

const ContainerText = () => (
  <Container style={{ height: "60vh" }} stackable  center className="header">
    <Grid verticalAlign='middle' columns={1} centered>
      <Grid.Column>
        <Container text>
          <Header centered style={{ fontSize: "56px" }}>Hi, We Want to Disrupt the Home Health Care Industry.</Header>
          <p>
            Why should finding reliable and quality home health aides be such a challenge? <br /> Sign up to learn more.
          </p>
          <Grid.Column  style={{ textAlign: "center" }}>
            <Button > Talk to us </Button>
          </Grid.Column>
        </Container>
      </Grid.Column>
    </Grid>
    </Container>
)

export default ContainerText
