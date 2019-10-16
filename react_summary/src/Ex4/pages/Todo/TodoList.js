import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

export default class TodoList extends Component{

    constructor(props){
        super(props)
        console.log("constructor....")
        console.log(props)
        this.state = { 
            content:[],
            totalPages:0,
            loaded:false
        }
    }

    componentDidMount(){
        const page = this.props.match.params.page
        console.log("page: " + page)
        this.getData(page)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    getData = (page) => {

        this.setState({loaded:false})

        axios.get("http://localhost:5000/todo")
        .then(res => {
            console.log(res.data)
            console.log("this state",this.state)
            this.setState( Object.assign( {},{content:res.data},{loaded:true})
            
            )
            console.log("done",this.state)
        })

    }

    render(){
        console.log("render....")


        const page = this.props.match.params.page
        const { content, totalPages, loaded} = this.state
        const list = content.map( ({id,title}) => {
            
            return ( <li key={id}> {title} </li>)
        })

        const linkArr = []
        for(let i = 1; i< totalPages; i++){
            linkArr.push(
                <Link to={'/todoList/${i}'} key={i} onClick={() => alert(i)}>{i}</Link>
            )
        }

        return(
            <div>
            <h1>Todo List {page} {loaded ? "END": "NOT YET"}</h1>
                {loaded == true? 
                    <ul>
                        {list}
                    </ul>
                    :
                    <h2> 로딩중.... 잠시만 기달려주세요 ... </h2>
                }    
            </div>
        )
    }
}