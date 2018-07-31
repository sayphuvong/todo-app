import React, { Component } from 'react';
import * as firebase from 'firebase';
// import firebase from 'firebase/app';
// import 'firebase/<PACKAGE>';
import Title from './components/titleComponent';
import TaskForm from './components/taskformComponent';
import TaskList from './components/tasklistComponent';
// import tasks from './mocks/task';
import './App.css';


const config = {
  apiKey: "AIzaSyC98oDbVJ8xXQI5ZOY5GmyC5wE963vFDGw",
  authDomain: "todo-app-29fd0.firebaseapp.com",
  databaseURL: "https://todo-app-29fd0.firebaseio.com",
  projectId: "todo-app-29fd0",
  storageBucket: "todo-app-29fd0.appspot.com",
  messagingSenderId: "176290396354"
};


class App extends Component {
  constructor(props){
    super(props);

    this.app = firebase.initializeApp(config);
    this.database = this.app.database().ref().child('item');
    this.state = {
      todo_list: [],
      txtTask: '',
      itemEditing: -1,
      indexNewAction: 0
    }
  }

  componentDidMount(){

    console.log('component did mounts');

    const previousList = this.state.todo_list;

    // ADD CHILD
    this.database.on('child_added', snap => {
      previousList.push({
        id: snap.key,
        name: snap.val().name,
        isActived: snap.val().isActived,
        isChecked: snap.val().isChecked
      });
      this.setState({todo_list: previousList});
    });


  }

  input_handleChange(text){
    this.setState({txtTask: text});
  }

  addTask_click(){
    if(this.state.txtTask.trim() === ''){
      return;
    }

    if(this.state.itemEditing < 0){ // ADD ITEM
      this.database.push().set({
        name: this.state.txtTask,
        isChecked: false,
        isActived: false
      });
      this.setState({txtTask: ''});
    } else{ // EDIT ITEM
      const list = this.state.todo_list;
      const key = list[this.state.itemEditing].id;
      this.database.child(key).update({
        name: this.state.txtTask,
        isChecked: list[this.state.itemEditing].isChecked,
        isActived: list[this.state.itemEditing].isActived,
      });
    }
  }

  listItem_handleClick(key){
    if(this.state.itemEditing < 0)
      this.setState({indexNewAction: key});
  }

  edit_handleClick(key){
    if(key !== this.state.itemEditing){
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

  delete_handleClick(key){
    const list = this.state.todo_list;
    list.splice(key,1);
    this.setState({todo_list: list});
  }

  render() {
    let _todoList = this.state.todo_list;
    // console.log(_todoList);
    return (
      <div className="App">
      
        <div className="w-50 container">

          <Title isEditing={this.state.itemEditing}/>

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
            listItem_handleClick={this.listItem_handleClick.bind(this)}
            delete_handleClick={this.delete_handleClick.bind(this)}/>

        </div>
      </div>
    );
  }
  }

export default App;
