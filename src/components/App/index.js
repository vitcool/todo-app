import React, { Component } from 'react';
import './App.css';
import Todo from '../Todo/index'
import { connect } from "react-redux";
import { addTask,removeTask,doneTask } from "../../modules/tasks";

class App extends Component {
  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.state = {
      type: 0
    };
  }
  componentWillReceiveProps(ne){
    debugger
  }
  addTask(newTask){
    this.props.dispatch(addTask(newTask));
    this.setState({ type: 1 });
  }
  doneTask(task){
    this.props.dispatch(doneTask(task));
    this.setState({ type: 1 });
  }
  removeTask(task){
    this.props.dispatch(removeTask(task));
    this.setState({ type: 1 });
  }

  render() {
    return (
      <div className="App">
        <Todo tasks={this.props.tasks.tasks} addTask={this.addTask} doneTask={this.doneTask} removeTask={this.removeTask}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(App);
