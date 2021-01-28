import React from'react';
import { useEffect, } from "react";
import NPCLogo from "./NPCLogo.png";
import './navbar.scss';

const Header = () =>{
  //IMPORTANT
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
  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
    return (
      <div className ="Header">
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
      </div>
    );
  /*
    const fixedText = "fixed Text"
    const whenNotFixed = "Notfixed Text";
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
    
    

    return(
      <div className ="Header">
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
      </div>
    );
    */
}

export default Header;
