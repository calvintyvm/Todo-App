import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from './styles';

class TodoInput extends Component{
    render(){
        return(
            <div>
                <span style={styles.input}>
                <p><input type="text"/></p>
            
                </span>
            </div>
        )

    }
}


export default TodoInput