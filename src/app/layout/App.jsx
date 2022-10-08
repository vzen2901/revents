import './App.css';
import React from 'react';
import { Component, Fragment } from 'react';
import EventDashboard from '../../component/event/eventDashboard/EventDashboard';
import NavBar from '../../component/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';
import {  Route, Routes } from 'react-router-dom';
import HomePage from '../../component/home/HomePage';
import EventDetailedPage from '../../component/event/eventDetailed/EventDetailedPage';
import PeopleDashboard from '../../component/user/peopleDashboard/PeopleDashboard'
import UserDetailedPage from '../../component/user/userDetailed/UserDetailPage'
import SettingsDashboard from '../../component/user/settings/SettingsDashboard'
import EventForm from '../../component/event/eventForm/EventForm';

class App extends Component {
  render(){
    return(
      <Fragment>    
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route 
            path='/*'
            element={
              <Fragment>
                <NavBar />
                <Container className="main"> 
                  <Routes>
                    <Route path='/events' element={<EventDashboard />} />
                    <Route path='/events/:id' element={<EventDetailedPage />} />
                    <Route path='/people' element={<PeopleDashboard />} />
                    <Route path='/profile/:id' element={<UserDetailedPage />} />
                    <Route path='/settings' element={<SettingsDashboard />} />
                    <Route path='/createEvent' element={<EventForm />} />
                  </Routes>
                </Container>
              </Fragment>
            }
          />
        </Routes>
      </Fragment>
    );
  }
}

export default App;
