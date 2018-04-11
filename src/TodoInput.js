import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./styles";
import PropTypes from "prop-types";
class TodoInput extends Component {
  render() {
    const { handleInput, addTodo } = this.props;
    return (
      <div style={styles.input}>
        <form onSubmit={event => addTodo(event)}>
          <input type="text" onChange={event => handleInput(event)} />
          <span>Press Enter to Add</span>
        </form>
      </div>
    );
  }
}

export default TodoInput;

TodoInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};
