import React, { Component } from 'react';
import Title from './components/titleComponent';
import TaskForm from './components/taskformComponent';
import TaskList from './components/tasklistComponent';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todo_list: [
        {
          name: "Cras justo odio Cras justo odio Cras justo odio Cras justo odio Cras justo odio Cras justo odio",
          isChecked: true,
          isActived: true
        },
        {
          name: "Cras justo odio Cras justo odio Cras justo odio",
          isChecked: false,
          isActived: false
        },
        {
          name: "Cras justo odio Cras justo odio Cras justo odio Cras justo odio",
          isChecked: false,
          isActived: false
        },
        {
          name: "Cras justo odio Cras justo",
          isChecked: false,
          isActived: false
        }
      ]
    }
  }
  render() {
    let _todoList = this.state.todo_list;
    return (
      <div className="App">
        <div className="w-50 container">
          <Title/>
          <TaskForm/>
          <TaskList todoList={_todoList}/>
        </div>
      </div>
    );
  }
}

export default App;
