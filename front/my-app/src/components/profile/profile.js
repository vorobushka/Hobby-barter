import './profile.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileUserAC, teachersInStoreFromSearchAC } from '../../redux/actions';
import { Navbar, Nav, Button, Dropdown, Form, Collapse, FormControl } from 'bootstrap-4-react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  }
  async componentDidMount() {
    await this.getProfile();
    console.log(this.props.user);

    if (!this.props.user._id) {
      this.props.history.push('/');
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

    const respSearch = await fetch('/api/searchTeacher', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchBody: search }),
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
      'text-align': 'left',
      'font-size': '20px'
    };
    const userProfile = this.props.user;
    console.log(userProfile)
    return (
      <div>


        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav><div className="logo">СкиллБартер</div></Nav>
          </Nav>
          <Form onSubmit={this.searchTeacher} inline my="2 lg-0">
            <Form.Input type="search" onChange={this.searchInState} placeholder="Поиск" mr="sm-2" />
            <Button outline success my="2 sm-0">
              Поиск учителя
                </Button>
          </Form>
        </Navbar>
      <div class="resume">
			
			<div class="r-sidebar">
				<div class="r-sidebar-item">
					
					<div class="img">
              <a><img src="https://i.pinimg.com/736x/3f/68/41/3f6841442ce599874f3d247ae438736b.jpg" alt="" class="img-responsive" /></a>
					</div>
					
					<div class="name">
                <h3>{userProfile ? <p>{userProfile.login}</p> : <></>}</h3>
                <Link to="/editprofile">Изменить</Link>
					</div>
					<div class="clearfix"></div>
				</div>
				
				<div class="r-detail">
					<table>	
						<tr>
							<th style= {styles}>Имя</th>
                  <td>{userProfile ? <p>{userProfile.name}</p> : <></>}</td>
						</tr>
						<tr>
                  <th style={styles}>Пол</th>
                  <td>{userProfile ? <p>{userProfile.sex}</p> : <></>}</td>
						</tr>
						<tr>
                  <th style={styles}>Возраст</th>
                  <td>{userProfile ? <p>{userProfile.age}</p> : <></>}</td>
						</tr>
						<tr>
                  <th style={styles}>Mогу научить</th>
                  <td>{userProfile ? <p>{userProfile.hobby}</p> : <></>}</td>
						</tr>
						<tr>
                  <th style={styles}>Xочу научиться</th>
                  <td>{userProfile ? <p>{userProfile.wish}</p> : <></>}</td>
						</tr>
						<tr>
                  <th style={styles}>Телефон</th>
                  <td>{userProfile ? <p>{userProfile.phone}</p> : <></>}</td>
						</tr>
						<tr>
                  <th style={styles}>Почта</th>
                  <td>{userProfile ? <p>{userProfile.email}</p> : <></>}</td>
						</tr>
						<tr>
                  <th style={styles}>Город</th>
                  <td>{userProfile ? <p>{userProfile.city}</p> : <></>}</td>
						</tr>
					</table>
				</div>
				
				<div class="social">
              <button className="btn btn-link" onClick={e => this.logout(e)}>
                Выйти
               </button>
              
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
  
  // <div className="container emp-profile" style={styles}>
  //   <div className="row">
  //     <div className="col-md-4">
  //       <div className="profile-img">
  //         <img src="https://i.pinimg.com/736x/3f/68/41/3f6841442ce599874f3d247ae438736b.jpg" alt="" />
  //         <div className="file btn btn-lg btn-primary">
  //           Изменить фото
  //           <input type="file" name="file" />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="col-md-6">
  //       <div className="profile-head">
  //         <ul className="nav nav-tabs" id="myTab" role="tablist">
  //           <li className="nav-item">
  //             <nav class="navbar navbar-light bg-light">
  //               <form className="form-inline">
  //                 <input
  //                   className="form-control mr-sm-2"
  //                   type="text"
  //                   name="search"
  //                   onChange={this.searchInState}
  //                   placeholder="Поиск учителя"
  //                 />
  //                 <button
  //                   className="btn btn-outline-success my-2 my-sm-0"
  //                   onClick={e => this.searchTeacher(e)}
  //                   type="submit"
  //                 >
  //                   Поиск
  //                 </button>
  //                 <button className="btn btn-link" onClick={e => this.logout(e)}>
  //                   Выйти
  //                 </button>
  //                 <Link to="/editprofile">Изменить</Link>
  //               </form>
  //             </nav>
  //             <a
  //               className="nav-link active"
  //               id="home-tab"
  //               data-toggle="tab"
  //               href="#home"
  //               role="tab"
  //               aria-controls="home"
  //               aria-selected="true"
  //             >
  //               Информация
  //             </a>
  //           </li>
  //           <li className="nav-item"></li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="row">
  //     <div className="col-md-4">
  //       <div className="profile-work">
  //         <p> Я МОГУ НАУЧИТЬ ТЕБЯ: </p>
  //         <div>{userProfile ? <p style={{ 'font-size': '20px' }}>{userProfile.hobby}</p> : <></>}</div>
  //         <p>Я ХОЧУ НАУЧИТЬСЯ: </p>
  //         <div>{userProfile ? <p style={{ 'font-size': '20px' }}>{userProfile.wish}</p> : <></>}</div>
  //       </div>
  //     </div>
  //     <div className="col-md-8">
  //       <div className="tab-content profile-tab" id="myTabContent">
  //         <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  //           <div className="row">
  //             <div className="col-md-6">
  //               <label>Имя</label>
  //             </div>
  //             <div className="col-md-6">{userProfile ? <p>{userProfile.name}</p> : <></>}</div>
  //           </div>
  //           <div className="row">
  //             <div className="col-md-6">
  //               <label>Почта</label>
  //             </div>
  //             <div className="col-md-6">{userProfile ? <p>{userProfile.email}</p> : <></>}</div>
  //           </div>
  //           <div className="row">
  //             <div className="col-md-6">
  //               <label>Телефон</label>
  //             </div>
  //             <div className="col-md-6">
  //               <div className="col-md-6">{userProfile ? <p>{userProfile.phone}</p> : <></>}</div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
  //       </div>
  //     </div>
  //   </div>
  // </div>