import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react';
// import { NavLink } from 'react-router-dom';

const HomePage = () => {
  
  return (
      <Segment inverted textAlign='center' vertical className='masthead'>
        <Container text>
          <Header as='h1' inverted>
            <Image
              size='massive'
              src='/assets/images/logo.png'
              alt='logo'
              style={{ marginBottom: 12 }}
            />
            Re-vents
          </Header>
          <Button size='huge' inverted as={NavLink} to='/events' >
            Get started
            <Icon name='right arrow' inverted />
          </Button>
        </Container>
      </Segment>
  )
}

export default HomePage;
