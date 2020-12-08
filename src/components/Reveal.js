import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Reveal = () => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/paragraph.png' />
    </Segment>
  </div>
)

export default Reveal
