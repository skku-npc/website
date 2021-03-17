import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './ResetPassword.css';

const ResetPassword = ({ match, history }) => {
  const { passwordResetToken } = match.params;
  const [input, setInput] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const { newPassword, confirmPassword } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const pressEnter = (e, func) => {
    if (e.key === 'Enter') {
      func();
    }
  };

  const resetSubmit = () => {
    if (newPassword === '' || confirmPassword === '') {
      window.alert('빈칸을 모두 입력해주세요.');
    }
    else if (newPassword !== confirmPassword) {
      window.alert('비밀번호가 일치하지 않습니다.');
    }
    else {
      axios.post(`/api/user/resetPassword/${passwordResetToken}`, {
        newPassword: newPassword,
        confirmPassword: confirmPassword
      }).then(() => {
        window.alert('성공적으로 변경되었습니다!');
        history.push('/main');
      }).catch(error => {
        window.alert(error);
      });
    }
  };

  return (
    <div className="resetPassword">
      <div className="containerLogin" style={{display: 'block'}}>
        <img src="/icons/npc.png" className="npcicon" alt='npc icon' />
        <form action="#">
          <div className="data">
            <input type="password" id="newPassword" name="newPassword" value={newPassword} onKeyPress={(e) => pressEnter(e, resetSubmit)} onChange={onChange} required />
            <label htmlFor="newPassword">새 비밀번호</label>
          </div>
          <div className="data">
            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onKeyPress={(e) => pressEnter(e, resetSubmit)} onChange={onChange} required />
            <label htmlFor="confirmPassword">비밀번호 확인</label>
          </div>
          <div className="btn">
            <div className="inner">
            </div>
            <button type="button" onClick={resetSubmit}>비밀번호 재설정</button>
          </div>
        </form>
      </div>
    </div>
  );
};

ResetPassword.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};

export default ResetPassword;
