import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pending.css';

const Pending = () => {
  const [ pendingUsers, setPendingUsers ] = useState([]);

  const loadPendingUsers = () => {
    axios.get('/api/users/member/pending')
      .then(response => {
        setPendingUsers(response.data);
      }).catch(error => {
        window.alert(error);
      });
  };

  const buttonOnClick = ( mode, id ) => {
    axios.patch(`/api/users/member/${mode}/${id}`)
      .then(() => {
        loadPendingUsers();
      })
      .catch(error => {
        window.alert(error);
      });
  };

  useEffect(loadPendingUsers, []);

  return (
    <div className="pending">
      <div className="row mb-5">
        <div className="title col p-0">신규 가입</div>
      </div>
      {
        pendingUsers.map((data, index) => (
          <div className="row mb-3 align-items-center" key={index}>
            <div className="col-8 p-0">
              <span className="name">{data.name}</span>
              <br/>
              <span className="details">{data.department}학번</span>
            </div>
            <div className="col-2 p-0">
              <div className="check" onClick={() => buttonOnClick('accept', data.id)}/>
            </div>
            <div className="col-2 p-0">
              <div className="close" onClick={() => buttonOnClick('refuse', data.id)}/>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Pending;
