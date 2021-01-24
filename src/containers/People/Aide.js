import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Button, Item,Image, Icon, Label } from "semantic-ui-react";

const Aide = (props) => (
  <Container text>
    <Item.Group>
      <Item>
        <Item.Content>
          <Image src={props.picture} />
          <Item.Header>
            <h1> {props.firstName} {props.lastName}</h1>{" "}
          </Item.Header>{" "}
          <br />
          <Label> Email: {props.email} </Label>
          <Button floated="right" basic color="blue" onClick={props.clicked}>
            View Profile
          </Button>
        </Item.Content>
      </Item>
    </Item.Group>
  </Container>
);

export default withRouter(Aide);
