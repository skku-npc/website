import React from 'react';
import PropTypes from 'prop-types';
import './Member.css';

const Member = ({ setProfileOpen, setProfile, user }) => {
  const { name, id, email, baekjoon, codeforces } = user;

  const openModal = () => {
    setProfile(user);
    setProfileOpen(true);
  };

  return (
    <div className="member" onClick={openModal}>
      <div className="row align-items-center">
        <span className="member_name col-6 m-0">{name}</span>
        <ul className="member_button col-6 m-0">
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <li className="tooltip">
              <img
                className="button-icon"
                src="/icons/mail.png"
                alt="email"
              />
              <span className="tooltip_text">{`(메일) ${email}`}</span>
            </li>
          </a>
          <a href={`https://www.acmicpc.net/user/${baekjoon}`} target="_blank" rel="noopener noreferrer">
            <li className="tooltip">
              <img
                className="button-icon"
                src="/icons/baekjoon.png"
                alt="baekjoon"
              />
              <span className="tooltip_text">{`(백준) ${baekjoon}`}</span>
            </li>
          </a>
          <a href={`https://codeforces.com/profile/${codeforces}`} target="_blank" rel="noopener noreferrer">
            <li className="tooltip">
              <img
                className="button-icon"
                src="/icons/codeforces.png"
                alt="codeforces"
              />
              <span className="tooltip_text">{`(코포) ${codeforces}`}</span>
            </li>
          </a>
        </ul>
      </div>
      <div className="row">
        <span className="member_id col">@{id}</span>
      </div>
    </div>
  );
};

Member.propTypes = {
  setProfileOpen: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default Member;
