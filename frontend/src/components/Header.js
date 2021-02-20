import React from 'react';
import './css/Header.css';

function Header(){
    return(
        <header className="Header-nav">
            <div className="Header-NPC_logo"></div>
            <div className="Header-line1"></div>
            <div className="Header-member">멤버</div>
            <div className="Header-calendar">일정</div>
            <div className="Header-study">스터디</div>
            <div calssName="Header-user"></div>
        </header>
    );
}

export default Header;
