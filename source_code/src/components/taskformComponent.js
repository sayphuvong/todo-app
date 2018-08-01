import React, { Component } from 'react';
// import './TaskForm.css';

class TaskForm extends Component {
    // constructor(props){
    //     super(props);
    // }

    addTask_handleClick(){
        this.props.addTask_click()
    }

    editDone_handleClick(){
        this.props.updateData('NAME', this.props.nodeId_Editing);
    }

    handleChange(){
        this.props.task_handleChange(this.refs.txtTask.value);
    }

    render() {
        return (
            <div className="app-form">
                <div className="form-inline" id="task-form">
                    <input type="text" className="rounded-left" ref="txtTask" 
                        onChange={this.handleChange.bind(this)} value={this.props.txtTask}/>
                        {
                            this.props.editing < 0 ? 
                                <button onClick={this.addTask_handleClick.bind(this)} type="submit" className="btn rounded-right"><i className="fas fa-plus"/> Add Task </button>
                                :
                                <button onClick={this.editDone_handleClick.bind(this)} type="submit" className="btn rounded-right"><i className="fas fa-check"/> Done </button>
                        }
                </div> 
            </div>
        );
    }
}

export default TaskForm;