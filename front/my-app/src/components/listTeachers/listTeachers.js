import './listTeachers.css';
import React, { Component } from 'react';

import { connect } from 'react-redux';

// import { fillStateAC, deleteTaskAC } from '../../redux/actions';

class listTeachers extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      console.log(this.props.teachersFromSearch);
      
      if(this.props.teachersFromSearch) {
      const list = this.props.teachersFromSearch;
      
      const elements = list.map(item => {
        return (
          <li key={item._id} className="list-group-item">
            <div>
              <span className="todo-list-item-label">{item.name}</span>
              <span className="todo-list-item-label">{item.hobby}</span>
              <span className="todo-list-item-label">{item.wish}</span>
              <span className="todo-list-item-label">{item.phone}</span>
            </div>
          </li>
        );
      });
      return <ul className="list-group todo-list">{elements}</ul>;
    } else {
      return <p>Ой ничё не найдено</p>;
    }
  }
}

  function mapStateToProps(state) {
    return {
      teachersFromSearch: state.teachersFromSearch,
    };
  }

  // function mapDispatchToProps(dispatch) {
  //   return {
  //     fillState: data => dispatch(fillStateAC(data)),
  //     deleteTask: task => dispatch(deleteTaskAC(task)),
  //   };
// }

export default connect(
  mapStateToProps,
  null,
)(listTeachers);
