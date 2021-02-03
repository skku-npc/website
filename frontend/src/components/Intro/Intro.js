import React, { useState, useEffect, useRef } from 'react';
import './Intro.css';

const Intro = () => {
  const [ isOpened, setIsOpened ] = useState(false);
  const intro = useRef();
  const onAnimationEnd = () => {
    if (intro.current) {
      intro.current.remove();
    }
  };
  useEffect(() => {
    if (isOpened && intro.current) {
      intro.current.classList.add('animate__animated', 'animate__fadeOutUpBig');
      intro.current.addEventListener('animationend', onAnimationEnd);
    }
    return () => {
      if (intro.current) {
        intro.current.classList.remove('animate__animated', 'animate__fadeOutUpBig');
        intro.current.removeEventListener('animationend', onAnimationEnd);
      }
    };
  }, [isOpened]);

  return (
    <div className="intro" ref={intro}>
      <img src="/icons/npc.png" />
      <div className="box" onClick={() => setIsOpened(true)}>
        <div className="animate__animated animate__bounce animate__slow animate__infinite">
          <div className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
