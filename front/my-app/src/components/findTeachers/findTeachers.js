import React, { Component } from 'react';
import { connect } from 'react-redux';
import { teachersInStateAC, teachersFullMatchAC } from '../../redux/actions';
import './findTeachers.css';
import { Media, BImg, BH5 } from 'bootstrap-4-react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import { teachersInStoreFromSearchAC } from '../../redux/actions';

class FindTeachers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      status: true,
    };
  }
  componentDidMount = async () => {
    await this.fullMatch();
    await this.findTeachersWish();
    const { teachers, teachersFull, teachersFromSearch } = this.props;
    if (teachers.length === 0 && teachersFull.length === 0 && teachersFromSearch.length === 0) {
      this.setState({ status: false });
    } else {
      // this.setState({ status: true });
    }
  };

  searchInState = e => {
    this.setState({ search: e.target.value });
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
    const respTeachers = await fetch('/api/fullmatch', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const arrTeachers = await respTeachers.json();
    console.log(arrTeachers);
    this.props.teachersFullMatch(arrTeachers);
  };

  searchTeacher = async e => {
    e.preventDefault();
    const { search } = this.state;
    console.log(search);
    // debugger;
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
    // this.state.status = true;
    if (searchTeachers.length === 0) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };

  render() {
    let message;
    if (this.state.status === false) {
      message = (
        <div style={{ backgroundColor: 'white', width: '300px' }}>
          <Media border="success" p="3" mb="3">
            <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" alignSelf="start" mr="3" />
            <Media.Body>
              <BH5 mt="0"></BH5>К сожалению, учителей по вашему запросу не найдено. Повторите поиск
            </Media.Body>
          </Media>
        </div>
      );
    }

    let elTeachersFull = [];
    if (this.props.teachersFull.length) {
      const full = this.props.teachersFull;
      console.log(this.props.teachersFull);
      elTeachersFull = full.map(item => {
        return (
          <div style={{ backgroundColor: 'white', width: '300px' }}>
            <Media border="success" p="3" mb="3">
              <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" alignSelf="start" mr="3" />
              <Media.Body>
                <BH5 mt="0">{item.name}</BH5>
                Привет! Я могу научить тебя {item.hobby}! Я хочу научиться {item.wish}!<br />
                Номер:{item.phone}
              </Media.Body>
            </Media>
          </div>
        );
      });
    } else {
      elTeachersFull = '';
    }

    let elTeachers = [];
    if (this.props.teachers.length) {
      const teachers = this.props.teachers;
      elTeachers = teachers.map(item => {
        return (
          <div style={{ backgroundColor: 'white', width: '300px' }}>
            <Media border="info" p="3" mb="3">
              <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" alignSelf="start" mr="3" />
              <Media.Body>
                <BH5 mt="0">{item.name}</BH5>Привет! Я могу научить тебя {item.hobby}! <br /> Я хочу научиться{' '}
                {item.wish}
                !<br />
                Номер:{item.phone}
              </Media.Body>
            </Media>
          </div>
        );
      });
    } else {
      elTeachers = '';
    }

    let elTeachersFromSearch = [];
    console.log(this.props.user._id);

    if (this.props.teachersFromSearch.length) {
      const teachersT = this.props.teachersFromSearch;
      elTeachersFromSearch = teachersT.map(item => {
        return (
          <div style={{ backgroundColor: 'white', width: '300px' }}>
            <Media border="info" p="3" mb="3">
              <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" alignSelf="start" mr="3" />
              <Media.Body>
                <BH5 mt="0">{item.name}</BH5>Привет! Я могу научить тебя {item.hobby}! <br /> Я хочу научиться{' '}
                {item.wish}
                !
                <br />
                {this.props.user._id ? <p>Номер: {item.phone}</p> : <b>Зарегистрируйтесь, чтобы увидеть телефон</b>}
              </Media.Body>
            </Media>
          </div>
        );
      });
    } else {
      elTeachersFromSearch = '';
    }

    return (
      <div>
        <Navbar expand="lg" light bg="light">
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggler target="#navbarSupportedContent" />
          <Collapse navbar id="navbarSupportedContent">
            <Navbar.Nav mr="auto">
              <Nav.Item active>
                <Nav.Link>
                  <Link to="/profile">Профиль</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/login">Логин</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item dropdown>
                <Nav.Link>
                  <Link to="/registration">Регистрация</Link>
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
              <Form.Input type="search" onChange={this.searchInState} placeholder="Поиск учителя" mr="sm-2" />
              <Button outline success my="2 sm-0">
                Поиск
              </Button>
            </Form>
          </Collapse>
        </Navbar>
        <div>{message}</div>
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
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teachersInState: teachers => dispatch(teachersInStateAC(teachers)),
    teachersFullMatch: task => dispatch(teachersFullMatchAC(task)),
    teachersInStoreFromSearch: teachers => dispatch(teachersInStoreFromSearchAC(teachers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FindTeachers);
