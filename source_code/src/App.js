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
      nodeId_Editing: undefined,
      indexNewAction: 0
    }
  }

  componentDidMount(){
    const previousList = this.state.todo_list;

    // SET LISTEN ON FOR ITEMS [LOAD ALL ITEM]
    console.log(this.database);
    this.database.orderByKey().once("value")
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          // SnapShot item child
          this.database.child(childSnapshot.key).on('value', itemSnap => {
            const index = previousList.findIndex(value => value.id === itemSnap.key);
            if(index >=0 && itemSnap.val() !== null){
              previousList[index].name = itemSnap.val().name;
              previousList[index].isActived = itemSnap.val().isActived;
              previousList[index].isChecked = itemSnap.val().isChecked;
              that.setState({
                todo_list: previousList, 
                txtTask: '', 
                itemEditing: -1
              });
            }
          });
        });
    });


    // LISTEN ON --- ADD CHILD
    const that = this;
    this.database.on('child_added', function(snap){
      previousList.push({
        id: snap.key,
        name: snap.val().name,
        isActived: snap.val().isActived,
        isChecked: snap.val().isChecked
      });

      that.setState({todo_list: previousList});
    });


    // DELETE CHILD
    this.database.on('child_removed', snap => {
      for(var i=0;i < previousList.length; i++){
        if(previousList[i].id === snap.key){
          previousList.splice(i,1);
        }
      }

      this.setState({
        todo_list: previousList
      });
    });

  } // END componentDidMount


  updateData(updateType, nodeId, index){

    if(updateType === 'NAME'){
      this.database.child(nodeId).update({
        name: this.state.txtTask
      });
    }

    // if(updateType === 'IS_ACTIVED'){
    //   this.database.child(nodeId).update({
    //     isActived: null
    //   });
    // }

    if(updateType === 'IS_CHECKED'){

      this.database.child(nodeId).orderByKey().once("value").then(snap=>{
        console.log(!snap.val().isChecked);
        this.database.child(nodeId).update({
          isChecked: !snap.val().isChecked
        });
      });

    }

  } // END updateData_Click


  //GOOD
  input_handleChange(text){
    this.setState({txtTask: text});
  }


  //GOOD
  addTask_click(){
    if(this.state.txtTask.trim() === ''){
      return;
    }

    if(this.state.itemEditing < 0){
      this.database.push().set({ // PUSH ITEM TO DATABASE
        name: this.state.txtTask,
        isChecked: false,
        isActived: false
      });
      this.setState({txtTask: ''});
    }
  }

  //GOOD
  listItem_handleClick(index){
    if(this.state.itemEditing < 0)
      this.setState({indexNewAction: index});
  }

  //GOOD
  edit_handleClick(index){
    if(index !== this.state.itemEditing){
      const list = this.state.todo_list;
      
      if(index < list.length){
        this.setState({txtTask: list[index].name, itemEditing: index, indexNewAction: index});
      }else{
        console.log('have error edit_handleClick in App.js : "key > list.length"');
      }
    } else{
      this.setState({itemEditing: -1, txtTask: ''});
    }
  }

  //GOOD
  isChecked_handleClick(key){
    const list = this.state.todo_list;
    list[key].isChecked = !list[key].isChecked;
    this.setState({todo_list: list});
  }

  //GOOD
  deleteNode(noteId){
    this.database.child(noteId).remove();
  }

  setNodeId(nodeId){
    this.setState({nodeId_Editing: nodeId});
  }

  render() {
    let _todoList = this.state.todo_list;
    // console.log('a');
    // console.log(_todoList);
    return (
      <div className="App">
      
        <div className="w-50 container">

          <Title isEditing={this.state.itemEditing}/>

          <TaskForm 
            task_handleChange={this.input_handleChange.bind(this)} 
            txtTask={this.state.txtTask} 
            addTask_click={this.addTask_click.bind(this)}
            updateData={this.updateData.bind(this)}
            editing={this.state.itemEditing}
            nodeId_Editing={this.state.nodeId_Editing}/>

          <TaskList todoList={_todoList} 
            edit_handleClick={this.edit_handleClick.bind(this)}
            isChecked_handleClick={this.isChecked_handleClick.bind(this)}
            editing={this.state.itemEditing}
            indexNewAction={this.state.indexNewAction}
            listItem_handleClick={this.listItem_handleClick.bind(this)}
            deleteNode={this.deleteNode.bind(this)}
            setNodeId={this.setNodeId.bind(this)}
            updateData={this.updateData.bind(this)}/>

        </div>
      </div>
    );
  }
  }

export default App;
