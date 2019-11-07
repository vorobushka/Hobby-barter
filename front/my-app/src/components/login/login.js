import './login.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { profileUserAC } from '../../redux/actions';
import { Link } from 'react-router-dom';

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


      <div className="container div-form" style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center'
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



















      // <div className="div-form">
      //   <form className="form-" onSubmit={this.login}>
      //     <div className="form-group">
      //       <input
      //         type="text"
      //         className="form-control"
      //         name="login"
      //         placeholder="введите логин"
      //         onChange={this.loginInStateLogin}
      //       />
      //     </div>
      //     <div className="form-group">
      //       <input
      //         type="password"
      //         name="password"
      //         className="form-control"
      //         placeholder="введите пароль"
      //         onChange={this.passwordInStateLogin}
      //       />
      //     </div>
      //     <button type="submit" className="btn btn-light">Отправить</button>
      //   </form>
      // </div>
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
