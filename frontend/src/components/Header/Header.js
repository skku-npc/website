import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false);
  useEffect(() => {
    const header = document.getElementById('myHeader');
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
        if (headerFixed !== true) {
          setHeaderFixed(true);
        }
      } else {
        header.classList.remove('sticky');
        if (headerFixed !== false) {
          setHeaderFixed(false);
        }
      }
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  });

  return (
    <div className="header" id="myHeader">
      <div className="container-fluid no-pad">
        <div className="row justify-content-between align-items-center horizontal-center">
          <div className="col-2 mr-auto no-pad">
            <Link to="/">
              <img className="HeaderNPCLogo" src="/icons/npc.png" alt="HeaderLogo"/>
            </Link>
          </div>
          <div className="col-1 no-pad">
            <Link className="header-link" to="/members">멤버</Link>
          </div>
          <div className="col-1 no-pad">
            <Link className="header-link" to="/calendar">일정</Link>
          </div>
          <div className="col-1 no-pad">
            <Link className="header-link" to="/study">스터디</Link>
          </div>
          <div className="col-1 no-pad">
            <Link className="header-link" to="/settings">설정</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
