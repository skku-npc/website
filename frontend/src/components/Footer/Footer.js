import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid no-pad">
        <div className="row justify-content-around align-items-center">
          <div className="col-4 no-pad" style={{margin:'3vh 0'}}>
            <div className="row">
              <div className="col-2 no-pad horizontal-center">
                <img src="/icons/mail.png" alt="mailIcon"/>
              </div>
              <div className="col-10 no-pad">
                <a href={'mailto:npc.skku@g.skku.edu'} target="_blank" rel="noopener noreferrer">
									npc.skku@g.skku.edu
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-2 no-pad horizontal-center">
                <img src="/icons/github.png" alt="githubIcon"/>
              </div>
              <div className="col-10 no-pad">
                <a href={'https://github.com'} target="_blank" rel="noopener noreferrer">
								Github
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-2 no-pad horizontal-center">
                <img src="/icons/baekjoon.png" alt="BJIcon"/>
              </div>
              <div className="col-10 no-pad">
                <a href={'https://www.acmicpc.net'} target="_blank" rel="noopener noreferrer">
								Baekjoon OJ
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-2 no-pad horizontal-center">
                <img src="/icons/map.png" alt="mapIcon"/>
              </div>
              <div className="col-10 no-pad">
							경기도 수원시 장안구 2066 성균관대학교 자연과학캠퍼스 반도체관 6층 400609호
              </div>
            </div>
          </div>
          <div className="col-4 no-pad" style={{margin:'3vh 0'}}>
            <div className="row justify-content-end">
              회장 &nbsp;&nbsp;&nbsp;&nbsp; 손병호 &nbsp;&nbsp;
              <a href={'mailto:xxx@g.skku.edu'} target="_blank" rel="noopener noreferrer">xxx@g.skku.edu</a>
            </div>
            <div className="row justify-content-end">
              부회장 &nbsp;&nbsp;박재성 &nbsp;&nbsp;
              <a href={'mailto:xxx@g.skku.edu'} target="_blank" rel="noopener noreferrer">xxx@g.skku.edu</a>
            </div>
          </div>
        </div>
        <div className="row justify-content-end" style={{paddingRight:'20px'}}>
          © 2011-{new Date().getFullYear()} NPC Club
        </div>
      </div>
    </div>
  );
};

export default Footer;
