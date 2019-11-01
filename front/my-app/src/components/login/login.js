import './login.css';
import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="div-form">
      <form className="form-">
        <div className="form-group">
          <input type="text" className="form-control" name="login" placeholder="login" />
        </div>
        <div className="form-group">
          <input type="password" name="password" className="form-control" placeholder="password" />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
      </div >
    );
  }
}
