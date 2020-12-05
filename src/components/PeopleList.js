import React from "react";
import { Icon, Button,Image, Item, Label} from 'semantic-ui-react'
import Loader from "./Loader"
// import Spinner from "./Spinner"


const PeopleList = (props) => {
  const peopleList = props.people.map( (person) => {
    return(
      <Item.Group divided>
          <Item>
          <Item.Image style={{borderRadius: "50%"}} src={person.picture.large} wrapped ui={false} />
            <Item.Content>
              <Item.Header as='a'>{person.name.first} {person.name.last}</Item.Header> <br />
              <Button circular small color='facebook' icon='facebook' />
              <Button circular color='twitter' icon='twitter' />
              <Button circular color='linkedin' icon='linkedin' />
              <Button circular color='google plus' icon='google plus' />
              <Button floated='right' basic color="blue">Send Message</Button>


              <Item.Meta>
                <span className='cinema'>{person.location.city}, {person.location.state}, {person.location.country}, {person.location.postcode} </span>
              </Item.Meta>
              <Item.Description> {person.gender} | {person.dob.age} </Item.Description>
              <Item.Extra>
                <Label>Phone: {person.phone} | Cell: {person.cell}</Label>
                <Label icon='globe' content='Additional Languages' />
              </Item.Extra>
          </Item.Content>

        </Item>
    </Item.Group>
      )
    })




  return (
    <div>
      {peopleList}
    </div>

  )
}


export default PeopleList
