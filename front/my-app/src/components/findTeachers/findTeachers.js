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

class FindTeachers extends Component {
  componentDidMount = async () => {
    console.log('1');
    await this.fullMatch();
    console.log('2');
    // await this.fullMatch();
    await this.findTeachersWish();
    console.log('3');

    
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
    console.log(arrTeachers);
    
    this.props.teachersFullMatch(arrTeachers);
  }
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
    const teachers = this.props.teachers;
    // console.log(teachers);
    const elements = teachers.map(item => {
      return (
        <div>
          <Media border="info" p="3" mb="3">
            <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" alignSelf="start" mr="3" />
            <Media.Body>
              <BH5 mt="0">{item.name}</BH5>
              Hi, I would like to learn {item.wish}! I can teach You {item.hobby}!
            </Media.Body>
          </Media>
        </div>
      );
    });
    return <div>{elements}</div>;
  }
}

function mapStateToProps(state) {
  return {
    teachers: state.teachers,
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
