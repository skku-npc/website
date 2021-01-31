import React from 'react';
import './css/Header.css';

function Header(){
    return(
        <header className="nav">
            <div className="NPC_logo"></div>
            <div className="line1"></div>
            <div className="member">멤버</div>
            <div className="calendar">일정</div>
            <div className="study">스터디</div>
            <div calssName="user"></div>
        </header>
    );
}

export default Header;
