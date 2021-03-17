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

const Calendar = ({ match, history, setModalContent, setModalOpen, isLoggedIn }) => {
  const [ eventData, setEventData ] = useState([]);
  const [ params, setParams ] = useState({});
  const [ isAdmin, setIsAdmin ] = useState(false);

  const loadData = async () => {
    const { data } = await axios.get('/api/calendar/events', {
      params: {
        year: params.date.getFullYear(),
        month: params.date.getMonth() + 1,
      }
    });
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

  useEffect(() => {
    if (params.date) {
      loadData();
    }
  }, [params]);

  useEffect(() => {
    setParams({
      date: moment(match.params.date, 'YYYY-MM-DD').toDate(),
      view: match.params.view
    });
  }, [match.params]);

  useEffect(async () => {
    if (isLoggedIn) {
      const { data } = await axios.get('/api/user/profile');
      if (data.role === 'Admin') {
        setIsAdmin(true);
      }
    }
  }, [isLoggedIn]);

  const openModal = (mode, event) => {
    if (isAdmin) {
      setModalContent(<FixEvent setModalOpen={setModalOpen} mode={mode} event={event} loadData={loadData} />);
      setModalOpen(true);
    }
  };

  return (
    <div className="calendar container-fluid p-0">
      <div className="row">
        <div className="col calendar-title p-0">
          동아리 일정
        </div>
      </div>
      <center>
        <BigCalendar
          step={15}
          timeslots={8}
          localizer={localizer}
          events={eventData}
          views={['month','week','day']}
          date={params.date}
          view={params.view}
          onView={(view) => {
            history.push(`/calendar/${view}/${moment(params.date).format('YYYY-MM-DD')}`);
          }}
          onNavigate={(newDate, view) => {
            history.push(`/calendar/${view}/${moment(newDate).format('YYYY-MM-DD')}`);
          }}
          selectable={isAdmin}
          onSelectEvent={(event) => openModal('edit', event)}
          onSelectSlot={(slotInfo) => openModal('add', {
            title: '',
            start: slotInfo.start,
            end: slotInfo.end,
            allDay: false
          })}
          eventPropGetter={() => ({
            style: {
              backgroundColor: '#59861C',
            },
          })}
          style={{ height: '70vh', width: '80%', margin: '0 10%'}}
        />
      </center>
    </div>
  );
};

Calendar.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  setModalContent: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default Calendar;
