import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./styles";
import PropTypes from "prop-types";

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul style={styles.list}>
          {this.props.todos.map(item => {
            return (
              <TodoItems
                key={item.id}
                item={item}
                toggleComplete={this.props.toggleComplete}
                removeTodo={this.props.removeTodo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

class TodoItems extends Component {
  render() {
    const { item, toggleComplete, removeTodo } = this.props;
    return (
      <li>
        <span>
          {item.todo}
          <label htmlFor={item.id} />
          <input
            type="checkbox"
            id={item.id}
            checked={item.complete}
            onClick={() => toggleComplete(item)}
          />
          <button onClick={() => removeTodo(item)}>Delete</button>
        </span>
      </li>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
