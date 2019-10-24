import React,{Fragment} from 'react';

function Calendar(props) {
  const {todo} = props
  let index = 0;

  function generate() {
    const today = props.date;
    const startWeek = today.clone().startOf('month').week();
    const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    console.log("startweek,endweek",startWeek,endWeek)
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="week" key={week}>
          {
            Array(7).fill(0).map((n, i) => {
              let current = today.clone().week(week).startOf('week').add(n + i, 'day')
              let currentDate = current.format("Y-MM-DD");

          
              return (
                <div className="day" key={i}>
                  <h3 className="day-label">{current.format('D')}</h3>
                  
                  { current.format("yyyy-MM-DD") === todo[0].startDate ? 
                    <div class='event-consecutive event-start event-end' data-span="2" data-toggle='popover' data-html='true' data-placement='left'>{todo[index].title}</div>
                  :
                    <div>gg</div>
                  }
                  
                </div>
              )
            })
          }
        </div>
      )
    }
    return calendar;
  }
  return (
    <Fragment>
        {generate()}
    </Fragment>
  )
}
export default Calendar;