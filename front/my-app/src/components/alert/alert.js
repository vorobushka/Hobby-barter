import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Alert extends Component {
  state= {
    interval: false,
  }

  componentDidMount() {
    setTimeout(() => this.setState({interval :  true }), 3000);
  }

  render() {
    return (
      <div className="alert alert-info" role="alert">
        <strong>Heads up!</strong> Congratulations!!!
        {this.state.interval && <Redirect to="/profile" />}
      </div>
    );
  }
}
