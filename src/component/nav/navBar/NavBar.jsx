import './navbar.css'
import React, { Component } from 'react'
import { Button, Container, Menu } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import SignOutMenu from '../menus/SignOutMenu';
import SignInMenu from '../menus/SignInMenu';


class NavBar extends Component {
  state = {
    authenticated: true
  };
  handleSignIn = () => {
    this.setState({authenticated: true});
  };
  handleSignOut = () => {
    this.setState({authenticated: false});
    // this.props.history.push('/');
  }
  render() {
    return (
            <Menu inverted fixed="top">
              <Container>
                <Menu.Item as={NavLink} to='/' header>
                  <img src="assets/images/logo.png" alt="logo" />
                  Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name="Events" />
                <Menu.Item as={NavLink} to='/people' name="People" />
                <Menu.Item>
                  <Button 
                    as={Link} 
                    to='/createEvent' 
                    floated="right" 
                    positive 
                    inverted 
                    content="Create Event" />
                </Menu.Item>
                {this.state.authenticated ? (<SignInMenu signOut={this.handleSignOut} />) : (<SignOutMenu signIn={this.handleSignIn} />)}
              </Container>
            </Menu>
    )
  }
}
export default  NavBar;