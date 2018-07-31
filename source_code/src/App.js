import React, { Component } from 'react';
import Title from './components/titleComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="w-50 container">
          <Title/>
          <div className="app-form">
            <div className="form-inline" id="task-form">
              <input type="text" className="rounded-left" />
              <button type="submit" className="btn rounded-right"><i className="fas fa-plus" /> Add Task</button>
            </div>
          </div>
          <div className="todo-list">
            <ul className="list-group w-75">
              <li className="list-group-item position-relative active">
                <p className="row">Cras justo odio Cras justo odio Cras justo odio Cras justo odio Cras justo odio Cras justo odio </p>
                <div className="row tool position-absolute">
                  <button className="bg-white"><i className="fas fa-pen" /></button>
                  <button className="bg-primary"><i className="fas fa-spinner" /></button>
                  <button className="bg-danger"><i className="fas fa-times" /></button>
                </div>
              </li>
              <li className="list-group-item position-relative">
                <p className="row">Cras justo odio</p> 
                <div className="row tool position-absolute">
                  <button className="bg-white"><i className="fas fa-pen" /></button>
                  <button className="bg-primary"><i className="fas fa-check" /></button>
                  <button className="bg-danger"><i className="fas fa-times" /></button>
                </div>
              </li>
              <li className="list-group-item position-relative">
                <p className="row">Cras justo odio </p> 
                <div className="row tool position-absolute">
                  <button className="bg-white"><i className="fas fa-pen" /></button>
                  <button className="bg-primary"><i className="fas fa-check" /></button>
                  <button className="bg-danger"><i className="fas fa-times" /></button>
                </div>
              </li>
              <li className="list-group-item position-relative">
                <p className="row">Cras justo odio</p>
                <div className="row tool position-absolute">
                  <button className="bg-white"><i className="fas fa-pen" /></button>
                  <button className="bg-primary"><i className="fas fa-check" /></button>
                  <button className="bg-danger"><i className="fas fa-times" /></button>
                </div>
              </li>
              <li className="list-group-item position-relative">
                <p className="row">Cras justo odio</p> 
                <div className="row tool position-absolute">
                  <button className="bg-white"><i className="fas fa-pen" /></button>
                  <button className="bg-primary"><i className="fas fa-check" /></button>
                  <button className="bg-danger"><i className="fas fa-times" /></button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
