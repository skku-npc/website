import React from 'react';
import PropTypes from 'prop-types';
import './Members.css';

const Member = ({ name, id, email, baekjoon, codeforces }) => {
  const goToExternalUrl = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };
  return (
    <div className="member">
      <div className="row justify-content-between">
        <span className="member_name col-xs-8">{name}</span>
        <ul className="member_button col-xs-4">
          <li className="tooltip">
            <img
              className="button-icon"
              src="/icons/mail.png"
              alt="email"
              onClick={() => goToExternalUrl(`mailto:${email}`)}
            />
            <span className="tooltip_text">{`(메일) ${email}`}</span>
          </li>
          <li className="tooltip">
            <img
              className="button-icon"
              src="/icons/baekjoon.png"
              alt="baekjoon"
              onClick={() =>
                goToExternalUrl(`https://www.acmicpc.net/user/${baekjoon}`)
              }
            />
            <span className="tooltip_text">{`(백준) ${baekjoon}`}</span>
          </li>
          <li className="tooltip">
            <img
              className="button-icon"
              src="/icons/codeforces.png"
              alt="codeforces"
              onClick={() =>
                goToExternalUrl(`https://codeforces.com/profile/${codeforces}`)
              }
            />
            <span className="tooltip_text">{`(코포) ${codeforces}`}</span>
          </li>
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

const Members = () => {
  return (
    <div className="members row">
      <Member
        name="User"
        id="loooooooong id"
        email="test@skku.edu"
        baekjoon="백준 아이디"
        codeforces="코포 아이디"
      />
      <Member name="세글자" id="test" email="" baekjoon="" codeforces="" />
      <Member
        name="네글자는"
        id="test"
        email=""
        baekjoon=""
        codeforces=""
      />
      <Member name="User" id="test" email="" baekjoon="" codeforces="" />
      <Member name="User" id="test" email="" baekjoon="" codeforces="" />
      <Member name="User" id="test" email="" baekjoon="" codeforces="" />
    </div>
  );
};

export default Members;
