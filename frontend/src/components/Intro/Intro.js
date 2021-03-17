import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const [ isOpened, setIsOpened ] = useState(false);
  const intro = useRef();
  const history = useHistory();

  const openOnClick = () => {
    setIsOpened(true);
    setTimeout(() => {
      history.push('/main');
    }, 500);
  };

  useEffect(() => {
    if (isOpened && intro.current) {
      intro.current.classList.add('animate__animated', 'animate__fadeOutUpBig');
    }
    return () => {
      if (intro.current) {
        intro.current.classList.remove('animate__animated', 'animate__fadeOutUpBig');
      }
    };
  }, [isOpened]);

  return (
    <div className="intro" ref={intro}>
      <img src="/icons/npc.png" />
      <div className="box" onClick={openOnClick}>
        <div className="animate__animated animate__bounce animate__slow animate__infinite">
          <div className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
