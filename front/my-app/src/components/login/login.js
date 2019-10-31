import "./login.css"
import React, { Component } from "react";


export default class Login extends Component {

  render() {
    return (
      <form class= "form-">
        <div class="form-group">
            <input type="text" class="form-control" name="login" placeholder="login"/>
    </div>
          <div class="form-group">
            <input type="password" name="password" class="form-control" placeholder="password"/>
    </div>
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </form>

    )
  }
}