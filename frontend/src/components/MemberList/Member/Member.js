import React from 'react';
import PropTypes from 'prop-types';
import './Member.css';

const Member = ({name, id, email, baekjoon, codeforces}) => {
  return (
    <div className="member animate__animated animate__fadeIn animate__faster">
      <div className="row justify-content-between">
        <span className="member_name col-xs-8">{name}</span>
        <ul className="member_button col-xs-4">
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
      <div className="row justify-content-start">
        <span className="member_id col-xs-12">@{id}</span>
      </div>
    </div>
  );
};

Member.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  baekjoon: PropTypes.string.isRequired,
  codeforces: PropTypes.string.isRequired
};

export default Member;
