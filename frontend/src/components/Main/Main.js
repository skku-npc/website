import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main container-fluid p-0">
      <div className="frame-01">
        <img src="/pics/main_1.png" alt="main_1" />
        <div className="text-box row align-items-center">
          <div className="col-6 p-0">
            <p className="text-xxl text-bold">NPC</p>
            <p className="text-xl text-bold">NP-Complete</p>
          </div>
          <div className="col-6 p-0">
            <p className="text-md text-right mt-3">
                성균관대 소프트웨어대학
              <br />
                알고리즘 문제해결(PS) 동아리
            </p>
          </div>
        </div>
      </div>

      <div className="frame-02">
        <div className="row">
          <div className="col">
            <p className="text-xl mb-5">
                  NPC는
              <br />
                  알고리즘 문제해결(PS) 동아리입니다.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 p-0 pr-5">
            <p className="text-xs text-light">
                  NPC는 2011년에 정보통신대학 소속 알고리즘 연구회로 활동을 시작해, 다양한 알고리즘 관련 활동을 이어오고 있습니다.
              <br /><br />
                  많은 기업에서 코딩테스트를 도입하는 등 PS의 중요성은 잘 알려져 있습니다. 알고리즘 문제해결은 소프트웨어 엔지니어링의 핵심 능력을 키우기에 가장 좋은 활동 중 하나입니다.
            </p>
          </div>
          <div className="col-6 p-0">
            <img src="/pics/main_2.png" alt="main_2" />
          </div>
        </div>
      </div>

      <div className="frame-03">
        <div className="row mb-5">
          <div className="col">
            <p className="text-xl">
                NPC는 알고리즘 경시대회를 준비합니다.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col background" style={{ backgroundImage: 'url(/pics/main_3.png)' }}>
            <div className="text-box">
              <div className="vertical-center white">
                <p className="text-lg horizontal-center py-5">
                    1. 다양한 프로그래밍 경시대회 참가
                </p>
                <br />
                <p className="text-xs text-light">
                      해마다 열리는 ACM-ICPC를 주로 준비합니다. 3명이 한 팀이 되어 대회에 참가하기에, NPC에서 자신과 맞는 팀원을 찾을 수 있습니다. 이외에도 Google Code Jam, UCPC, SCPC 등의 경시대회에
                      활발하게 참가하며, 경인지역 6개 대학 연합 프로그래밍 대회 shake!에서 타 대학과 교류하고 있습니다. 평소에는 백준과 Codeforces, AtCoder 등의 문제를 함께 풀이하며 프로그래밍 경시대회를
                      준비합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-lg horizontal-center">
                2. 학기 중 단계별 스터디 매주 진행
            </p>
          </div>
        </div>
        <div className="class-boxes row justify-content-around horizontal-center">
          <div className="class-box basic col-3 p-0">
            <div className="vertical-center">
              <p className="text-md">초급반</p>
              <br />
              <p className="text-xs">C++, 기초 알고리즘</p>
            </div>
          </div>
          <div className="class-box intermediate col-3 p-0">
            <div className="vertical-center">
              <p className="text-md">중급반</p>
              <br />
              <p className="text-xs">학부 수준의 알고리즘</p>
            </div>
          </div>
          <div className="class-box advanced col-3 p-0">
            <div className="vertical-center">
              <p className="text-md">고급반</p>
              <br />
              <p className="text-xs">대회 전용 알고리즘</p>
            </div>
          </div>
        </div>
      </div>

      <div className="frame-04">
        <div className="row">
          <div className="col">
            <p className="text-xl">
              동아리방 위치
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <p className="text-sm">
              자연과학캠퍼스 반도체관 400609호
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-10 p-0">
            <img src="/pics/main_4.png" alt="room" />
          </div>
        </div>
      </div>

      <div className="frame-05">
        <div className="text-xl row horizontal-center align-items-center py-5">
          <div className="col-9 offset-1 p-0 ">
            <span className="blue">
              <span className="yellow">if</span> (<span className="white">interested</span>)
            </span>
          </div>
          <div className="col-9 offset-2 p-0">
            <span className="blue">
              <span className="yellow">join</span> (<span className="green">NPC</span>)
              <span className="white">;</span>
            </span>
          </div>
          <div className="col-12 pt-5">
            <span className="green">
                NPC <a href={'http://bit.ly/npc-2021-1'} target="_blank" rel="noopener noreferrer" className="white" style={{textDecoration: 'none'}}>지원하기 &gt;</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
