import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import Login from '../User/Login';
import './Header.css';

const Header = ({ setModalContent, setModalOpen, isLoggedIn, setIsLoggedIn }) => {
  const [ dropdownOpen, setDropdownOpen ] = useState(false);
  const dropdownEl = useRef();
  const history = useHistory();

  const logIn = (token, expiredTime) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('tokenExpiredTime', expiredTime);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setIsLoggedIn(true);
    setTimeout(logOut, expiredTime - Date.now());
  };

  const logOut = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('tokenExpiredTime');
    delete axios.defaults.headers.common['Authorization'];
    setIsLoggedIn(false);
    history.push('/main');
  };

  const clickOutside = ({ target }) => {
    if (dropdownOpen && dropdownEl.current && !dropdownEl.current.contains(target)) {
      setDropdownOpen(false);
    }
  };

  const logoutSubmit = () => {
    axios.post('/api/user/logout')
      .then(logOut)
      .catch(error => {
        window.alert(error);
      });
  };

  const loginonClick = () => {
    if (isLoggedIn) {
      logoutSubmit();
    } else {
      setModalContent(<Login setModalOpen={setModalOpen} logIn={logIn} />);
      setModalOpen(true);
    }
  };

  const updateExpiredTime = () => {
    sessionStorage.setItem('expiredTime', Date.now() + 60 * 60 * 1000);
  };

  const tracker = () => {
    window.addEventListener('mousemove', updateExpiredTime);
    window.addEventListener('scroll', updateExpiredTime);
    window.addEventListener('keydown', updateExpiredTime);
  };

  const cleanUp = (interval) => {
    sessionStorage.removeItem('expiredTime');
    clearInterval(interval);
    window.removeEventListener('mousemove', updateExpiredTime);
    window.removeEventListener('scroll', updateExpiredTime);
    window.removeEventListener('keydown', updateExpiredTime);
  };

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const tokenExpiredTime = sessionStorage.getItem('tokenExpiredTime');
    if (token && Date.now() < tokenExpiredTime) {
      logIn(token, tokenExpiredTime);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', clickOutside);
    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, [dropdownOpen]);

  useEffect(() => {
    setDropdownOpen(false);
    if (isLoggedIn) {
      tracker();
      updateExpiredTime();
      const interval = setInterval(() => {
        const expiredTime = parseInt(sessionStorage.getItem('expiredTime'), 10);
        if (expiredTime < Date.now()) {
          logoutSubmit();
          cleanUp(interval);
        }
      }, 1000);

      return () => {
        cleanUp(interval);
      };
    }
  }, [isLoggedIn]);

  return (
    <div className="header container-fluid p-0">
      <div className="row align-items-center p-0 m-0">
        <div className="col-3 offset-2 p-0" />
        <div className="col-2 p-0">
          <Link to="/main">
            <img className="logo" src="/icons/npc.png" alt="logo"/>
          </Link>
        </div>
        <div className="col-1 offset-6 p-0">
          <Link to={`/members/${new Date().getFullYear()}`}>멤버</Link>
        </div>
        <div className="col-1 p-0">
          <Link to={`/calendar/month/${moment().format('YYYY-MM-DD')}`}>일정</Link>
        </div>
        <div className="col-1 p-0">
          <Link to="/study/basic">스터디</Link>
        </div>
        <div className="dropdown col-1 p-0">
          <img className="dropbtn" src="/icons/user.png" alt="user" onClick={() => setDropdownOpen(!dropdownOpen)}/>
          <div className="dropdown-content" ref={dropdownEl} style={{display: dropdownOpen ? 'block' : 'none'}}>
            <a onClick={loginonClick}>{isLoggedIn ? '로그아웃' : '로그인'}</a>
            <Link to="/user/settings" onClick={(event) => {
              if (!isLoggedIn) {
                event.preventDefault();
                window.alert('로그인을 먼저 해주세요!');
              } else {
                setDropdownOpen(false);
              }
            }}>설정</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  setModalContent: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
};

export default Header;
