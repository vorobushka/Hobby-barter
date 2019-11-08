import './registration.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { profileUserAC } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button} from 'bootstrap-4-react';


class Registration extends Component {
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

  registration = async e => {
    e.preventDefault();
    const dataUser = this.state;
    const response = await fetch('/api/registration', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: dataUser }),
    });
    const user = await response.json();
    console.log(user);
    
    this.props.profileUser(user);
    this.props.history.push('/alert');
  };

  render() {
    return (
<div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav><div className="logo">СкиллБартер</div></Nav>
            <Nav.Link >
              <Link to="/login">Логин</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/registration">Регистрация</Link>
            </Nav.Link>
          </Nav>
          <Form onSubmit={this.searchTeacher} inline my="2 lg-0">
            <Form.Input type="search" onChange={this.searchInState} placeholder="Поиск" mr="sm-2" />
             <Button outline success my="2 sm-0">
              Поиск учителя
                </Button> 
          </Form>
        </Navbar>
      <div className="container div-form" style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'flex-start',
        'margin': '0px 0px 0px 200px'
      }}>
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Войти</h3>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fab fa-facebook-square"></i></span>
                <span><i className="fab fa-google-plus-square"></i></span>
                <span><i className="fab fa-twitter-square"></i></span>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={this.registration}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="введите почту" onChange={this.emailInState} />
                </div>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="введите логин" onChange={this.loginInState} />
                </div>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" className="form-control" placeholder="введите пароль" onChange={this.passwordInState} />
                </div>

                <div className="row align-items-center remember">
                  <input type="checkbox" />Запомнить
					</div>
                <div className="form-group">
                  <button type="submit" value="Войти" className="btn float-right btn-light">Отправить</button>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                У вас есть аккаунт?<Link to="/login">Войти</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileUser: user => dispatch(profileUserAC(user)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);

  // <div className="div-form">
  //   <form className="form-" onSubmit={this.registration}>
  //     <div className="form-group">
  //       <input
  //         type="email"
  //         className="form-control"
  //         name="email"
  //         placeholder="введите почту"
  //         onChange={this.emailInState}
  //       />
  //     </div>
  //     <div className="form-group">
  //       <input type="text" className="form-control" name="login" placeholder="введите логин" onChange={this.loginInState} />
  //     </div>
  //     <div className="form-group">
  //       <input
  //         type="password"
  //         name="password"
  //         className="form-control"
  //         placeholder="введите пароль" 
  //         onChange={this.passwordInState}
  //       />
  //     </div>
  //     <button type="submit" className="btn btn-light">Отправить</button>
  //   </form>
  // </div>