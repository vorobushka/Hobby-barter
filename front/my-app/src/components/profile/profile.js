import './profile.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileUserAC, teachersInStoreFromSearchAC } from '../../redux/actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  }
  async componentDidMount() {
    await this.getProfile();
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

  searchInState = e => {
    this.setState({ search: e.target.value });
  };
  searchTeacher = async e => {
    e.preventDefault();
    const { search } = this.state;
    console.log(search);

    const respSearch = await fetch('/api/selection', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const searchTeachers = await respSearch.json();
    this.props.teachersInStoreFromSearch(searchTeachers);
    this.props.history.push('/findTeachers');
  };

  logout = async e => {
    e.preventDefault();
    await fetch('/api/logout');
    this.props.history.push('/');
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
    const styles = {
      height: '80vh',
      padding: '5%',
      'margin-top': '10%',
      'border-radius': '0.5rem',
      background: '#fff'
    }
    const userProfile = this.props.user;
    return (
      <div className="container emp-profile" style = {styles}>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src="https://i.pinimg.com/736x/3f/68/41/3f6841442ce599874f3d247ae438736b.jpg"
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
                      <input
                        className="form-control mr-sm-2"
                        type="text"
                        name="search"
                        onChange={this.searchInState}
                        placeholder="Search"
                      />
                      <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        onClick={e => this.searchTeacher(e)}
                        type="submit"
                      >
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
              <p> I CAN TEACH YOU: </p>
              <div>{userProfile ? <p style={{ 'font-size': '20px' }}>{userProfile.hobby}</p> : <></>}</div>
              <p>I WANT TO LEARN: </p>
              <div>{userProfile ? <p style={{ 'font-size': '20px' }}>{userProfile.wish}</p> : <></>}</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">{userProfile ? <p>{userProfile.name}</p> : <></>}</div>
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
                    <div className="col-md-6">{userProfile ? <p>{userProfile.phone}</p> :<></>}</div>
                  </div>
                </div>
              
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
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
    teachersInStoreFromSearch: teachersSearch => dispatch(teachersInStoreFromSearchAC(teachersSearch)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
