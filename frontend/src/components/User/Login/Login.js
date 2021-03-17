import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Login.css';

const Login = ({ setModalOpen, logIn }) => {
  const signup = useRef();
  const login = useRef();
  const find = useRef();
  const findOK = useRef();
  const history = useHistory();

  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    department: '',
    handle: ''
  });

  const { email, password, passwordConfirm, name, department, handle } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const resetInput = () => {
    setInput({
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      department: '',
      handle: ''
    });
  };

  const signuponClick = () => {
    resetInput();
    signup.current.style.display = 'block';
    login.current.style.display = 'none';
    find.current.style.display = 'none';
  };

  const loginonClick = () => {
    resetInput();
    signup.current.style.display = 'none';
    login.current.style.display = 'block';
    find.current.style.display = 'none';
  };

  const findonClick = () => {
    resetInput();
    signup.current.style.display = 'none';
    login.current.style.display = 'none';
    find.current.style.display = 'block';
  };

  const loginSubmit = () => {
    if (email === '') {
      window.alert('이메일을 입력해주세요.');
    }
    else if (password === '') {
      window.alert('비밀번호를 입력해주세요.');
    }
    else {
      axios.post('/api/user/login', {
        email: email,
        password: password
      }).then(response => {
        const { token } = response.data;
        logIn(token, Date.now() + 12 * 60 * 60 * 1000 - 5 * 60 * 1000);
        history.go(0);
      }).catch(error => {
        window.alert(error);
      });
    }
  };

  const signupSubmit = () => {
    if (email === '' || password === '' || passwordConfirm === '' || name === '' || department === '' || handle === '') {
      window.alert('빈칸을 모두 입력해주세요.');
    }
    else if (password !== passwordConfirm) {
      window.alert('비밀번호가 일치하지 않습니다.');
    }
    else {
      axios.post('/api/user/register', {
        email: email,
        password: password,
        name: name,
        department: department,
        handle: handle,
        role: 'Student'
      }).then(() => {
        setModalOpen(false);
      }).catch(error => {
        window.alert(error);
      });
    }
  };

  const pressEnter = (e, func) => {
    if (e.key === 'Enter') {
      func();
    }
  };

  const findSubmit = () => {
    if (email === '') {
      window.alert('빈칸을 모두 입력해주세요.');
    } else {
      axios.post('/api/user/requestResetPassword', {
        email: email
      }).then(() => {
        find.current.style.display = 'none';
        findOK.current.style.display = 'block';
      }).catch(error => {
        window.alert(error);
      });
    }
  };

  return (
    <div className="login">
      <div className="containerLogin" ref={login} style={{display:'block'}}>
        <img src="/icons/npc.png" className="npcicon" alt='npc icon' />
        <form action="#">
          <div className="data">
            <input type="text" name="email" placeholder="이메일" value={email} onKeyPress={(e) => pressEnter(e, loginSubmit)} onChange={onChange} required />
          </div>
          <div className="data">
            <input type="password" name="password" placeholder="비밀번호" value={password} onKeyPress={(e) => pressEnter(e, loginSubmit)} onChange={onChange} required />
          </div>
          <div className="forgot-pass">
            <button type="button" onClick={findonClick} className="findBtn">비밀번호 찾기</button>
          </div>
          <div className="btn">
            <div className="inner">
            </div>
            <button type="button" onClick={loginSubmit}>로그인</button>
          </div>
          <div className="signup-link">
                        NPC 계정이 아직 없나요?<br />
            <button type="button" onClick={signuponClick} className="switchBtn">회원가입</button>
          </div>
        </form>
      </div>
      <div className="containerLogin" ref={signup} style={{display:'none'}}>
        <img src="/icons/npc.png" className="npcicon" alt='npc icon' />
        <form action="#">
          <div className="data">
            <input type="text" id="email" name="email" value={email} onKeyPress={(e) => pressEnter(e, signupSubmit)} onChange={onChange} required />
            <label htmlFor="email">이메일</label>
          </div>
          <div className="data">
            <input type="password"  id="password" name="password" value={password} onKeyPress={(e) => pressEnter(e, signupSubmit)} onChange={onChange} required />
            <label htmlFor="password">비밀번호</label>
          </div>
          <div className="data">
            <input type="password" id="passwordConfirm" name="passwordConfirm" value={passwordConfirm} onKeyPress={(e) => pressEnter(e, signupSubmit)} onChange={onChange} required />
            <label htmlFor="passwordConfirm">비밀번호 재입력</label>
          </div>
          <div className="data">
            <input type="text" id="name" name="name" value={name} onKeyPress={(e) => pressEnter(e, signupSubmit)} onChange={onChange} required />
            <label htmlFor="name">이름</label>
          </div>
          <div className="data">
            <input type="text" id="department" name="department" value={department} onKeyPress={(e) => pressEnter(e, signupSubmit)} onChange={onChange} required />
            <label htmlFor="department">전공</label>
          </div>
          <div className="data">
            <input type="text" id="handle" name="handle" value={handle} onKeyPress={(e) => pressEnter(e, signupSubmit)} onChange={onChange} required />
            <label htmlFor="department">닉네임</label>
          </div>
          <div className="btn">
            <div className="inner">
            </div>
            <button className="loginbutton" type="button" onClick={signupSubmit}>가입</button>
          </div>
          <div className="signup-link">
                        이미 NPC 계정이 있나요?<br />
            <button type="button" onClick={loginonClick} className="switchBtn">로그인 창으로 돌아가기</button>
          </div>
        </form>
      </div>
      <div className="containerLogin" ref={find} style={{display:'none'}}>
        <img src="/icons/npc.png" className="npcicon" alt='npc icon' />
        <form action="#">
          <div className="data">
            <input type="text" id="email3" name="email" value={email} onKeyPress={(e) => pressEnter(e, findSubmit)} onChange={onChange} required />
            <label htmlFor="email3">이메일</label>
          </div>
          <div className="btn">
            <div className="inner">
            </div>
            <button type="button" onClick={findSubmit}>비밀번호 초기화</button>
          </div>
          <div className="signup-link">
                        이미 NPC 계정이 있나요?<br />
            <button type="button" onClick={loginonClick} className="switchBtn">로그인 창으로 돌아가기</button>
          </div>
        </form>
      </div>
      <div className="containerLogin" ref={findOK} style={{display:'none'}}>
        <img src="/icons/npc.png" className="npcicon" alt='npc icon' />
        <form action="#">
          <div className="loginCenterAlignedText">
            <br/><br/>이메일로 비밀번호 초기화 링크가<br/> 발송되었습니다.<br/><br/>
          </div>
          <div className="btn">
            <div className="inner">
            </div>
            <button type="button" onClick={() => setModalOpen(false)}>확인</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired
};

export default Login;
