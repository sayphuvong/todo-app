import React, { Component } from 'react';
import Title from './components/titleComponent';
import TaskForm from './components/taskformComponent';
import TaskList from './components/tasklistComponent';
import tasks from './mocks/task';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo_list: tasks.item,
      txtTask: '',
      itemEditing: -1,
      indexNewAction: -1
    }
  }

  input_handleChange(text){
    this.setState({txtTask: text});
  }

  addTask_click(){
    if(this.state.txtTask.trim() === ''){ return; }
    if(this.state.itemEditing < 0){
      let list = this.state.todo_list;
      list.push({
        name: this.state.txtTask,
        isChecked: false,
        isActived: false
      });
      this.setState({todo_list: list, txtTask: '',});
    } else{
      const list = this.state.todo_list;
      list[this.state.itemEditing].name = this.state.txtTask;
      this.setState({todo_list: list, txtTask: '', itemEditing: -1});
    }
  }

  listItem_handleClick(key){
    this.setState({indexNewAction: key});
  }

  edit_handleClick(key){
    if(key != this.state.itemEditing){
      const list = this.state.todo_list;
      
      if(key < list.length){
        this.setState({txtTask: list[key].name, itemEditing: key});
      }else{
        console.log('have error edit_handleClick in App.js : "key > list.length"');
      }
    } else{
      this.setState({itemEditing: -1, txtTask: ''});
    }
  }

  isChecked_handleClick(key){
    const list = this.state.todo_list;
    list[key].isChecked = !list[key].isChecked;
    this.setState({todo_list: list});
  }

  // delete_handleClick(key){ }

  render() {
    let _todoList = this.state.todo_list;
    return (
      <div className="App">
      
        <div className="w-50 container">
          <Title/>
          <TaskForm 
            task_handleChange={this.input_handleChange.bind(this)} 
            txtTask={this.state.txtTask} 
            addTask_click={this.addTask_click.bind(this)}
            editing={this.state.itemEditing}/>
          <TaskList todoList={_todoList} 
            edit_handleClick={this.edit_handleClick.bind(this)}
            isChecked_handleClick={this.isChecked_handleClick.bind(this)}
            editing={this.state.itemEditing}
            indexNewAction={this.state.indexNewAction}
            listItem_handleClick={this.listItem_handleClick.bind(this)}/>
        </div>
      </div>
    );
  }
  }

export default App;
