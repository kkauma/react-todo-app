import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: "Code in JavaScript" },
        { task: "Go to the driving range" },
      ],
    };
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
