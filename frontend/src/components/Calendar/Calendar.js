import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import PropTypes from 'prop-types';
import axios from 'axios';
import FixEvent from './FixEvent';
import './Calendar.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('ko');
const localizer = momentLocalizer(moment);

const Calendar = ({ setModalContent, setModalOpen, isLoggedIn }) => {
  const [ eventData, setEventData ] = useState([]);
  const [ selectedDate, setSelectedDate ] = useState(moment().toDate());
  const [ isAdmin, setIsAdmin ] = useState(false);

  useEffect(async () => {
    if (isLoggedIn) {
      const { data } = await axios.get('/api/user/profile');
      if (data.role === 'Admin') {
        setIsAdmin(true);
      }
    }
  }, [isLoggedIn]);

  const loadData = async () => {
    const { data } = await axios.get('/api/calendar/events', {
      params: {
        year: selectedDate.getFullYear(),
        month: selectedDate.getMonth() + 1,
      }
    }
    );
    setEventData(data.map((data) => {
      let result = {...data};
      if (!result['allDay']) {
        delete result['allDay'];
      }
      result['start'] = new Date(result['start']);
      result['end'] = new Date(result['end']);
      return result;
    }));
  };

  useEffect(loadData, [selectedDate]);

  const editOpen = (mode) => {
    setModalContent(<FixEvent setModalOpen={setModalOpen} events={eventData} loadData={loadData} mode={mode} />);
    setModalOpen(true);
  };

  return (
    <div className="calendar container-fluid p-0">
      <div className="row">
        <div className="col calendar-title p-0">
          동아리 일정
        </div>
      </div>
      {
        isAdmin ?
          <div className="row">
            <div className="button col-1 offset-9 p-0" onClick={() => editOpen('add')}>추가</div>
            <div className="button col-2 p-0" onClick={() => editOpen('edit')}>수정 / 삭제</div>
          </div> : null
      }
      <center>
        <BigCalendar
          step={15}
          timeslots={8}
          localizer={localizer}
          defaultDate={selectedDate}
          defaultView="month"
          events={eventData}
          views={['month','week','day']}
          style={{ height: '70vh', width: '80%', margin: '0 10%'}}
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

Calendar.propTypes = {
  setModalContent: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default Calendar;
