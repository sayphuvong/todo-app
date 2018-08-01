import React, { Component } from 'react';
import ListItem from './itemComponent';
// import './TaskList.css';

class TaskList extends Component {

    // loadItems(){
    //     let list = this.props.todoList;
    //     let result = [];
    //     for(let x in list){
    //         console.log(list[x].name);
    //         console.log(list[x].isChecked);
    //         console.log(list[x].isActived);
    //         result.push(<ListItem name={list[x].name} checked={list[x].isChecked} active={list[x].isActived}/>);
    //     }
    //     return result;
    // }

    render() {
        const list = this.props.todoList;
        const elementItem = list.map((value, index)=>{
            // console.log('value id: ' + value.id);
            return (
                <ListItem key={index} name={value.name} index={index} nodeId={value.id}
                    checked={value.isChecked} 
                    active={this.props.indexNewAction >= 0 &&  this.props.indexNewAction === index? true : false}
                    edit_handleClick={this.props.edit_handleClick}
                    isChecked_handleClick={this.props.isChecked_handleClick}
                    editing={this.props.editing}
                    listItem_handleClick={this.props.listItem_handleClick}
                    deleteNode={this.props.deleteNode}
                    setNodeId={this.props.setNodeId}
                    updateData={this.props.updateData}/>
            );
        });
        return (
            <div className="todo-list">
                <ul className="list-group w-75">
                    {elementItem}
                </ul>
            </div>
        );
    }
}

export default TaskList;