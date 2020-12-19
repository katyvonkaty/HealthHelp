import React from 'react';
import {withRouter} from "react-router-dom";
import { Container, Icon, Button, Item, Label, Image} from 'semantic-ui-react'


const Aide = (props) => (
  <Container text>
    <Item.Group>
      <Item>
        <Item.Content>
          <Button floated='right' basic color="blue" onClick={props.clicked}>View Profile</Button>
          <Item.Header as='a'>{props.name} </Item.Header> <br />
          <Label> Cell: {props.username}</Label>
        </Item.Content>
        </Item>
      </Item.Group>
    </Container>

);

export default withRouter(Aide);
