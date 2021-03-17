import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Profile from '../../MemberList/Profile';
import './Settings.css';

const Settings = ({ history, setIsLoggedIn }) => {
  const [ profile, setProfile ] = useState({});
  const [ input, setInput ] = useState({
    bojHandle: '',
    codeforcesHandle: '',
    githubHandle: '',
    class: '',
    originalPassword: '',
    password: '',
    passwordConfirm: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const resetPassword = () => {
    setInput({
      originalPassword: '',
      password: '',
      passwordConfirm: '',
    });
  };

  const loadData = () => {
    axios.get('/api/user/profile')
      .then(response => {
        const profile = response.data;
        setProfile(profile);
        setInput({
          bojHandle: profile.bojHandle || '',
          codeforcesHandle: profile.codeforcesHandle || '',
          githubHandle: profile.githubHandle || '',
          class: profile.class || ''
        });
      });
  };

  const profileSubmit = () => {
    if (input.originalPassword === '') {
      window.alert('기존 비밀번호를 입력해주세요.');
    }
    if (input.password !== '' && input.passwordConfirm !== '' && input.password !== input.passwordConfirm) {
      window.alert('비밀번호가 일치하지 않습니다.');
    }
    else {
      let patch = {...input};
      delete patch.passwordConfirm;
      for (let key in patch) {
        if (patch[key] === profile[key]) {
          delete patch[key];
        }
      }
      console.log(patch);
      axios.patch('/api/user/profile', patch)
        .then(() => {
          window.alert('성공적으로 변경되었습니다!');
          loadData();
          resetPassword();
        }).catch(error => {
          window.alert(error);
        });
    }
  };

  const deleteSubmit = () => {
    if (window.confirm('정말 탈퇴하시겠습니까? 돌이킬 수 없습니다!')) {
      axios.delete('/api/user/profile')
        .then(() => {
          window.alert('성공적으로 탈퇴되었습니다!');
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('tokenExpiredTime');
          delete axios.defaults.headers.common['Authorization'];
          setIsLoggedIn(false);
          history.push('/main');
        }).catch(error => {
          window.alert(error);
        });
    }
  };

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      profileSubmit();
    }
  };

  useEffect(loadData, []);

  return (
    <div className="container-fluid settings p-0">
      <div className="row title">
        계정 설정
      </div>
      <div className="background">
        <div className="row justify-content-center">
          <div className="col-5 p-0">
            <div className="card">
              <Profile user={profile} settings={true} />
            </div>
          </div>
          <div className="col-5 p-0">
            <div className="profile-others card">
              <div className="row">
                <div className="col p-0 semi-title">
                  내 프로필
                </div>
              </div>
              <hr />
              <div className="row mb-3">
                <div className="col-5 p-0">백준</div>
                <div className="col-7 p-0">
                  <input className="normal-input" type="text" name="bojHandle" value={input.bojHandle} onKeyPress={pressEnter} onChange={onChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-5 p-0">코드포스</div>
                <div className="col-7 p-0">
                  <input className="normal-input" type="text" name="codeforcesHandle" value={input.codeforcesHandle} onKeyPress={pressEnter} onChange={onChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-5 p-0">깃헙</div>
                <div className="col-7 p-0">
                  <input className="normal-input" type="text" name="githubHandle" value={input.githubHandle} onKeyPress={pressEnter} onChange={onChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-5 p-0">반</div>
                <div className="col-7 p-0">
                  <input className="normal-input" type="text" name="class" value={input.class} onKeyPress={pressEnter} onChange={onChange} />
                </div>
              </div>
              <br /><br />
              <div className="row mb-3">
                <div className="col-5 p-0">기존 비밀번호</div>
                <div className="col-7 p-0">
                  <input className="pw-input" type="password" name="originalPassword" value={input.originalPassword} onKeyPress={pressEnter} onChange={onChange} required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-5 p-0">새 비밀번호</div>
                <div className="col-7 p-0">
                  <input className="pw-input" type="password" name="password" value={input.password} onKeyPress={pressEnter} onChange={onChange} required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-5 p-0">비밀번호 확인</div>
                <div className="col-7 p-0">
                  <input className="pw-input" type="password" name="passwordConfirm" value={input.passwordConfirm} onKeyPress={pressEnter} onChange={onChange} required />
                </div>
              </div>
              <br /><br />
              <div className="row mb-3 justify-content-center horizontal-center">
                <button className="button col-4 p-0" onClick={profileSubmit} style={{color: '#8dc63f'}}>저장</button>
                <button className="button col-4 offset-2 p-0" onClick={deleteSubmit} style={{color: '#e70e0e'}}>회원 탈퇴</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Settings.propTypes = {
  history: PropTypes.object.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
};

export default Settings;
