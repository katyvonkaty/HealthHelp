import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Button, Item,Image, Icon, Label } from "semantic-ui-react";

const Aide = (props) => (
  <Container text>
    <Item.Group>
      <Item>
        <Item.Content>
          <Image src="" />
          <Item.Header>
            <h1> {props.name}</h1>
            <h3> {props.phone}</h3>{" "}
          </Item.Header>{" "}
          <br />
          <Label> Email: {props.email} </Label>
          <Label> Email: {props.website} </Label>
          <Button floated="right" basic color="blue" onClick={props.clicked}>
            View Profile
          </Button>
        </Item.Content>
      </Item>
    </Item.Group>
  </Container>
);

export default withRouter(Aide);
