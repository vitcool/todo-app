import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.doneTask = this.props.doneTask.bind(this, this.props.index);
    this.removeTask = this.props.removeTask.bind(this, this.props.index);
  }
  render() {
    return (
      <div className="TodoItem">
        {this.props.task.task} - {this.props.task.done ? "done" : "todo"}
        <button onClick={this.doneTask}>Done</button>
        <button onClick={this.removeTask}>Remove item</button>
      </div>
    );
  }
}

export default TodoItem;
