import React, { Component } from 'react';
import {
  withRouter,
  Route,
  Switch
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
        <Switch>
         <Route exact path='/callback'>
           <Callback />
         </Route>
       </Switch>
      </div>
    );
  }
}

export default withRouter(App);
