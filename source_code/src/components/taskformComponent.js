import React, { Component } from 'react';
// import './TaskForm.css';

class TaskForm extends Component {
  render() {
    return (
        <div className="app-form">
            <div className="form-inline" id="task-form">
                <input type="text" className="rounded-left" />
                <button type="submit" className="btn rounded-right"><i className="fas fa-plus" /> Add Task</button>
            </div> 
        </div>
    );
  }
}

export default TaskForm;