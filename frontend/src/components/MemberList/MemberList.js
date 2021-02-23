import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Member from './Member';
import Pending from './Pending';
import './MemberList.css';
import 'animate.css';

const MemberList = ({ setModalContent, setModalOpen, isLoggedIn }) => {
  const [memberData, setMemberData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [filterYear, setFilterYear] = useState();
  const [maxYear, setMaxYear] = useState();
  const [minYear, setMinYear] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(async () => {
    const { data } = await axios.get('/api/users/member');
    setMemberData(data);
    setMaxYear(Math.max.apply(null, data.map(member=>member.createdAt)));
    setMinYear(Math.min.apply(null, data.map(member=>member.createdAt)));
    setFilterYear(new Date().getFullYear());
  }, []);

  useEffect(async () => {
    if (isLoggedIn) {
      const { data } = await axios.get('/api/user/profile');
      if (data.role === 'Admin') {
        setIsAdmin(true);
      }
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setDisplayData(memberData.filter(member=>(member.createdAt == filterYear && member.status === 'ACCEPTED')));
  }, [filterYear]);

  const pendingOpen = () => {
    setModalContent(<Pending />);
    setModalOpen(true);
  };

  return (
    <div className="member-list p-0">
      <div className="member-title">
        동아리 멤버
      </div>
      <div className="filter-container">
        <div className="col-6 offset-3 p-0">
          <button
            onClick={()=>setFilterYear(filterYear-1)}
            disabled={filterYear == minYear}>
              &lt;
          </button>
          <span className="filter-year">{filterYear}</span>
          <button
            onClick={()=>setFilterYear(filterYear+1)}
            disabled={filterYear == maxYear}>
              &gt;
          </button>
        </div>
        {
          isAdmin ?
            <div className="col-2 p-0" onClick={pendingOpen}>
              <div className="new-member-button px-0 py-2">
                <img src="/icons/triangle-exclamation.png" alt="triangle-exclamation" />
                <span className="new-member">신규 가입</span>
              </div>
            </div> : null
        }
      </div>
      <div className="member-container">
        <div className="member-grid animate__animated animate__fadeIn animate__faster"
          key={Math.random()}>
          {
            displayData.map((data, index) => (
              <Fragment key={index}>
                <Member
                  setModalOpen={setModalOpen}
                  setModalContent={setModalContent}
                  user={data} />
              </Fragment>
            ))
          }
        </div>
      </div>
    </div>
  );
};

MemberList.propTypes = {
  setModalContent: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default MemberList;
