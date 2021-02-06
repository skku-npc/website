import React, {useRef} from 'react';
import './Login.css';

const Login = () => {
    const signup = useRef(0);
    const login = useRef(0);
    const signuponClick = () => {
        signup.current.style.display = "block";
        login.current.style.display = "none";
    };
    const loginonClick = () => {
        signup.current.style.display = "none";
        login.current.style.display = "block";
    };
    const loginsubmit = () => {
        signup.current.style.display = "none";
        login.current.style.display = "none";
    };
    const signupsubmit = () => {
        signup.current.style.display = "none";
        login.current.style.display = "none";
    };
    return (
        <div className="Login" >
            <div className="containerLogin" ref={login} style={{display:"block"}}>
                <img src="/icons/npc.png" className="npcicon" alt='npc icon' />
                <form action="#">
                    <div className="data">
                        <input type="text" placeholder="이메일" required />
                    </div>
                    <div className="data">
                        <input type="password" placeholder="비밀번호" required />
                    </div>
                    <div className="forgot-pass">
                        <a href="#">이메일 / 비밀번호 찾기</a></div>
                    <div className="btn">
                        <div className="inner">
                        </div>
                        <button type="submit" onClick={loginsubmit}>로그인</button>
                    </div>
                    <div className="signup-link">
                        NPC 계정이 아직 없나요?<br />
                        <button onClick={signuponClick} className="loginbtn">회원가입</button>
                    </div>
                </form>
            </div>
            <div className="containerLogin" ref={signup} style={{display:"none"}}>
                <img src="/icons/npc.png" className="npcicon" alt='npc icon' />
                <form action="#">
                    <div className="data">
                        <input type="text" placeholder="이메일 *" required />
                    </div>
                    <div className="data">
                        <input type="password" placeholder="비밀번호 *" required />
                    </div>
                    <div className="data">
                        <input type="password" placeholder="비밀번호 재입력 *" required />
                    </div>
                    <div className="data">
                        <input type="text" placeholder="이름(실명) *" required />
                    </div>
                    <div className="data">
                        <input type="text" placeholder="전공"/>
                    </div>
                    <div className="data">
                        <input type="text" placeholder="Handle (별명)" />
                    </div>
                    <div className="btn">
                        <div className="inner">
                        </div>
                        <button className="loginbutton" type="submit" onClick={signupsubmit}>가입</button>
                    </div>
                    <div className="signup-link">
                        이미 NPC 계정이 있나요?<br />
                        <button onClick={loginonClick} className="loginbtn">로그인 창으로 돌아가기</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;
