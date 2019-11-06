import './startpage.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import { teachersInStoreFromSearchAC } from '../../redux/actions';


class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  }

  searchInState = e => {
    this.setState({ search: e.target.value });
  };
  searchTeacher = async e => {
    e.preventDefault();
    const { search } = this.state;
    console.log(search);

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

  render() {
    // console.log(this.state);

    return (
      <div>
        <div className="container emp-profile">
          <Navbar expand="lg" light bg="light">
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggler target="#navbarSupportedContent" />
            <Collapse navbar id="navbarSupportedContent">
              <Navbar.Nav mr="auto">
                <Nav.Item active>
                  <Nav.Link href="#"></Nav.Link>
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
                <Form.Input type="search" onChange={this.searchInState} placeholder="Поиск" mr="sm-2" />
                <Button outline success my="2 sm-0">
                  Поиск учителя
                </Button>
              </Form>
            </Collapse>
          </Navbar>
          <div className="row">
            <div className="col">
              <img src="https://cache3.youla.io/files/images/360_360/5c/af/5caf5fb6e7d7ce4fad0f3833.jpg" />
            </div>
            <div className="col">
              <div
                className="shrift"
                style={{
                  'font-family': 'Lobster',
                  'font-weight': 'bold',
                  'font-size': '18px',
                }}
              >
                Мечтаешь научиться программировать или выучить английский, стать гуру фотошопа или же монтировать крутые
                видеоролики и выкладывать на ютюб? Хочешь научиться правильно обрабатывать звук, рисовать, разговаривать
                на иностранном языке, петь, танцевать, но онлайн-курсы, студии и школы запрашивают баснословные деньги,
                а просмотры видео на ютюбе не дают должных результатов? НАЙДЕНО РЕШЕНИЕ. Это приложение для тех, кто
                хочет научиться чему-то новому, взамен предложив свои умения.
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
    teachersFromSearch: state.teachersFromSearch,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teachersInStoreFromSearch: teachers => dispatch(teachersInStoreFromSearchAC(teachers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartPage);