import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from '../eventList/EventList';

const eventsFormDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  },
  {
    id: '3',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/23.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/23.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/23.jpg'
      }
    ]
  }
];

class EventDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: eventsFormDashboard,
      isOpen: false,
      selecteEvent: null
    };
  }
  
  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selecteEvent: null
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    })
  };//cancel from

  handleIsOpenToggle = () => {
    this.setState((prevState) =>({
        isOpen: !prevState.isOpen
      }));
  };//on, off form

  handleSelectEvent = (e) => {
    this.setState({
      isOpen: true,
      selecteEvent: e
    });
  };
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button positive content='Create Event' onClick={this.handleIsOpenToggle}/>
          {this.state.isOpen && <EventForm cancelFormOpen={this.handleIsOpenToggle} />}
        </Grid.Column>
      </Grid>
    );;
  }
}
export default EventDashboard;