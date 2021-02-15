import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Pending.css';

const Pending = () => {
  const [pendingUsers, setPendingUsers] = useState([]);

  const fetchData = async () => {
    // const result = await axios.get('/rest/members');
    const result = {
      status: 200,
      members: [
        {
          name: '홍길동',
          department: '의상학과',
          entranceYear: 2021
        },
        {
          name: '홍길동',
          department: '의상학과',
          entranceYear: 2021
        },
        {
          name: '홍길동',
          department: '의상학과',
          entranceYear: 2021
        },
        {
          name: '홍길동',
          department: '의상학과',
          entranceYear: 2021
        }
      ]
    };

    setPendingUsers(result.members);
  };

  useEffect(() => {
    fetchData();
  });

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
              <span className="details">{data.department}, {data.entranceYear % 100}학번</span>
            </div>
            <div className="col-2 p-0">
              <div className="check" />
            </div>
            <div className="col-2 p-0">
              <div className="close"/>
            </div>
          </div>
        ))
      }
    </div>
  );
};

Pending.propTypes ={
  pendingOpen: PropTypes.bool.isRequired,
  setPendingOpen: PropTypes.func.isRequired
};

export default Pending;
