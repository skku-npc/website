import React from'react';
import githubIcon from "./github icon.png";
import baekjoonIcon from "./baekjoon icon.png";
import mailIcon from "./mail icon.png";
import mapIcon from "./map icon.png";
const Footer = () =>{
  const leftAlignedFooter={
    display: "inline-block",
    marginLeft: "5%",
    marginRight: "5%",
    width: "40%",
    height:"283px",
    textAlign:"left",
    fontSize:"25px",
    lineHeight:"200%"
  }
  const centerAlignedFooter={
    verticalAlign:"top",
    display: "inline-block",
    marginLeft: "5%",
    marginRight: "5%",
    width: "40%",
    height:"223px",
    textAlign:"center",
    fontSize:"25px",
    lineHeight:"200%"
  }
  const rightAlignedFooter={
    verticalAlign:"basement",
    display: "inline-block",
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
    height:"50px",
    textAlign:"right"
  }
  return(
    <div className= "footer">
      <div className="leftAlignedFooter" style={leftAlignedFooter}>
      <img src={mailIcon} alt="mailIcon"/> &nbsp;npc.skku@g.skku.edu
      <br/><img src={githubIcon} alt="githubIcon"/> &nbsp;Github
      <br/><img src={baekjoonIcon} alt="BJIcon"/> &nbsp;Baekjoon OJ
      <br/><img src={mapIcon} alt="mapIcon"/> &nbsp;경기도 수원시 장안구 2066 성균관대학교 자연과학캠퍼스 반도체관 6층 400609호
      </div>
      <div className="centerAlignedFooter" style={centerAlignedFooter}>
      <b>회장&emsp;&emsp;&emsp; </b>손병호 xxx@g.skku.edu<br/>
      <b>부회장&emsp;&emsp; </b>박재성 xxx@g.skku.edu
      </div>
      <div className="rightAlignedFooter" style={rightAlignedFooter}>
      @2011-2021 NPC Club
      </div>
    </div>
  );
}

export default Footer;
