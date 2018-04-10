import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from './styles';



class TodoListHeader extends Component{
    render(){
        return <h1 style={styles.header}>{this.props.title}</h1>;
    }
}

export default TodoListHeader