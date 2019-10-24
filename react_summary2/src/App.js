import React,{Component} from 'react'
import moment from 'moment'
import axios from 'axios'


import Calender from './components/Calender'
import TodoModal from './components/TodoModal'
import DayList from './components/DayList'

export default class App extends Component {

  constructor(){
    super()
    this.state = { currentDate : moment() , type : 'month', todos:[{title:"dd", startDate:'1', rotaionMonth:'1', id:'1',endDate:'1',dayTime:'1',content:'1',allDay:'1'}]}
    console.log("this state",this.state.currentDate.format('Y-M-D'))
  }

  changeDate = (val) => {
    this.state.type === 'month'?
    this.setState({currentDate: this.state.currentDate.clone().add(val, 'month')})
    :
    this.setState({currentDate: this.state.currentDate.clone().add(val, 'day')})
  }

  changeToday = () => {
    console.log("change Today..")
    this.setState({currentDate: moment()})
  }

  // API - TODO
  registerTodo = () => {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.post("http://localhost:5000/todo/new",{title:this.state.title}).then(res=>{console.log(res); this.setState({titie:""})})
    console.log(this.state.title)
  }

  getTodo = () => {
    axios.get("http://localhost:5000/todo/list/2019/10")
        .then(res => {
          const arr = res.data  
          // console.log("getTODO",res.data)
          console.log("getTodos",arr)
            this.setState( {todos : arr} )
        })
  }

  componentWillMount() {
    console.log("componenetWillMount run...")
    this.getTodo()
  }




  render(){
    console.log("render")
  
    return (
      <div className="App">
        
        <div className="calendar-container">
          <div className="calendar-header">
            <button onClick={this.changeToday} className="btn btn-light">Today</button>
            <div className="ico-arrow">
              <a href="#" onClick={()=>this.changeDate(-1)} data-toggle="tooltip" data-placement="top" className="prevBtn" title="이전">
                <i className="material-icons"> chevron_left </i>
              </a> <a href="#" onClick={()=>this.changeDate(1)} data-toggle="tooltip" data-placement="top" className="nextBtn" title="다음">
                <i className="material-icons"> chevron_right </i>
              </a>
            </div>
            <h4> {this.state.currentDate.format('Y')}년  {this.state.currentDate.format('M')}월</h4>
            <ul className="nav nav-tabs view-tab" id="view" role="tablist">
              <li className="nav-item"><a onClick={()=>{this.setState({type:'month'})}} className="nav-link active" id="tab-month" data-toggle="tab" href="#month" role="tab" aria-controls="month" aria-selected="true">월</a></li>
              <li className="nav-item"><a onClick={()=>{this.setState({type:'day'})}} className="nav-link" id="tab-day" data-toggle="tab" href="#day" role="tab" aria-controls="day" aria-selected="false">일</a></li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane active show" id="month" role="tabpanel" aria-labelledby="tab-month">
              <div className="monthly-calendar">
                <div className="week-day">
                  <div className="day-name">일</div>
                  <div className="day-name">월</div>
                  <div className="day-name">화</div>
                  <div className="day-name">수</div>
                  <div className="day-name">목</div>
                  <div className="day-name">금</div>
                  <div className="day-name">토</div>
                </div>
                
                <Calender date={this.state.currentDate} todo={this.state.todos}></Calender>
  
              </div>
            </div>
            <div className="tab-pane" id="day" role="tabpanel" aria-labelledby="tab-day">
              <div className="daily-calendar">
                <span className="day-name"> {this.state.currentDate.format('D')}일 X요일... </span>
                <DayList date={this.state.currentDate.format("Y-MM-DD")}></DayList>
                
  
              </div>
            </div>
          </div>
        </div>
      <TodoModal getData={this.getTodo}></TodoModal>
      </div>
    ) // end return
  }

} // end app.js

