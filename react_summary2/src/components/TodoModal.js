import React,{Component,Fragment} from 'react'
import axios from 'axios'


export default class TodoModal extends Component {

    constructor(props){
        super(props)
        this.state = { title : '' ,
                      content: '',
                      startDate: '',
                      endDate: '',
                      dayTime: '',
                      rotationMonth: false,
                      allDay: false,
                     }
    }

    changeHandler = (event,value) => {
      const targetvalue = event.target.value; 
        this.setState({
        ...this.state,
        [event.target.name]: targetvalue
      });
    }

    changeDataPicker = (event) => {
      const targetvalue = event.target.value;
      console.log("dataPicker.....",targetvalue)
    }

    changeCheckbox = (event) => {
      const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      // this.setState({
      //   ...this.state,
      //   [event.target.name] : value
      // })
      const startDate_input = document.getElementById('startDate').value;
      const endDate_input = document.getElementById('endDate').value;
      const startTime_input = document.getElementById('startTime').value
      const endTime_input = document.getElementById('endTime').value
      
      this.setState({
        ...this.state,
        [event.target.name] : value,
        startDate : startDate_input, endDate: endDate_input, dayTime : startTime_input + ' ~ ' + endTime_input
      })
    }

    

    registerTodo = () => {

      // const startDate_input = document.getElementById('startDate').value;
      // const endDate_input = document.getElementById('endDate').value;
      // const startTime_input = document.getElementById('startTime').value
      // const endTime_input = document.getElementById('endTime').value
      
      // this.setState({
      //   ...this.state,
      //   startDate : startDate_input, endDate: endDate_input, dayTime : startTime_input + ' ~ ' + endTime_input
      // })

      axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
      axios.post("http://localhost:5000/todo/new",this.state)
      .then(res=>{res.status == 201? alert("등록성공"):alert("등록실패")})
      //this.props.getTodo();
    }



    render(){
        return(
          <Fragment>
            <div className="modal fade" id="registerSchedule" tabIndex="-1" role="dialog" aria-labelledby="registerScheduleLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="registerScheduleLabel">일정 만들기</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label className="col-form-label">일정 제목</label> 
                      <input onChange={this.changeHandler} value={this.state.title} type="text" name="title" className="form-control" id="recipient-name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message-text" className="col-form-label">일정 설명</label>
                      <textarea onChange={this.changeHandler} value={this.state.content} className="form-control" id="message-text" name="content"></textarea>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">일정 시작 날짜</label>
                          <div className="input-group date" id="datetimepicker1" data-target-input="nearest">
                            <input onCompositionUpdate={this.changeDataPicker} type="text" className="form-control datetimepicker-input" id="startDate" data-target="#datetimepicker1" />
                            <div className="input-group-append" data-target="#datetimepicker1" data-toggle="datetimepicker">
                              <div className="input-group-text">
                                <i className="material-icons"> calendar_today </i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">일정 시작 시간</label>
                          <div className="input-group date" id="datetimepicker2" data-target-input="nearest">
                            <input type="text" className="form-control datetimepicker-input" id="startTime" data-target="#datetimepicker2" />
                            <div className="input-group-append" data-target="#datetimepicker2" data-toggle="datetimepicker">
                              <div className="input-group-text">
                                <i className="material-icons"> access_time </i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">일정 종료 날짜</label>
                          <div className="input-group date" id="datetimepicker3" data-target-input="nearest">
                            <input type="text" className="form-control datetimepicker-input" id="endDate" data-target="#datetimepicker3" />
                            <div className="input-group-append" data-target="#datetimepicker3" data-toggle="datetimepicker">
                              <div className="input-group-text">
                                <i className="material-icons"> calendar_today </i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="col-form-label">일정 종료 시간</label>
                          <div className="input-group date" id="datetimepicker4" data-target-input="nearest">
                            <input type="text" className="form-control datetimepicker-input" id="endTime" data-target="#datetimepicker4" />
                            <div className="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
                              <div className="input-group-text">
                                <i className="material-icons"> access_time </i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" onChange={this.changeCheckbox} type="checkbox" name="rotationMonth" id="inlineCheckbox1" value={this.state.rotationMonth} /> <label className="form-check-label" htmlFor="inlineCheckbox1">매월 반복</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" onChange={this.changeCheckbox} type="checkbox" name="allDay" id="inlineCheckbox2" value={this.state.allDay} /> <label className="form-check-label" htmlFor="inlineCheckbox2">하루 종일</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">취소</button>
                  <button onClick={this.registerTodo} type="button" className="btn btn-primary addBtn">일정 만들기</button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>  
        )
    }
}