import React from 'react';
import { Icon, Button, Item, Label, Image} from 'semantic-ui-react'


const person = (props) => (
  <Item.Group>
    <Item>
      <Image src={props.picture} />
        <Item.Content>
        <Button floated='right' basic color="blue" onClick={props.clicked}>Send Message</Button>
          <Item.Header as='a'>{props.firstName} {props.lastName}</Item.Header> <br />
          <Item.Meta>
            <span className='cinema'>{props.city}, {props.state}, {props.zip} </span>
          </Item.Meta>
          <Item.Extra>
            <Label> Cell: {props.cell}</Label>
            <Label icon='globe' content='Additional Languages' />  <br />
            <Button circular small color='facebook' icon='facebook' />
            <Button circular color='twitter' icon='twitter' />
            <Button circular color='linkedin' icon='linkedin' />
            <Button circular color='google plus' icon='google plus' />
          </Item.Extra>
      </Item.Content>
      </Item>
    </Item.Group>
);

export default person;
