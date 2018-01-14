import React, { Component } from "react";
import "./Todo.css";

import TodoItem from "../TodoItem/index";
import AddNewItem from "../AddNewItem/index";

class Todo extends Component {
  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  addTask(newItem) {
    this.props.addTask(newItem);
  }
  doneTask(index) {
    this.props.doneTask(index);
  }
  removeTask(index) {
    this.props.removeTask(index);
  }
  render() {
    return (
      <div className="Todo">
        <AddNewItem addTask={this.addTask} />
        {this.props.tasks.length > 0 ? (
          this.props.tasks.map((element, i) => {
            return (
              <TodoItem
                key={i}
                index={i}
                task={element}
                removeTask={this.removeTask}
                doneTask={this.doneTask}
              />
            );
          })
        ) : (
          <h1>There is empty list of items. Please, add new:)</h1>
        )}
      </div>
    );
  }
}

export default Todo;
