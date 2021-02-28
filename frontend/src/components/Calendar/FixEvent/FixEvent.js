import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import './FixEvent.css';

const FixEvent = ({ setModalOpen, events, loadData, mode }) => {
  const [ Title, setTitle ] = useState();
  const [ input, setInput ] = useState({
    id: 0,
    title: '',
    start: '',
    end: '',
    allDay: false
  });
  const { id, title, start, end, allDay } = input;
  const fillOutEl = useRef();
  const selectEl = useRef();

  const fillOutOnClick = (data) => {
    setInput({
      id: data.id,
      title: data.title,
      start: moment(data.start).format('YYYY-MM-DD' + (data.allDay ? '' : 'THH:mm')),
      end: moment(data.end).format('YYYY-MM-DD' + (data.allDay ? '' : 'THH:mm')),
      allDay: data.allDay || false
    });
    fillOutEl.current.style.display = 'block';
    selectEl.current.style.display = 'none';
  };

  const selectOnClick = () => {
    fillOutEl.current.style.display = 'none';
    selectEl.current.style.display = 'block';
  };

  const allDayOnClick = (e) => {
    const { checked } = e.target;
    let changed = {...input};
    changed['allDay'] = checked;
    fillOutOnClick(changed);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const filloutPost = () => {
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

  const deletePost = (data) => {
    axios.delete(`/api/calendar/event/${data.id}`)
      .then(() => {
        setModalOpen(false);
        loadData();
      }).catch(error => {
        window.alert(error);
      });
  };

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      filloutPost();
    }
  };

  useEffect(() => {
    if (mode === 'add') {
      setTitle('일정 추가');
      fillOutOnClick({
        title: '',
        start: moment().format('YYYY-MM-DDTHH:mm'),
        end: moment().format('YYYY-MM-DDTHH:mm'),
        allDay: false
      });
    } else {
      setTitle('일정 수정 / 삭제');
      selectOnClick();
    }
  }, []);

  return (
    <div className="fix-event">
      <div className="row mb-5">
        <div className="title col p-0">{Title}</div>
      </div>
      <div className="containerFixEvent" ref={fillOutEl} style={{display: 'none'}}>
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
          <button className="col-2 p-0" onClick={filloutPost}>저장</button>
          {
            mode === 'edit' ?
              <button className="col-2 p-0" onClick={selectOnClick}>돌아가기</button> : null
          }
        </div>
      </div>
      <div className="containerFixEvent" ref={selectEl} style={{display: 'none'}}>
        {
          events.length > 0 ?
            events.map((data, index) => (
              <div className="row mb-3 align-items-center" key={index}>
                <div className="col-10 p-0">
                  <span className="name">{data.title}</span>
                  <br/>
                  <span className="details">{data.allDay ? `${moment(data.start).format('YYYY-MM-DD')}` : `${moment(data.start).format('YYYY-MM-DD HH:mm')} - ${moment(data.end).format('YYYY-MM-DD HH:mm')}`}</span>
                </div>
                <div className="col-1 p-0">
                  <img src="/icons/pencil.png" alt="edit" onClick={() => fillOutOnClick(data)} />
                </div>
                <div className="col-1 p-0">
                  <div className="close" onClick={() => deletePost(data)}/>
                </div>
              </div>
            )) :
            <div className="row">
              <div className="col p-0">
                수정 / 삭제 가능한 일정이 없습니다.
              </div>
            </div>
        }
      </div>
    </div>
  );
};

FixEvent.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  loadData: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

export default FixEvent;
