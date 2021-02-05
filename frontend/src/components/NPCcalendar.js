import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("ko");
const localizer = momentLocalizer(moment);




class NPCcalendar extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().toDate(),
        title: "TODAY"
      },
      {
        start: new Date(2021,1,1,19),
        end: new Date(2021,1,1,20),
        title: "NPC -website -front Meeting"
      },
      {
        start: new Date(2021,1,2,19),
        end: new Date(2021,1,2,20),
        title: "NPC -website -Design Meeting"
      },
      {
        start: new Date(2021,1,21),
        end: new Date(2021,1,21,23,59),
        title: "겨울방학 종료"
      }


    ]
  };


  render() {
    return (
      <center>
      <div className="NPCcalendar">
        
        <Calendar
          step={15}
          timeslots={8}
          localizer={localizer}
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          views={['month','week','day']}
          style={{ height: "704px",
          width: "1064px",
          }}
          
          eventPropGetter={event => ({
            style: {
              backgroundColor: "#59861C", 
            },
          })}
          
        />
      </div>
      </center>
    );
  }
}

export default NPCcalendar;
