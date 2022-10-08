import React, { Component } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';

class EventForm extends Component {

  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hosteBy: ''
  }
  componentDidMount(){
    if(this.props.selectedEvent !== null){
      this.setState({
        ...this.props.selectedEvent
      })
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
            <Segment>
              <Form onSubmit={this.handleFormSubmit}>
                <Form.Field>
                  <label>Event Title</label>
                  <input 
                  placeholder="event title" 
                  />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input type="date" placeholder="Event Date" />
                </Form.Field>
                <Form.Field> 
                  <label>City</label>
                  <input placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input placeholder="Enter the name of person hosting" />
                </Form.Field>
                <Button positive type="submit" >
                  Submit
                </Button>
                <Button type="button" onClick={this.props.cancelFormOpen}>Cancel</Button>
              </Form>
            </Segment>
    )
  }
}
export default EventForm;