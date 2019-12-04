import React, { Component } from 'react';
import {
  withRouter,
  Route
  //Link
} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import Callback from './Callback';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route path='/callback' component={Callback}/>
      </div>
    );
  }
}

export default withRouter(App);
