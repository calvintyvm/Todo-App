import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from './styles';
import PropTypes from "prop-types";


class TodoListFooter extends Component{
    render(){
        return ( 
        <div style={styles.footer}>
            <div style={styles.footerItem}>{this.props.todoCount} {(this.props.todoCount > 1) ? "todos" : "todo"}</div>
            <div style={styles.footerItem2}> <button type="button">Clear Completed</button> </div>


        </div>
        )  
        }
};

TodoListFooter.propTypes ={
    todoCount:PropTypes.number.isRequired
};

export default TodoListFooter