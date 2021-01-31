import React from 'react';
import './Main.css';

const Main = () => {
  const ICPC2019photoStyle = {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '94vw',
    height: '51.4vw',
    maxWidth: '1276px',
    maxHeight: '698px',
    backgroundImage: 'url(/pics/main_3.png)',
  };
  const imgCoverStyle = {
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  };
  const ICPC2019photoHeader = {
    position: 'absolute',
    top: '35%',
    left: '10%',
    right: '10%',
    fontSize: '40px',
    color: 'white',
    zIndex: 2,
    textAlign: 'center',
  };
  const ICPC2019photoContent = {
    position: 'absolute',
    top: '55%',
    left: '10%',
    right: '10%',
    fontSize: '21px',
    color: 'white',
    zIndex: 2,
    textAlign: 'left',
    lineHeight: '150%',
  };
  const centerAlignedApply = {
    display: 'block',
    width: '100%',
    height: '420px',
    fontWeight: '650',
    fontSize: '40px',
    color: '#4F7FC7',
    textAlign: 'center',
    verticalAlign: 'bottom',
    backgroundColor: '#24292E',
    lineHeight: '150%',
  };
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <div className="frame" id="frame_1" style={{ padding: 0 }}>
        <img src="/pics/main_1.png" alt="main_1" style={{ width: '100%', maxHeight: '75vh', objectFit: 'cover' }} />
        <div className="row justify-content-around align-items-end" style={{ padding: '0 5%' }}>
          <div className="col" style={{ fontWeight: 800 }}>
            <span style={{ fontSize: '100px' }}>NPC</span>
            <br />
            <span style={{ fontSize: '50px' }}>NP-Complete</span>
          </div>
          <div className="col" style={{ textAlign: 'right', fontSize: '30px' }}>
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
          <div className="col-md-5">
            <span style={{ fontSize: '24px' }}>
              NPC는 2011년에 정보통신대학 소속 알고리즘 연구회로 활동을 시작해, 다양한 알고리즘 관련 활동을 이어오고 있습니다.
              <br />
              <br />
              많은 기업에서 코딩테스트를 도입하는 등 PS의 중요성은 잘 알려져 있습니다. 알고리즘 문제해결은 소프트웨어 엔지니어링의 핵심 능력을 키우기에 가장 좋은 활동 중 하나입니다.
            </span>
          </div>
          <div className="col-md-5 offset-md-1">
            <img src="/pics/main_2.png" alt="main_2" style={{ width: '100%' }} />
          </div>
        </div>
      </div>

      <div className="frame" id="frame_3">
        <div className="row title">NPC는 알고리즘 경시대회를 준비합니다.</div>
        <div className="row justify-content-center">
          <div className="ICPC2019photo" style={ICPC2019photoStyle}>
            <div className="imgCover" style={imgCoverStyle}>
              <div className="ICPC2019photoHeader" style={ICPC2019photoHeader}>
                <b>1. 다양한 프로그래밍 경시대회 참가 </b>
                <br />
                <br />
              </div>
              <div className="ICPC2019photoContent" style={ICPC2019photoContent}>
                해마다 열리는 ACM-ICPC를 주로 준비합니다. 3명이 한 팀이 되어 대회에 참가하기에, NPC에서 자신과 맞는 팀원을 찾을 수 있습니다. 이외에도 Google Code Jam, UCPC, SCPC 등의 경시대회에
                활발하게 참가하며, 경인지역 6개 대학 연합 프로그래밍 대회 shake!에서 타 대학과 교류하고 있습니다. 평소에는 백준과 Codeforces, AtCoder 등의 문제를 함께 풀이하며 프로그래밍 경시대회를
                준비합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" style={{ textAlign: 'center', fontSize: '40px', margin: '10% 0' }}>
          2. 학기 중 단계별 스터디 매주 진행
        </div>
        <div className="row justify-content-around">
          <div
            className="col-md-3"
            style={{
              height: '20vw',
              background: 'linear-gradient(180deg, #FEFF83 0%, #F5E12E 100%)',
              boxShadow: ' 0px 0px 64px 16px rgba(226, 209, 54, 0.5)',
              borderRadius: '32px',
            }}
          >
            <div style={{ width: 'inherit', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
              <span style={{ fontSize: '25px' }}>초급반</span>
              <br />
              <br />
              <span style={{ fontSize: '20px' }}>C++, 기초 알고리즘</span>
            </div>
          </div>
          <div
            className="col-md-3"
            style={{
              height: '20vw',
              background: 'linear-gradient(180deg, #B6F170 0%, #8FBF56 100%)',
              boxShadow: '0px 0px 64px 16px rgba(143, 191, 86, 0.5)',
              borderRadius: '32px',
            }}
          >
            <div style={{ width: 'inherit', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
              <span style={{ fontSize: '25px' }}>중급반</span>
              <br />
              <br />
              <span style={{ fontSize: '20px' }}>학부 수준의 알고리즘</span>
            </div>
          </div>
          <div
            className="col-md-3"
            style={{
              height: '20vw',
              background: 'linear-gradient(180deg, #79ACF9 0%, #4D7DC5 100%)',
              boxShadow: ' 0px 0px 64px 16px rgba(121, 172, 249, 0.5)',
              borderRadius: '32px',
            }}
          >
            <div style={{ width: 'inherit', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
              <span style={{ fontSize: '25px' }}>고급반</span>
              <br />
              <br />
              <span style={{ fontSize: '20px' }}>대회 전용 알고리즘</span>
            </div>
          </div>
        </div>
      </div>

      <div className="frame" id="frame_4">
        <span className="row" style={{ fontSize: '50px' }}>
          동아리방 위치
        </span>
        <span className="row" style={{ fontSize: '30px', marginBottom: '5%' }}>
          자연과학캠퍼스 반도체관 400609호
        </span>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <img src="/pics/main_4.png" alt="floorInformation" style={{ width: '100%', position: 'relative', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          <div className="col-md-5 offset-md-1">
            <img src="/pics/main_5.png" alt="roomPhoto" style={{ width: '100%' }} />
          </div>
        </div>
      </div>

      <div className="frame" id="frame_5" style={{ margin: 0 }}>
        <div className="centerAlignedApply" style={centerAlignedApply}>
          <br />
          <span style={{ color: '#F5E435' }}>if </span>(<span style={{ color: '#FFFFFF' }}>interested</span>)<br />
          <span style={{ color: '#F6E437' }}>&emsp;&emsp;&emsp;join</span>(<span style={{ color: '#B2ED70' }}>NPC</span>)<br />
          <br />
          <span style={{ color: '#B2ED70' }}>&emsp;&emsp;NPC</span>
          <span style={{ color: '#FFFFFF' }}> 지원하기 &gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
