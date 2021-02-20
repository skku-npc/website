import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from '../MemberList/Profile';
import './Settings.css';

const Settings = () => {
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

  const loadData = async () => {
    const result = await axios.get('http://localhost:4000/api/user/profile');
    setProfile(result.data);
    setInput({
      bojHandle: result.data.bojHandle,
      codeforcesHandle: result.data.codeforcesHandle,
      githubHandle: result.data.githubHandle,
      class: result.data.class
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
        if (!patch[key]) {
          delete patch[key];
        }
      }
      console.log(patch);
      axios.patch('http://localhost:4000/api/user/profile', patch)
        .then(() => {
          window.alert('성공적으로 변경되었습니다!');
          loadData();
          resetPassword();
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
        Account Settings
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
              <div className="row semi-title">
                    My Profile
              </div>
              <hr />
              <div className="row mb-3">
                <div className="col-4 p-0">BOJ</div>
                <div className="col-8 p-0">
                  <input className="normal-input" type="text" name="bojHandle" value={input.bojHandle} onKeyPress={pressEnter} onChange={onChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4 p-0">Codeforces</div>
                <div className="col-8 p-0">
                  <input className="normal-input" type="text" name="codeforcesHandle" value={input.codeforcesHandle} onKeyPress={pressEnter} onChange={onChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4 p-0">Github</div>
                <div className="col-8 p-0">
                  <input className="normal-input" type="text" name="githubHandle" value={input.githubHandle} onKeyPress={pressEnter} onChange={onChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4 p-0">Class</div>
                <div className="col-8 p-0">
                  <input className="normal-input" type="text" name="class" value={input.class} onKeyPress={pressEnter} onChange={onChange} />
                </div>
              </div>
              <br /><br />
              <div className="row mb-3">
                <div className="col-4 p-0">Original PW</div>
                <div className="col-8 p-0">
                  <input className="pw-input" type="password" name="originalPassword" value={input.originalPassword} onKeyPress={pressEnter} onChange={onChange} required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4 p-0">New PW</div>
                <div className="col-8 p-0">
                  <input className="pw-input" type="password" name="password" value={input.password} onKeyPress={pressEnter} onChange={onChange} required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4 p-0">Confirm PW</div>
                <div className="col-8 p-0">
                  <input className="pw-input" type="password" name="passwordConfirm" value={input.passwordConfirm} onKeyPress={pressEnter} onChange={onChange} required />
                </div>
              </div>
              <br /><br />
              <div className="row mb-3 justify-content-center horizontal-center">
                <button className="col-2 p-0" onClick={profileSubmit}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
