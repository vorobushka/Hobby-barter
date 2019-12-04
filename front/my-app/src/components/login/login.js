import './login.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { profileUserAC } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'bootstrap-4-react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: null,
      password: null,
    };
  }

  loginInStateLogin = e => {
    this.setState({ login: e.target.value });
  };
  passwordInStateLogin = e => {
    this.setState({ password: e.target.value });
  };

  login = async e => {
    e.preventDefault();
    const dataUser = this.state;
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: dataUser }),
    });
    const user = await response.json();
    console.log(user);
    if (user._id) {
      this.props.profileUser(user);
      this.props.history.push('/alert');
    } else {
      this.props.history.push('/');
    }
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
              <form onSubmit={this.login}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="введите логин" onChange={this.loginInStateLogin}/>
						
					</div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                  <input type="password" className="form-control" placeholder="введите пароль" onChange={this.passwordInStateLogin}/>
					</div>
                    <div className="row align-items-center remember">
                      <input type="checkbox"/>Запомнить
					</div>
                      <div className="form-group">
                  <button type="submit" value="Войти" className="btn float-right btn-light">Отправить</button>
					</div>
				</form>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex justify-content-center links">
                У вас нет аккаунта?<Link to="/registration">Зарегистрироваться</Link>
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
)(Login);
