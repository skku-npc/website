import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
//import axios from 'axios';

import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('ko');
const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [ eventData, setEventData ] = useState([]);
  const [ selectedDate, setSelectedDate ] = useState(moment().toDate());

  useEffect(async () => {
    /*
    const result = await axios.get('/api/calendar/events', {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth(),
        }
      }
    );
    */
    const result = {
      status: 200,
      data: [
        {
          start: moment().toDate(),
          end: moment().toDate(),
          title: 'TODAY'
        },
        {
          start: new Date(2021,1,1,19),
          end: new Date(2021,1,1,20),
          title: 'NPC -website -front Meeting'
        },
        {
          start: new Date(2021,1,2,19),
          end: new Date(2021,1,2,20),
          title: 'NPC -website -Design Meeting'
        },
        {
          start: new Date(2021,1,21),
          end: new Date(2021,1,21,23,59),
          title: '겨울방학 종료'
        }
      ]
    };
    setEventData(result.data);
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <div className="container-fluid">
      <center>
        <BigCalendar
          step={15}
          timeslots={8}
          localizer={localizer}
          defaultDate={moment().toDate()}
          defaultView="month"
          events={eventData}
          views={['month','week','day']}
          style={{ height: '704px',
            width: '1064px',
          }}
          onNavigate={date => {
            setSelectedDate(date);
          }}
          eventPropGetter={() => ({
            style: {
              backgroundColor: '#59861C',
            },
          })}
        />
      </center>
    </div>
  );
};



export default Calendar;
