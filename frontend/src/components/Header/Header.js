import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ setLoginOpen }) => {
  return (
    <div className="header container-fluid p-0">
      <div className="row align-items-center p-0 m-0">
        <div className="col-12 col-md-2 mr-md-auto p-0">
          <Link to="/">
            <img className="logo" src="/icons/npc.png" alt="logo"/>
          </Link>
        </div>
        <div className="col-3 col-md-1 p-0 my-3 m-md-0">
          <Link to="/members">멤버</Link>
        </div>
        <div className="col-3 col-md-1 p-0 my-3 m-md-0">
          <Link to="/calendar">일정</Link>
        </div>
        <div className="col-3 col-md-1 p-0 my-3 m-md-0">
          <Link to="/study">스터디</Link>
        </div>
        <div className="col-3 col-md-1 p-0 my-3 m-md-0" onClick={() => setLoginOpen(true)}>
          <img className="user" src="/icons/user.png" alt="user"/>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  setLoginOpen: PropTypes.func.isRequired
};

export default Header;
