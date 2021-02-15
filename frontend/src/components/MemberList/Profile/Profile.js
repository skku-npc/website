import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ user, edit }) => {
  const { name, nickname, email, year, department, baekjoon, codeforces } = user;

  return (
    <div className="profile">
      <div className="row mb-3">
        <div className="col p-0">
          <img className="profile-img" src='https://i.stack.imgur.com/34AD2.jpg' alt="Profile Image" />
          {/*<img className="profile-img" src={image} alt="Profile Image" />*/}
        </div>
      </div>
      { edit ?
        (
          <div className="row mb-5">
            <div className="col-3 offset-9 p-0">
              edit
            </div>
          </div>
        ) : (
          <div className="row mb-5">
            <a className="col-2 offset-8 p-0" href={`https://www.acmicpc.net/user/${baekjoon}`} target="_blank" rel="noopener noreferrer">
              <li className="tooltip">
                <img
                  className="button-icon"
                  src="/icons/baekjoon.png"
                  alt="baekjoon"
                />
                <span className="tooltip_text">{`(백준) ${baekjoon}`}</span>
              </li>
            </a>
            <a className="col-2 p-0" href={`https://codeforces.com/profile/${codeforces}`} target="_blank" rel="noopener noreferrer">
              <li className="tooltip">
                <img
                  className="button-icon"
                  src="/icons/codeforces.png"
                  alt="codeforces"
                />
                <span className="tooltip_text">{`(코포) ${codeforces}`}</span>
              </li>
            </a>
          </div>
        )
      }
      <div className="row mb-3">
        <div className="col-4 p-0">이름</div>
        <div className="col-6 offset-2 p-0">{name}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 p-0">닉네임</div>
        <div className="col-6 offset-2 p-0">{nickname}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 p-0">이메일</div>
        <div className="col-6 offset-2 p-0">{email}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 p-0">가입연도</div>
        <div className="col-6 offset-2 p-0">{year}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 p-0">학과</div>
        <div className="col-6 offset-2 p-0">{department}</div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  edit: PropTypes.bool.isRequired
};

export default Profile;
