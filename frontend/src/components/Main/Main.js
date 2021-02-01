import React from 'react';
import './Main.css';

const classBox = ({ id, title, text }) => {
  return (
    <div className="col-3 class-box" id={id}>
      <div className="vertical-center horizontal-center">
        <span style={{ fontSize: '25px' }}>{title}</span>
        <br /><br />
        <span style={{ fontSize: '20px' }}>{text}</span>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="container-fluid no-pad">
      <div className="frame no-pad" id="frame_1">
        <img className="img" src="/pics/main_1.png" alt="main_1" />
        <div className="row justify-content-around align-items-end" style={{ padding: '0 5%' }}>
          <div className="col main_text">
            <span style={{ fontSize: '100px' }}>NPC</span>
            <br />
            <span style={{ fontSize: '50px' }}>NP-Complete</span>
          </div>
          <div className="col sub_text">
            성균관대 소프트웨어대학
            <br />
            알고리즘 문제해결(PS) 동아리
          </div>
        </div>
      </div>

      <div className="frame" id="frame_2">
        <div className="row title">
          NPC는
          <br />
          알고리즘 문제해결(PS) 동아리입니다.
        </div>
        <div className="row justify-content-center">
          <div className="col-5 sub_text">
            NPC는 2011년에 정보통신대학 소속 알고리즘 연구회로 활동을 시작해, 다양한 알고리즘 관련 활동을 이어오고 있습니다.
            <br /><br />
            많은 기업에서 코딩테스트를 도입하는 등 PS의 중요성은 잘 알려져 있습니다. 알고리즘 문제해결은 소프트웨어 엔지니어링의 핵심 능력을 키우기에 가장 좋은 활동 중 하나입니다.
          </div>
          <div className="col-5 offset-1">
            <img className="img" src="/pics/main_2.png" alt="main_2" />
          </div>
        </div>
      </div>

      <div className="frame" id="frame_3">
        <div className="row title">NPC는 알고리즘 경시대회를 준비합니다.</div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="img" style={{ backgroundImage: 'url(/pics/main_3.png)' }}>
              <div className="background">
                <div className="vertical-center white">
                  <div className="horizontal-center" style={{ fontSize:'40px' }}>1. 다양한 프로그래밍 경시대회 참가 </div>
                  <br /><br />
                  <div style={{ fontSize:'21px' }}>
                    해마다 열리는 ACM-ICPC를 주로 준비합니다. 3명이 한 팀이 되어 대회에 참가하기에, NPC에서 자신과 맞는 팀원을 찾을 수 있습니다. 이외에도 Google Code Jam, UCPC, SCPC 등의 경시대회에
                    활발하게 참가하며, 경인지역 6개 대학 연합 프로그래밍 대회 shake!에서 타 대학과 교류하고 있습니다. 평소에는 백준과 Codeforces, AtCoder 등의 문제를 함께 풀이하며 프로그래밍 경시대회를
                    준비합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" style={{ fontSize: '40px', margin: '10% 0' }}>
          2. 학기 중 단계별 스터디 매주 진행
        </div>
        <div className="row justify-content-around">
          {classBox({id: 'basic', title: '초급반', text: 'C++, 기초 알고리즘'})}
          {classBox({id: 'intermediate', title: '중급반', text: '학부 수준의 알고리즘'})}
          {classBox({id: 'advanced', title: '고급반', text: '대회 전용 알고리즘'})}
        </div>
      </div>

      <div className="frame" id="frame_4">
        <div className="row" style={{ fontSize: '50px' }}>
          동아리방 위치
        </div>
        <div className="row" style={{ fontSize: '30px', marginBottom: '5%' }}>
          자연과학캠퍼스 반도체관 400609호
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <img src="/pics/main_4.png" alt="floorInformation" />
          </div>
          <div className="col-5">
            <img src="/pics/main_5.png" alt="roomPhoto" />
          </div>
        </div>
      </div>

      <div className="frame no-pad no-margin" id="frame_5">
        <div className="row background horizontal-center align-items-center">
          <div className="col-9 offset-1 no-pad" style={{marginTop:'5vh'}}>
            <span className="yellow">
                if (<span className="white">interested</span>)
            </span>
          </div>
          <div className="col-9 offset-2 no-pad">
            <span className="yellow">
              join (<span className="green">NPC</span>)
            </span>
          </div>
          <div className="col-12 no-pad" style={{margin:'5vh 0'}}>
            <span className="green">
              NPC <span className="white">지원하기 &gt;</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
