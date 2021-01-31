import React from'react';
import { useEffect, useState } from "react";
import NPCLogo from "./NPCLogo.png";
import "./Header.css";

const Header = () =>{
  const fixedText = "fixed Text"
  const whenNotFixed = "fixed Text";
  const [headerText, setHeaderText] = useState(whenNotFixed);
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        if (headerText !== fixedText) {
          setHeaderText(fixedText);
        }
      } else {
        header.classList.remove("sticky");
        if (headerText !== whenNotFixed) {
          setHeaderText(whenNotFixed);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }); 
  const headerStyle={
    width:"100%",
    height:"auto",
    zIndex:100,
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(16px)",
  }
  const headerLogo={
    display:"inline-block",
    paddingLeft:"5%",
    paddingRight:"35%",
    width:"105px",
    height:"85px",
    zIndex:101,
  }
  const headerMenu={
    display:"inline-block",
    width:"10%",
    zIndex:101,
    fontSize:"20px",
    textAlign:"center",    
    verticalAlign:"bottom",
    paddingBottom:"32.5px"
  }
  return (
    <header id="myHeader" className="header" style= {headerStyle}>
      <img className= "HeaderNPCLogo" src={NPCLogo} style={headerLogo} alt="HeaderLogo" />
      <div className="headerMenu" style={headerMenu}>
        기록  
      </div>
      <div className="headerMenu" style={headerMenu}>
        멤버
      </div>
      <div className="headerMenu" style={headerMenu}>
        일정
      </div>
      <div className="headerMenu" style={headerMenu}>
        스터디
      </div>
      <div className="headerMenu" style={headerMenu}>
        설정
      </div>
    </header>
  );
}

export default Header;
