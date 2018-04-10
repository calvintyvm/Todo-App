import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from './styles';
import PropTypes from "prop-types";



class TodoList extends Component{
    render(){

        return(
            
                <div>
                
                <ul style={styles.list}>
                {this.props.todos.map((item,i) =>{
                    return <TodoItems key={i} item= {item} />;
                })}

                </ul>
                </div>
        )
    }
}

class TodoItems extends Component{
    render(){
        return (
            <li>
                <span>{this.props.item} </span>
            </li>
        )
    }
}


TodoList.propTypes = {
    todos:PropTypes.array.isRequired
};




export default TodoList