import React,{Component} from 'react'
import axios from 'axios'

export default class TodoInput extends Component{

    constructor(props){
        super(props)
        this.state = {
            title : ''
        }
    }

    
    addTodo = () => {
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        axios.post("http://localhost:5000/todo/new",{title:this.state.title}).then(res=>{console.log(res); this.setState({titie:""})})
        console.log(this.state.title)
    }


    render(){
        return(
            <div>
                <input type='text' placeholder='일정입력' onChange={(e)=>{this.state.title = e.target.value}}></input>
                <button onClick={this.addTodo}>추가</button>
            </div>
        )
    }
}