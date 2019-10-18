import React,{Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import axios from 'axios'

export default class Todo extends Component {

    constructor(){
        super()
    }

    addTodo = () => {
        console.log("add todo",)
    }

    render(){
        return(
            <div>
                <TodoInput add={this.addTodo}></TodoInput>
                <TodoList></TodoList>
            </div>
        )
    }

}