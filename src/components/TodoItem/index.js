import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    return <div className="TodoItem">
      {this.props.text}
    </div>;
  }
}

export default TodoItem;
