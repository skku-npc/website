import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Profile from '../Profile';
import './Member.css';

const Member = ({ setModalContent, setModalOpen, user }) => {
  const { name, id, handle, email, bojHandle, codeforcesHandle } = user;

  const openModal = async () => {
    const result = await axios.get(`http://localhost:4000/api/users/member/${id}`);
    setModalContent(<Profile user={result.data} settings={false} />);
    setModalOpen(true);
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
          <a href={bojHandle && `https://www.acmicpc.net/user/${bojHandle}`} target="_blank" rel="noopener noreferrer">
            <li className="tooltip">
              <img
                className="button-icon"
                src="/icons/baekjoon.png"
                alt="baekjoon"
              />
              <span className="tooltip_text">{`(백준) ${bojHandle || '등록되지 않음'}`}</span>
            </li>
          </a>
          <a href={codeforcesHandle && `https://codeforces.com/profile/${codeforcesHandle}`} target="_blank" rel="noopener noreferrer">
            <li className="tooltip">
              <img
                className="button-icon"
                src="/icons/codeforces.png"
                alt="codeforces"
              />
              <span className="tooltip_text">{`(코포) ${codeforcesHandle || '등록되지 않음'}`}</span>
            </li>
          </a>
        </ul>
      </div>
      <div className="row">
        <span className="member_handle col">@{handle}</span>
      </div>
    </div>
  );
};

Member.propTypes = {
  setModalContent: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default Member;
