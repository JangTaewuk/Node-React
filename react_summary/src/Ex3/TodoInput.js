import React,{Component} from 'react'

export default class TodoInput extends Component {

    constructor(props){
        super(props)
        this.add = props.add
        this.state = {
            todo : ''
        }
    }

    getInputValue = (e) => {
        this.setState({ todo : e.target.value})
    }

    sendInputValue = () => {
        console.log("add Todo (TodoInput)" , this.state.todo )
        this.add(this.state.todo)
        this.setState({todo: ''})
    }

    render(){
        return(
            <div>
                <input type='text' value={this.state.todo} onChange={this.getInputValue}></input>
                <button onClick={this.sendInputValue}>add</button>
            </div>
        )
    }

}
