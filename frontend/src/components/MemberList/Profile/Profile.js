import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ user, settings }) => {
  const { name, handle, email, bojHandle, codeforcesHandle, createdAt, department } = user;

  return (
    <div className="profile" style={settings && {padding: 0, width: '100%', height: '100%'}}>
      <div className="row mb-3">
        <div className="col p-0">
          <img className="profile-img" src='https://i.stack.imgur.com/34AD2.jpg' alt="Profile Image" />
          {/*<img className="profile-img" src={image} alt="Profile Image" />*/}
        </div>
      </div>
      { settings ?
        (
          <div className="row mb-5">
            <div className="col-3 offset-9 p-0">
                edit
            </div>
          </div>
        ) : (
          <div className="row mb-5">
            <a className="col-2 offset-8 p-0" href={bojHandle && `https://www.acmicpc.net/user/${bojHandle}`} target="_blank" rel="noopener noreferrer">
              <li className="tooltip">
                <img
                  className="button-icon"
                  src="/icons/baekjoon.png"
                  alt="baekjoon"
                />
                <span className="tooltip_text">{`(백준) ${bojHandle || '등록되지 않음'}`}</span>
              </li>
            </a>
            <a className="col-2 p-0" href={codeforcesHandle && `https://codeforces.com/profile/${codeforcesHandle}`} target="_blank" rel="noopener noreferrer">
              <li className="tooltip">
                <img
                  className="button-icon"
                  src="/icons/codeforces.png"
                  alt="codeforces"
                />
                <span className="tooltip_text">{`(코포) ${codeforcesHandle || '등록되지 않음'}`}</span>
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
        <div className="col-6 offset-2 p-0">{handle}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 p-0">이메일</div>
        <div className="col-6 offset-2 p-0">{email}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 p-0">가입연도</div>
        <div className="col-6 offset-2 p-0">{createdAt && (typeof createdAt === 'number' ? createdAt : createdAt.slice(0, 4))}</div>
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
  settings: PropTypes.bool.isRequired
};

export default Profile;
