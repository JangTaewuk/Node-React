import React,{Component,Fragment} from 'react'
import axios from 'axios'

export default class DayList extends Component {

    constructor(props){
        super(props)
        this.state={ date:props.date, list_todo:[]}
        
    }

    getDayTodo = (inputDate) => {
        var today = inputDate ==0? this.props.date : inputDate
        let list = []

        axios.get("http://localhost:5000/todo/list/"+today)
            .then(res => {
                var todos = res.data;
                
                for(let i= 0 ; i<todos.length; i++){
                    var {id,title,startDate,endDate} = todos[i]; 
                    list.push(
                        <div key={id} className={startDate !==  endDate ? 'event-consecutive event-start event-end': 'event event-start event-end'}
                         data-toggle='popover' data-html='true' data-placement='left'>{title}</div>
                    )
                }
                this.setState({list_todo:list})
                
            })
    }
    componentDidMount() {
        console.log("componenetDidMount run...")
        this.getDayTodo(0)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.date!==this.props.date){
            console.log("willReceiveProps....")
            console.log("nextprops",nextProps.date)
            this.getDayTodo(nextProps.date)
        }
      }
    

    // static getDerivedStateFromProps(nextProps, prevState){
    //     if(nextProps.date!==prevState.date){
    //         console.log("getderivedSate....")
    //         console.log(DayList);
    //         console.dir(DayList);
            
    //         //DayList.getDayTodo()
    //       return { date: nextProps.date};
    //    }
    //    else return null;
    //  }

    render(){        
        return(
            <Fragment>
                {this.state.list_todo}
            </Fragment>
        )
    }

}
