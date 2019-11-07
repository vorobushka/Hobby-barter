import './listTeachers.css';
import React, { Component } from 'react';

import { connect } from 'react-redux';

// import { fillStateAC, deleteTaskAC } from '../../redux/actions';

class listTeachers extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      const list = this.props.tasks;
      const elements = list.map(item => {
        return (
          <li key={item._id} className="list-group-item">
            <div>
              <span className="todo-list-item-label">{item.name}</span>
<span className="todo-list-item-label">{item.name}</span>
<span className="todo-list-item-label">{item.name}</span>
<span className="todo-list-item-label">{item.name}</span>
              {/* <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
              </button>
              <button type="button" onClick={() => this.deleteTask(item._id)} className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
              </button> */}
            </div>
          </li>
        );
      });
      return <ul className="list-group todo-list">{elements}</ul>;
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(listTeachers);
