import React, { Component } from "react";
import "./AddNewItem.css";

class AddNewItem extends Component {
  addTask(){
    this.props.addTask(this.refs.text.value)
    this.refs.text.value = "";
  }
  render() {
    return <div className="AddNewItem">
      <input type="text" ref="text"/><button onClick={this.addTask.bind(this)}>Add item</button>
    </div>;
  }
}

export default AddNewItem;
