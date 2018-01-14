import React, { Component } from "react";
import "./Todo.css";

import TodoItem from '../TodoItem/index';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Read articles", "Eat", "Sleep", "Rave", "Repeat"]
    };
  }
  render() {
    return (
      <div className="Todo">
        {this.state.tasks.map((element, i) => {
          return <TodoItem key={i} text={element} />
        })}
      </div>
    );
  }
}

export default Todo;
