import React, { useState, useEffect, Fragment } from 'react';
//import axios from 'axios';
import Member from './Member';
import Profile from './Profile';
import Pending from './Pending';
import './MemberList.css';
import 'animate.css';

const MemberList = () => {
  const [memberData, setMemberData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [filterYear, setFilterYear] = useState();
  const [maxYear, setMaxYear] = useState();
  const [minYear, setMinYear] = useState();
  const [profileOpen, setProfileOpen] = useState(false);
  const [pendingOpen, setPendingOpen] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    // const result = await axios.get('/rest/members');
    const result = {
      status: 200,
      members: [
        {
          name: '김성균',
          id: 'test',
          email: 'naver@gmail.kr',
          baekjoon: 'noojkeab',
          codeforces: 'secrofedoc',
          year: 2019,
        },
        {
          name: '이름',
          id: '아이디',
          email: '이메일',
          baekjoon: 'asdfasd',
          codeforces: 'gewwqf',
          year: 2019,
        },
        {
          name: 'Name1',
          id: 'idididid',
          email: 'test@skku.edu',
          baekjoon: '백준 아이디',
          codeforces: '코포 아이디',
          year: 2019,
        },
        {
          name: 'id2',
          id: 'test',
          email: 'test@test.test',
          baekjoon: 'boj',
          codeforces: 'cf',
          year: 2019,
        },
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2019},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
        { name: 'a', id: 'b', email: 'c', baekjoon: 'd', codeforces: 'e', year: 2020},
      ]
    };

    setMemberData(result.members);
    setMaxYear(Math.max.apply(null, result.members.map(member=>member.year)));
    setMinYear(Math.min.apply(null, result.members.map(member=>member.year)));
    setFilterYear(2020);
  }, []);

  useEffect(() => {
    setDisplayData(memberData.filter(member=>member.year == filterYear));
  }, [filterYear]);

  return (
    <Fragment>
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
        <div className="col-2 px-0 py-2" onClick={() => setPendingOpen(true)}>
          <img src="/icons/triangle-exclamation.png" alt="triangle-exclamation" />
          <span className="new-member">신규 가입</span>
        </div>
      </div>
      <div className="member-container">
        <div className="member-grid animate__animated animate__fadeIn animate__faster"
          key={Math.random()}>
          {
            displayData.map((data, index) => (
              <Fragment key={index}>
                <Member
                  setProfileOpen={setProfileOpen}
                  setProfile={setProfile}
                  user={data}/>
              </Fragment>
            ))
          }
        </div>
      </div>
      <Profile
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
        user={profile}/>
      <Pending
        pendingOpen={pendingOpen}
        setPendingOpen={setPendingOpen}/>
    </Fragment>
  );
};

export default MemberList;
