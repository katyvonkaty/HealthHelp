import React from 'react'
import { Header, Table, Rating, Container } from 'semantic-ui-react'

const TableExamplePadded = () => (
  <div style={{backgroundColor:"white", padding:"20px"}}>
 <Container text>
  <Table celled padded >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Opinion Rating</Table.HeaderCell>
        <Table.HeaderCell>Effect</Table.HeaderCell>
        <Table.HeaderCell>Efficacy</Table.HeaderCell>
        <Table.HeaderCell>Consensus</Table.HeaderCell>
        <Table.HeaderCell>Comments</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            -C
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>Leanne Holworth</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={1} maxRating={4} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          70% <br />
          <a href='#'>View Profile</a>
        </Table.Cell>
        <Table.Cell>
        She had a lot of opinions and felt very confident voicing them. Her opinions differed from mine and I beleive she should not be able tos peak her mind.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            A
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>Jermey Weinser</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3.5} maxRating={4} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          100% <br />
          <a href='#'>65 studies</a>
        </Table.Cell>
        <Table.Cell>
        He agreed with my verbatim and didnt voice any strong opionons. A great person to have on any team! Not challenging the status quo.
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Container>
  </div>
)

export default TableExamplePadded
