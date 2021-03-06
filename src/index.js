import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoListHeader from "./TodoListHeader";
import TodoInput from "./TodoInput";
import styles from "./styles";
import TodoList from "./TodoList";
import TodoListFooter from "./TodoListFooter";

class ToDoListApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 0, todo: "Learn React", completed: false },
        { id: 1, todo: "Learn Redux", completed: false }
      ],
      inputText: "",
      lastId: 1
    };
    this.toggleComplete = this.toggleComplete.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  toggleComplete(item) {
    let todos = this.state.todos.map(todo => {
      if (todo.id === item.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos });
  }

  removeTodo(item) {
    let todos = this.state.todos.filter(todo => todo.id !== item.id);
    this.setState({ todos });
  }

  clearCompleted() {
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  }

  handleInput(event) {
    this.setState({ inputText: event.target.value });
  }

  addTodo(event) {
    event.preventDefault();
    let lastId = this.state.lastId;

    if (this.state.inputText) {
      const newId = lastId + 1;
      const newTodo = {
        id: newId,
        todo: this.state.inputText,
        completed: false
      };
      let todos = this.state.todos.concat(newTodo);
      this.setState({ todos, lastId: newId });
    }
  }

  render() {
    const { todos } = this.state;
    return (
      <div style={styles}>
        <TodoListHeader title="So much Done!" />
        <TodoInput handleInput={this.handleInput} addTodo={this.addTodo} />
        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            toggleComplete={this.toggleComplete}
            removeTodo={this.removeTodo}
          />
        ) : (
          "Nothing to do!"
        )}
        <TodoListFooter
          todoCount={todos.length}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

ReactDOM.render(<ToDoListApp />, document.getElementById("root"));
