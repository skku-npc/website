import React, { useState, useEffect, Fragment } from 'react';
//import axios from 'axios';
import Member from './Member';
import './MemberList.css';
import 'animate.css';

const MemberList = () => {
  const [memberData, setMemberData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [filterYear, setFilterYear] = useState();
  const [maxYear, setMaxYear] = useState();
  const [minYear, setMinYear] = useState();

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
    console.log(result.members.map(member=>member.year));
    console.log(Math.max(result.members.map(member=>member.year)));
  }, []);

  useEffect(() => {
    setDisplayData([]);
    setDisplayData(memberData.filter(member=>member.year == filterYear));
  }, [filterYear]);

  return (
    <Fragment>
      <div className="filter-container">
        <button
          onClick={()=>setFilterYear(filterYear-1)}
          disabled={filterYear == minYear}>
            &lt;
        </button>
        <span>{filterYear}</span>
        <button
          onClick={()=>setFilterYear(filterYear+1)}
          disabled={filterYear == maxYear}>
            &gt;
        </button>
      </div>
      <div className="row member-container">
        {
          displayData.map((data, index) => (
            <Fragment key={index}>
              <Member
                name={data.name}
                id={data.id}
                email={data.email}
                baekjoon={data.baekjoon}
                codeforces={data.codeforces}/>
            </Fragment>
          ))
        }
      </div>
    </Fragment>
  );
};

export default MemberList;
