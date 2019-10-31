import './registration.css';
import React, { Component } from 'react';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      login: null,
      password: null,
    };
  }
  emailInState = e => {
    this.setState({ email: e.target.value });
  };
  loginInState = e => {
    this.setState({ login: e.target.value });
  };
  passwordInState = e => {
    this.setState({ password: e.target.value });
  };

  registration = async () => {
    const dataUser = this.state;
    console.log(dataUser);
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: dataUser }),
    });
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <input type="email" className="form-control" name="email" placeholder="email" onChange={this.emailInState} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="login" placeholder="login" onChange={this.loginInState} />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            onChange={this.passwordInState}
          />
        </div>
        <button onClick={this.registration}>Submit</button>
      </form>
    );
  }
}
