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
import { createBrowserHistory } from "history";
import auth0Client from './Auth'

class App extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
  }

  render() {
    return (
      <div>
        <NavBar/>
         <Route history={createBrowserHistory()} path='/callback'>
           <Callback />
         </Route>
      </div>
    );
  }
}

export default withRouter(App);
