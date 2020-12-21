import React from 'react';
import {withRouter} from "react-router-dom";
import { Container, Card, Icon, Button, Item, Label, Image} from 'semantic-ui-react'

const Aide = (props) => (
  <Container text>
    <Item.Group>
      <Item>
        <Item.Content>
            <Button floated='right' basic color="blue" onClick={props.clicked}>View Profile</Button>
            <Item.Header> <h1> {props.name} </h1> </Item.Header> <br />
            <Label> Cell: {props.phone} </Label>
            <Card.Meta>
              <span className='date'>Currenty Employed:{props.companyName}</span>
            </Card.Meta>
            <Card.Description>
              Living: {props.street},{props.city},{props.zip}
            </Card.Description>
            <Card.Content extra>
                Website: {props.website} | Email:{props.email}
            </Card.Content>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
);





export default withRouter(Aide);
