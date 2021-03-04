import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="row align-items-center m-0">
        <div className="col-10 col-md-6 offset-1 p-0">
          <div className="row mb-3 mx-0 align-items-center">
            <div className="col-1 p-0 horizontal-center">
              <img src="/icons/Footer/mail.png" alt="mailIcon"/>
            </div>
            <div className="col-10 p-0">
              <a href={'mailto:npc.skku@g.skku.edu'} target="_blank" rel="noopener noreferrer">
									npc.skku@g.skku.edu
              </a>
            </div>
          </div>
          <div className="row mb-3 mx-0 align-items-center">
            <div className="col-1 p-0 horizontal-center">
              <img src="/icons/Footer/github.png" alt="githubIcon"/>
            </div>
            <div className="col-10 p-0">
              <a href={'https://github.com/skku-npc'} target="_blank" rel="noopener noreferrer">
								Github
              </a>
            </div>
          </div>
          <div className="row mb-3 mx-0 align-items-center">
            <div className="col-1 p-0 horizontal-center">
              <img src="/icons/Footer/baekjoon.png" alt="BJIcon"/>
            </div>
            <div className="col-10 p-0">
              <a href={'https://www.acmicpc.net/group/469'} target="_blank" rel="noopener noreferrer">
								Baekjoon OJ
              </a>
            </div>
          </div>
          <div className="row mx-0 align-items-center">
            <div className="col-1 p-0 horizontal-center">
              <img src="/icons/Footer/map.png" alt="mapIcon"/>
            </div>
            <div className="col-10 p-0">
							경기도 수원시 장안구 2066 성균관대학교 자연과학캠퍼스 반도체관 6층 400609호
            </div>
          </div>
        </div>
        <div className="col-5 offset-7 col-md-4 offset-md-1 mt-3 mt-md-0 p-0">
          <div className="row">
            <div className="col p-0">
              <b>회장</b> &nbsp;&nbsp;&nbsp; 손병호 &nbsp;&nbsp;
              <a href={'mailto:xxx@g.skku.edu'} target="_blank" rel="noopener noreferrer">xxx@g.skku.edu</a>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col p-0">
              <b>부회장</b> &nbsp;&nbsp;박재성 &nbsp;&nbsp;
              <a href={'mailto:xxx@g.skku.edu'} target="_blank" rel="noopener noreferrer">xxx@g.skku.edu</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 mt-3">
        <div className="col-4 offset-8 col-md-3 offset-md-9 p-0">
          © 2011-{new Date().getFullYear()} NPC Club
        </div>
      </div>
    </div>
  );
};

export default Footer;
