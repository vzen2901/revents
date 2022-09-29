import './App.css';
import React from 'react';
import { Component, Fragment } from 'react';
import EventDashboard from '../../component/event/eventDashboard/EventDashboard';
import NavBar from '../../component/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render(){
    return(
      <Fragment>
        <NavBar />
        <Container classname="main"> 
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
