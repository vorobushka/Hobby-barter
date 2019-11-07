import './editProfile.css';
import React, { Component } from 'react';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      photo: null,
      email: null,
      login: null,
      wish: null,
      hobby: null,
      phone: null,
      profession: null,
    };
  }

  nameInState = e => {
    this.setState({ name: e.target.value });
  };

  photoInState = e => {
    this.setState({ photo: e.target.value });
  };

  emailInState = e => {
    this.setState({ email: e.target.value });
  };
  loginInState = e => {
    this.setState({ login: e.target.value });
  };

  wishInState = e => {
    this.setState({ wish: e.target.value });
  };

  hobbyInState = e => {
    this.setState({ hobby: e.target.value });
  };


  linksInState = e => {
    this.setState({ links: e.target.value });
  };

  phoneInState = e => {
    this.setState({ phone: e.target.value });
  };
  professionInState = e => {
    this.setState({ profession: e.target.value });
  };


  editProfile = async e => {
    e.preventDefault();
    console.log('work form')
    const dataUser = this.state;
    const response = await fetch('/api/edit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: dataUser }),
    });
    const user = await response.json();
    this.props.history.push('/profile');
  };


  render() {
    const styles = {
    height: '80vh',
    padding:'5%',
    'margin-top': '10%',
    'border-radius': '0.5rem',
    background: '#fff'
    }
    return (
      <div className="container emp-profile" style={styles}>
        <form onSubmit={this.editProfile}>
          <div class="container">
            <div class="row">
              <div class="col-sm">
            <div class="form-group">
              <label for="exampleInputEmail1">Почта</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите почту" onChange={this.emailInState}/>
</div>
            <div class="form-group">
              <label for="exampleInputEmail1">Имя</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите имя" onChange={this.nameInState} />
            
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Номер</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите номер" onChange={this.phoneInState} />
          </div>
    </div>
              <div class="col-sm">
              
    </div>
              <div class="col-sm">
                <div class="form-group">
                  <label for="exampleInputEmail1">Навыки</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите навык" onChange={this.hobbyInState} />
                  <small id="emailHelp" class="form-text text-muted">Навыки, которыми вы можете научить</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Навыки</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите навык" onChange={this.wishInState} />
                  <small id="emailHelp" class="form-text text-muted">Навыки, которыми вы хотите научиться.</small>
                </div>
    </div>
            </div>
          </div>      
          <button type="submit" class="btn btn-primary">Сохранить</button>
        </form>
      </div>

    )
  }
}