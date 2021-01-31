import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const fixedText = 'fixed Text';
  const whenNotFixed = 'fixed Text';
  const [headerText, setHeaderText] = useState(whenNotFixed);
  useEffect(() => {
    const header = document.getElementById('myHeader');
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
        if (headerText !== fixedText) {
          setHeaderText(fixedText);
        }
      } else {
        header.classList.remove('sticky');
        if (headerText !== whenNotFixed) {
          setHeaderText(whenNotFixed);
        }
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  });
  const headerStyle={
    width:'100%',
    height:'auto',
    zIndex:100,
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(16px)',
  };
  const headerLogo={
    display:'inline-block',
    paddingLeft:'5%',
    paddingRight:'35%',
    width:'105px',
    height:'85px',
    zIndex:101,
  };
  const headerMenu={
    display:'inline-block',
    width:'10%',
    zIndex:101,
    fontSize:'20px',
    textAlign:'center',
    verticalAlign:'bottom',
    paddingBottom:'32.5px',
  };
  const headerLink = {
    color: 'inherit',
    textDecoration: 'none'
  };
  return (
    <header id="myHeader" className="header" style= {headerStyle}>
      <Link to="/">
        <img className="HeaderNPCLogo" src="/icons/npc.png" style={headerLogo} alt="HeaderLogo" />
      </Link>
      <div className="headerMenu" style={headerMenu}>
        <Link to="/records" style={headerLink}>기록</Link>
      </div>
      <div className="headerMenu" style={headerMenu}>
        <Link to="/members" style={headerLink}>멤버</Link>
      </div>
      <div className="headerMenu" style={headerMenu}>
        <Link to="/calendar" style={headerLink}>일정</Link>
      </div>
      <div className="headerMenu" style={headerMenu}>
        <Link to="/study" style={headerLink}>스터디</Link>
      </div>
      <div className="headerMenu" style={headerMenu}>
        <Link to="/settings" style={headerLink}>설정</Link>
      </div>
    </header>
  );
};

export default Header;
