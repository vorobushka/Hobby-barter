import React, { Component } from 'react';
import { connect } from 'react-redux';
import { teachersInStateAC, teachersFullMatchAC } from '../../redux/actions';
import './findTeachers.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Alert } from 'bootstrap-4-react';
import { Media, BImg, BH5 } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

class FindTeachers extends Component {
  componentDidMount = async () => {
    await this.fullMatch();
    await this.findTeachersWish();
  };

  findTeachersWish = async e => {
    const respUser = await fetch('/api/selection', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const arrUsers = await respUser.json();
    this.props.teachersInState(arrUsers);
  };


  fullMatch = async e => {
    console.log('fullmatch на фронте');

    const respTeachers = await fetch('/api/fullmatch', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const arrTeachers = await respTeachers.json();
    // console.log(arrTeachers);

    this.props.teachersFullMatch(arrTeachers);
  };
  //   allTasks = async () => {
  //     const resp = await fetch('/api/');
  //     const data = await resp.json();
  //     this.props.fillState(data);
  //   };

  //   deleteTask = async id => {
  //     console.log(id);
  //     const resp = await fetch('/api/', {
  //       method: 'DELETE',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ deleteTaskId: id }),
  //     });
  //     const newTasks = await resp.json();
  //     this.props.deleteTask(newTasks);
  //   };

  render() {
    const full = this.props.teachersFull;
    console.log(this.props.teachersFull);
    const elTeachersFull = full.map(item => {
      return (
        <div style={{ backgroundColor: 'white', width: '300px' }}>
          <Media border="success" p="3" mb="3">
            <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" alignSelf="start" mr="3" />
            <Media.Body>
              <p>SkillBarter</p>
              <BH5 mt="0">{item.name}</BH5>
              Hi, I would like to learn {item.wish}! I can teach You {item.hobby}!<br /> 
              Number:{item.phone}
            </Media.Body>
          </Media>
        </div>
      );
    });

    const teachers = this.props.teachers;
    const elTeachers = teachers.map(item => {
      return (
        <div style={{ backgroundColor: 'white', width: '300px' }}>
          <Media border="info" p="3" mb="3">
            <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" alignSelf="start" mr="3" />
            <Media.Body>
              <BH5 mt="0">{item.name}</BH5>I can teach You {item.hobby}! <br /> Hi, I would like to learn {item.wish}!<br /> 
            Number:{item.phone}
            </Media.Body>
          </Media>
        </div>
      );
    });

   const teachersT = this.props.teachersFromSearch;
   
   const elTeachersFromSearch = teachersT.map(item => {
     return (
       <div style={{ backgroundColor: 'white', width: '300px' }}>
         <Media border="info" p="3" mb="3">
           <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" alignSelf="start" mr="3" />
           <Media.Body>
             <BH5 mt="0">{item.name}</BH5>I can teach You {item.hobby}! <br /> Hi, I would like to learn {item.wish}!
             <br />
             Number:{item.phone}
           </Media.Body>
         </Media>
       </div>
     );
   });

    return (
      <div>
        
        <Navbar expand="lg" light bg="light">
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggler target="#navbarSupportedContent" />
          <Collapse navbar id="navbarSupportedContent">
            <Navbar.Nav mr="auto">
              <Nav.Item active>
                <Nav.Link>
                  <Link to="/profile">Profile</Link>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/login">Login</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item dropdown>
                <Nav.Link>
                  <Link to="/registration">Registration</Link>
                </Nav.Link>
                <Dropdown.Menu>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Nav.Item>
            </Navbar.Nav>
            <Form onSubmit={this.searchTeacher} inline my="2 lg-0">
              <Form.Input type="search" onChange={this.searchInState} placeholder="Search" mr="sm-2" />
              <Button outline success my="2 sm-0">
                Search
                </Button>
            </Form>
          </Collapse>
        </Navbar>
        <div>{elTeachersFromSearch}</div>
        <div>{elTeachersFull}</div>
        <div>{elTeachers}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    teachers: state.teachers,
    teachersFull: state.teachersFull,
    teachersFromSearch: state.teachersFromSearch,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teachersInState: teachers => dispatch(teachersInStateAC(teachers)),
    teachersFullMatch: task => dispatch(teachersFullMatchAC(task)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FindTeachers);
