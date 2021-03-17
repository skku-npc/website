import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import './FixEvent.css';

const FixEvent = ({ setModalOpen, mode, event, loadData }) => {
  const [ Title, setTitle ] = useState();
  const [ input, setInput ] = useState({
    id: 0,
    title: '',
    start: '',
    end: '',
    allDay: false
  });
  const { id, title, start, end, allDay } = input;

  const fillInput = (data) => {
    setInput({
      id: data.id,
      title: data.title,
      start: moment(data.start).format('YYYY-MM-DD' + (data.allDay ? '' : 'THH:mm')),
      end: moment(data.end).format('YYYY-MM-DD' + (data.allDay ? '' : 'THH:mm')),
      allDay: data.allDay || false
    });
  };

  const allDayOnClick = (e) => {
    const { checked } = e.target;
    let changed = {...input};
    changed['allDay'] = checked;
    fillInput(changed);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const postInput = () => {
    let req = {
      title: title,
      start: allDay ? start.slice(0, 10) + 'T00:00' : start,
      end: allDay ? start.slice(0, 10) + 'T23:59' : end,
      allDay: allDay
    };
    req['start'] = new Date(req['start']);
    req['end'] = new Date(req['end']);
    if (mode === 'add') {
      axios.post('/api/calendar/event', req)
        .then(() => {
          setModalOpen(false);
          loadData();
        }).catch(error => {
          window.alert(error);
        });
    } else {
      axios.patch(`/api/calendar/event/${id}`, req)
        .then(() => {
          setModalOpen(false);
          loadData();
        }).catch(error => {
          window.alert(error);
        });
    }
  };

  const deletePost = () => {
    axios.delete(`/api/calendar/event/${id}`)
      .then(() => {
        setModalOpen(false);
        loadData();
      }).catch(error => {
        window.alert(error);
      });
  };

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      postInput();
    }
  };

  useEffect(() => {
    setTitle(mode === 'add' ? '일정 추가' : '일정 수정 / 삭제');
    fillInput(event);
  }, []);

  return (
    <div className="fix-event">
      <div className="row mb-5">
        <div className="title col p-0">{Title}</div>
      </div>
      <div className="containerFixEvent">
        <div className="row horizontal-center mb-4">
          <div className="name col-2 p-0">
            제목
          </div>
          <div className="col-8 offset-1 p-0">
            <input type="text" name="title" value={title} onKeyPress={pressEnter} onChange={onChange} required />
          </div>
        </div>
        <div className="row horizontal-center mb-4">
          <div className="name col-2 p-0">
            종일
          </div>
          <div className="col-8 offset-1 p-0">
            <input type="checkbox" name="allDay" checked={allDay} onChange={allDayOnClick} />
          </div>
        </div>
        <div className="row horizontal-center mb-4">
          <div className="name col-2 p-0">
            시작
          </div>
          <div className="col-8 offset-1 p-0">
            <input type={allDay ? 'date' : 'datetime-local'} name="start" value={start} onKeyPress={pressEnter} onChange={onChange} required />
          </div>
        </div>
        <div className="row horizontal-center mb-4">
          <div className="name col-2 p-0">
            끝
          </div>
          <div className="col-8 offset-1 p-0">
            <input type='datetime-local' name="end" value={end} onKeyPress={pressEnter} onChange={onChange} disabled={allDay} />
          </div>
        </div>
        <br /><br />
        <div className="row justify-content-center horizontal-center">
          <button className="col-2 p-0" onClick={postInput}>저장</button>
          {
            mode === 'edit' ?
              <button className="col-2 p-0" onClick={deletePost} style={{color: '#e70e0e'}}>삭제</button> : null
          }
        </div>
      </div>
    </div>
  );
};

FixEvent.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  loadData: PropTypes.func.isRequired
};

export default FixEvent;
