import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../login/login'
import Registration from '../registration/registration';
import Alert from '../alert';


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/alert" component={Alert} />
        </Router>
        {/* <Login />
        <Registration /> */}
      </div>
    );
  }
}

