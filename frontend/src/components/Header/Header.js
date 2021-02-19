import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Header.css';

const Header = ({ setLoginOpen, isLoggedIn, setIsLoggedIn }) => {
  const [ dropdownOpen, setDropdownOpen ] = useState(false);

  const loginonClick = () => {
    if (isLoggedIn) {
      axios.post('http://localhost:4000/api/user/logout'
      ).then(() => {
        setIsLoggedIn(false);
      }).catch(error => {
        window.alert(error);
      });
    } else {
      setLoginOpen(true);
    }
  };

  useEffect(() => {
    setDropdownOpen(false);
  }, [isLoggedIn]);

  return (
    <div className="header container-fluid p-0">
      <div className="row align-items-center p-0 m-0">
        <div className="col-md-2 mr-md-auto p-0">
          <Link to="/">
            <img className="logo" src="/icons/npc.png" alt="logo"/>
          </Link>
        </div>
        <div className="col-md-1 p-0 my-3 m-md-0">
          <Link to="/members">멤버</Link>
        </div>
        <div className="col-md-1 p-0 my-3 m-md-0">
          <Link to="/calendar">일정</Link>
        </div>
        <div className="col-md-1 p-0 my-3 m-md-0">
          <Link to="/study">스터디</Link>
        </div>
        <div className="dropdown col-md-1 p-0 my-3 m-md-0">
          <img className="dropbtn" src="/icons/user.png" alt="user" onClick={() => setDropdownOpen(!dropdownOpen)}/>
          <div className="dropdown-content" style={{display: dropdownOpen ? 'block' : 'none'}}>
            <a onClick={loginonClick}>{isLoggedIn ? '로그아웃' : '로그인'}</a>
            <Link to="/settings">설정</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  setLoginOpen: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
};

export default Header;
