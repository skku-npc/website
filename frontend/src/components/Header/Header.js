import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const header = useRef();
  const onScroll = () => {
    if (window.pageYOffset > 0) {
      if (header.current) {
        header.current.classList.add('sticky');
      }
    } else {
      if (header.current) {
        header.current.classList.remove('sticky');
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div className="header" ref={header}>
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
