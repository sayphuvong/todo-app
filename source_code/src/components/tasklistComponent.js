import React, { Component } from 'react';
import ListItem from './itemComponent';
// import './TaskList.css';

class TaskList extends Component {
    constructor(props){
        super(props);
    }

    loadItems(){
        let list = this.props.todoList;
        let result = [];
        for(let x in list){
            console.log(list[x].name);
            console.log(list[x].isChecked);
            console.log(list[x].isActived);
            result.push(<ListItem name={list[x].name} checked={list[x].isChecked} active={list[x].isActived}/>);
        }
        return result;
    }

    render() {
        const list = this.props.todoList;
        const elementItem = list.map((value, index)=>{
            return (
                <ListItem key={index} name={value.name} checked={value.isChecked} active={value.isActived}/>
            );
        });
        return (
            <div className="todo-list">
                <ul className="list-group w-75">
                    {/* <ListItem checked={true} active={false}/>
                    <ListItem checked={false} active={true}/>
                    <ListItem checked={true} active={false}/>
                    <ListItem checked={false} active={true}/>
                    <ListItem checked={true} active={false}/>
                    <ListItem checked={false} active={true}/>
                    <ListItem checked={true} active={true}/> */}
                    {/* {this.loadItems()} */}
                    {elementItem}
                </ul>
            </div>
        );
    }
}

export default TaskList;