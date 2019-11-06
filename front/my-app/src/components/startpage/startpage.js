import './startpage.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

export default class StartPage extends Component {
  render() {
    return (
      <div>
      <div className="container emp-profile">
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto">
            <Nav.Item active>
              <Nav.Link href="#">Home</Nav.Link>
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
          <Form inline my="2 lg-0">
            <Form.Input type="search" placeholder="Search" mr="sm-2" />
            <Button outline success my="2 sm-0">Search</Button>
          </Form>
        </Collapse>
      </Navbar>
        <div className="row">
          <div className="col">
        <img src='https://cache3.youla.io/files/images/360_360/5c/af/5caf5fb6e7d7ce4fad0f3833.jpg'/>
        </div>
        <div className='col'>
              <div className="shrift" style={{ 
              "font-family":"Lobster",
              'font-weight': 'bold',
              'font-size': '18px'

                                       

              }}>
Мечтаешь научиться программировать или выучить английский,
стать гуру фотошопа или же монтировать крутые видеоролики и выкладывать на ютюб?
Хочешь научиться правильно обрабатывать звук, рисовать, разговаривать на иностранном языке, петь, танцевать, но онлайн-курсы, студии и школы запрашивают баснословные деньги, а просмотры видео на ютюбе не дают должных результатов?
                   НАЙДЕНО РЕШЕНИЕ. Это приложение для тех, кто хочет научиться чему-то новому, взамен предложив свои умения.</div>

        </div>
        </div>
        </div>
      </div>
      
    );
  }
}
