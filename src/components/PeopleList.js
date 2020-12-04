import React from "react";
import { Grid, Card, Icon, Image, Container } from 'semantic-ui-react'


const PeopleList = (props) => {
  const peopleList = props.people.map( (person) => {
    return(

      <Card>
        <Image src={person.picture.large} wrapped ui={false} />
        <Card.Content>
          <Card.Header key={person.name.last}>{person.name.first} {person.name.last}</Card.Header>
          <Card.Meta>
            <span className='date'>{person.location.city}, {person.location.state}, </span>
              <span className='date'>{person.location.country}, {person.location.postcode}</span>
          </Card.Meta>
          <Card.Description>
           {person.gender} | {person.dob.age}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name='user' />
            Phone: {person.phone} | Cell: {person.cell}
        </Card.Content>
      </Card>


    )
  })

  return(
    <Container>
      <Grid columns='four' divided centered stackable>
        <Grid.Row>
            {peopleList}
         </Grid.Row>
       </Grid>
       </Container>

  )
}


export default PeopleList
