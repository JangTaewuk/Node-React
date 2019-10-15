import React,{Component} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default class Todo extends Component{

    static count = 0

    constructor(){
        super()
        this.state = { todos:[]}
    }

    addTodo = (title) => {
        const arr = this.state.todos
        arr.push({tno: ++Todo.count, title:title, complete:false})
        console.log("todo Add (index.js):" + title)
        this.setState({todos:arr})
    }

    changeTodo = (tno) => {
        const target = this.state.todos.filter(obj => obj.tno === tno)[0]
        const idx = this.state.todos.indexOf(target)
        const tempArr = this.state.todos
        tempArr[idx] = Object.assign(target, {complete: !target.complete})
        this.setState({todos:tempArr})
    }

    deleteTodo = (tno) => {
        const target = this.state.todos.filter(obj => obj.tno === tno)[0]
        const idx = this.state.todos.indexOf(target)
        const tempArr = this.state.todos
        tempArr.splice(idx,1)
        this.setState({todos:tempArr})
    }

    render(){
        return(
            <div>
                <h2>SimpleToDo List</h2>
                <TodoInput add={this.addTodo}></TodoInput>
                <TodoList todos={this.state.todos} change={this.changeTodo} del={this.deleteTodo}></TodoList>
            </div>
        )
    }
}