import React, { Component } from 'react';
// import './TaskForm.css';

class TaskForm extends Component {
    // constructor(props){
    //     super(props);
    // }

    handleClick(){
        this.props.addTask_click()
    }

    handleChange(){
        this.props.task_handleChange(this.refs.txtTask.value);
        // console.log(this.props.txtTask);
    }

    render() {
        return (
            <div className="app-form">
                <div className="form-inline" id="task-form">
                    <input type="text" className="rounded-left" ref="txtTask" 
                        onChange={this.handleChange.bind(this)} value={this.props.txtTask}/>
                    <button onClick={this.handleClick.bind(this)} type="submit" className="btn rounded-right">
                        {
                        this.props.editing < 0 ? 
                            <div>
                                <i className="fas fa-plus"/> Add Task
                            </div>
                            :
                            <div>
                                <i className="fas fa-check"/> Done
                            </div>
                        }
                    </button>
                </div> 
            </div>
        );
    }
}

export default TaskForm;