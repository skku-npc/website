import React, { Fragment, useEffect, useRef, useState } from'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import NPCLogo from "./NPCLogo.png";
import image38 from './image38.png';
import cppimage from './C++image.png';
import ICPC2019photo from './ICPC2019photo.png';
import Asset1 from "./Asset 1.png";  
import Asset2 from "./Asset 2.png";  
import Asset3 from "./Asset 3.png";  
import Sticky from './sticky';

function App(){
    AOS.init();
    const topContainer ={
      backgroundColor: 'silver',
      width:"100%",
      height:"calc(100vh)",
    }
    const middleCenter ={
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop:"25vh",
      width: "50vh",
      height: "50vh",
    }
    const full ={
      display: "block",
      width:"100%"
    }
    const centerAlignedContainer={
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "94vw",
      height:"auto",
    }
    const leftAlignedHeader={
      display: "inline-block",
      width: "447px",
      height: "225px",
      fontStyle:"normal",
      fontWeight:"400",
      fontSize:"60px",
      textAlign:"left",
      verticalAlign:"bottom"
    }
    const centerBlock={
      position:"static",
      display:"inline-block",
      width:"calc(94vw - 940px)",
      height:"225px",
      verticalAlign:"bottom"
    }
    const rightAlignedHeader={
      display: "inline-block",
      width: "493px",
      height: "110px",
      fontStyle:"normal",
      fontWeight:"400",
      fontSize:"50px",
      textAlign:"right",
      verticalAlign:"bottom",
      lineHeight:"50%"
    }
    const leftAlignedContentHeader={
      display: "block",
      width: "100%",
      height: "auto",
      fontStyle:"normal",
      fontWeight:"400",
      fontSize:"50px",
      textAlign:"left",
      verticalAlign:"bottom",
      marginTop:"300px",
      marginBottom:"100px"
    }
    const leftAlignedContentExplain={
      display: "inline-block",
      width: "45%",
      height: "auto",
      fontStyle:"normal",
      fontWeight:"400",
      fontSize:"20px",
      textAlign:"left",
      verticalAlign:"top",
      lineHeight:"180%",
      marginRight:"5%"
    }
    const cppImageStyle={
      display:"inline-block",
      width:"50%",
      height:"auto",
    }
    const ICPC2019photoStyle={
      position:"relative",
      width:"94vw",
      height:"51.4vw",
      backgroundImage:`url(${ICPC2019photo})`,
    }
    const imgCoverStyle={
      width:"100%",
      height:"100%",
      zIndex:1,
      backgroundColor:"rgba(0,0,0,0.5)",
    }
    const ICPC2019photoHeader={
      position:"absolute",
      top:"35%",
      left:"10%",
      right:"10%",
      fontSize:"40px",  
      color: "white",
      zIndex: 2,
      textAlign: "center",
    }
    const ICPC2019photoContent={
      position:"absolute",
      top:"55%",
      left:"10%",
      right:"10%",
      fontSize:"21px",  
      color: "white",
      zIndex: 2,
      textAlign: "left",
      lineHeight:"150%"
    }
    const centerAlignedContentHeader={
      display: "block",
      width: "100%",
      height: "auto",
      fontStyle:"normal",
      fontWeight:"400",
      fontSize:"40px",
      textAlign:"center",
      verticalAlign:"bottom",
      marginTop:"300px",
      marginBottom:"100px"
    }
    const centerAlignedContainerForClasses={
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "90vw",
      height:"auto",
      textAlign:"center"
    }
    const ClassesImgCover={
      display:"inline-block",
      width:"auto",
      height:"auto",
    }
    const basicClass={
      position:"relative",
      display:"inline-block",
      width: "350px",
      height:"auto",
    }
    return(
      <div className="App">
        <div className="main-wrapper">
          <div className="top container" style={topContainer}>
            <div className="main-logo"  >
              <img src={NPCLogo} style={middleCenter} alt='NPCLogo' data-aos={"fade-in"}/>
            </div>
          </div>

          <div className="main-page contents container">
            <div className="header">
              
            </div>
            <div className="introduce">
              <img src ={image38} style = {full} alt ='image38' data-aos={"fade-in"}/>
              <div className="centerAlignedContainer" style={centerAlignedContainer}>
                <div className="leftAlignedHeader" style={leftAlignedHeader}>
                  <b style={{fontSize:'100px'}}>NPC</b>                    
                  <br/>
                  <b style={{fontSize:'50px'}}>NP-Complete</b>
                </div>
                <div className="centerBlock" style={centerBlock}></div>
                <div className="rightAlignedHeader" style={rightAlignedHeader}>
                  <b style={{fontSize:'30px'}}>성균관대 소프트웨어대학</b>                    
                  <br/>
                  <b style={{fontSize:'30px'}}>알고리즘 문제해결(PS) 동아리</b>
                </div>
              </div>
              
              <div className="centerAlignedContainer" style={centerAlignedContainer}>
                <div className="leftAlignedContentsHeader" style={leftAlignedContentHeader}>
                  <b>
                  NPC는<br/>알고리즘 문제해결(PS) 동아리입니다.</b>
                </div>
                <div className="leftAlignedContentsExplain" style={leftAlignedContentExplain}>
                  NPC는 2011년에 정보통신대학 소속 알고리즘
                  연구회로 활동을 시작해, 다양한 알고리즘 관련 활동을 이어오고 있습니다. 
                  <br/><br/>많은 기업에서 코딩테스트를 
                  도입하는 등 PS의 중요성은 잘 알려져 있습니다. 알고리즘 문제해결은 소프트웨어 
                  엔지니어링의 핵심 능력을 키우기에 가장 좋은 활동 중 하나입니다.
                </div>
                <img src={cppimage} alt="cppimage" style={ cppImageStyle }/>
              </div>
              <div className="centerAlignedContainer" style={centerAlignedContainer}>
                <div className="leftAlignedContentsHeader" style={leftAlignedContentHeader}>
                  <b>
                    NPC는 알고리즘 경시대회를 준비합니다.
                  </b>
                </div>
                <div className="ICPC2019photo" style={ICPC2019photoStyle}>
                  <div className="imgCover" style={imgCoverStyle}>
                    <div className="ICPC2019photoHeader" style={ICPC2019photoHeader}>
                      <b>1. 다양한 프로그래밍 경시대회 참가 </b>
                      <br/><br/>
                    </div>
                    <div className="ICPC2019photoContent" style={ICPC2019photoContent}>
                      해마다 열리는 ACM-ICPC를 주로 준비합니다. 3명이 한 팀이 되어 대회에 참가하기에, 
                      NPC에서 자신과 맞는 팀원을 찾을 수 있습니다. 이외에도 Google Code Jam, UCPC, 
                      SCPC 등의 경시대회에 활발하게 참가하며, 경인지역 6개 대학 연합 프로그래밍 대회 
                      shake!에서 타 대학과 교류하고 있습니다. 평소에는 백준과 Codeforces, AtCoder 등의 
                      문제를 함께 풀이하며 프로그래밍 경시대회를 준비합니다.
                    </div>
                  </div>
                </div>
                <div className="centerAlignedContentHeader" style={centerAlignedContentHeader}>
                  <b>2. 학기중 단계별 스터디 매주 진행</b>
                </div>
                <div className="centerAlignedContainerForClasses" style={centerAlignedContainerForClasses}>
                  <div className="ClassesImgCover" style={ClassesImgCover}>
                    <img className="basicClass" style={basicClass} src={Asset1} alt="BasicClass"/>
                  </div>
                  <div className="ClassesImgCover"  style={ClassesImgCover}>
                    <img className="intermediateClass" style={basicClass} src={Asset2} alt="IntermediateClass"/>
                  </div>
                  <div className="ClassesImgCover"  style={ClassesImgCover}>
                    <img className="advancedClass" style={basicClass} src={Asset3} alt="advancedClass"/>
                  </div>
                </div>
                <div className="leftAlignedContentHeader" style={leftAlignedContentHeader}>
                  <b>&nbsp;&nbsp;&nbsp;동아리방 위치</b><br/>
                  <text style={{fontSize:"30px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자연과학캠퍼스 반도체관 400609호</text>
                </div>
              </div>
              
            </div>

            <div className="apply">

            </div>
            <div className= "footer">

            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
