import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoListHeader from './TodoListHeader';
import TodoInput from './TodoInput';
import styles from './styles';
import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';



const todos = ["Learn React2","Learn React2","Learn React3"];


 
class ToDoListApp extends Component {
  render() {
    return (
    <div style={styles}>
        < TodoListHeader title="So much Done!"/>
        < TodoInput/>
        < TodoList todos={todos}/>
        < TodoListFooter todoCount={todos.length}/>
    </div>
    )

  }
}




ReactDOM.render(<ToDoListApp />, document.getElementById("root"));