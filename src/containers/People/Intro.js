import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Intro = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={4}>
        <Image src='https://images.pexels.com/photos/1786244/pexels-photo-1786244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
      </Grid.Column>
      <Grid.Column width={12}>
        <p>n influenza pandemic is a global outbreak of a new influenza A virus that is very different from current and recently circulating human seasonal influenza A viruses. Influenza A viruses are constantly changing, making it possible on very rare occasions for non-human influenza viruses to change in such a way that they can infect people easily and spread efficiently from person to person. Read more about pandemics in recent history. </p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      <Image src='https://images.pexels.com/photos/1786244/pexels-photo-1786244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
      </Grid.Column>
      <Grid.Column width={10}>
      <p>n influenza pandemic is a global outbreak of a new influenza A virus that is very different from current and recently circulating human seasonal influenza A viruses. Influenza A viruses are constantly changing, making it possible on very rare occasions for non-human influenza viruses to change in such a way that they can infect people easily and spread efficiently from person to person. Read more about pandemics in recent history. </p>
      </Grid.Column>
      <Grid.Column width={3}>
      <Image src='https://images.pexels.com/photos/1786244/pexels-photo-1786244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Intro
