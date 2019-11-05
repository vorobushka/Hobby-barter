import './profile.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileUserAC } from '../../redux/actions';

class Profile extends Component {
  async componentDidMount() {
    await this.getProfile();
    console.log(this.props.user);

    if (!this.props.user) {
      this.props.history.push('/login');
    }
  }

  getProfile = async e => {
    const response = await fetch('/api/auto', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const userFromBack = await response.json();
    this.props.profileUser(userFromBack);
  };

  logout = async e => {
    e.preventDefault();
    await fetch('/api/logout');
    this.props.history.push('/login');
  };

  findUser = async e => {
    const respUser = await fetch('/api/selection', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };

  render() {
    const userProfile = this.props.user;
    return (
      <div className="container emp-profile">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt=""
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <nav class="navbar navbar-light bg-light">
                    <form className="form-inline">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                      </button>
                    </form>
                    <button className="btn btn-link" onClick={e => this.logout(e)}>
                      Logout
                    </button>
                    <Link to="/editprofile">Edit Profile </Link>
                  </nav>
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item"></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>HOBBY: </p>
              <div>{userProfile ? <p>{userProfile.hobby}</p> : <></>}</div>
              <p>WISHES: </p>
              <div>{userProfile ? <p>{userProfile.wish}</p> : <></>}</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">{userProfile ? <p>{userProfile.login}</p> : <></>}</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">{userProfile ? <p>{userProfile.email}</p> : <></>}</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <div className="col-md-6">{userProfile ? <p>{userProfile.phone}</p> : <></>}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <div className="col-md-6">{userProfile ? <p>{userProfile.profession}</p> : <></>}</div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <button onClick={e => this.findUser(e)}>Найти</button>
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
)(Profile);
