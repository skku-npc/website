import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Pending.css';

const Pending = ({ pendingOpen, setPendingOpen }) => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const pending = useRef();

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

  const clickOutside = ({ target }) => {
    if (pendingOpen && !pending.current.contains(target)) {
      setPendingOpen(false);
    }
  };

  useEffect(() => {
    if (pendingOpen) fetchData();
    window.addEventListener('click', clickOutside);
    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, [pendingOpen]);

  return (
    pendingOpen ? (
      <div className="modal">
        <div className="modal-content pending" ref={pending}>
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
      </div>
    ) : null
  );
};

Pending.propTypes ={
  pendingOpen: PropTypes.bool.isRequired,
  setPendingOpen: PropTypes.func.isRequired
};

export default Pending;
