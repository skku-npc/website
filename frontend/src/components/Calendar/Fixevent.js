import React from "react";
import "./Fixevent.css";
import erasebutton from './erasebutton.svg';
function Showevent(props) {
  const { id, title, startdate, enddate } = props;

  return (
    <>
    </>
  );
}


function Fixevent() {
  return (
    <div className="frame">
      <div className ="text-1 ">
        일정 수정
      </div>
      <div className ="text-2">
        추가하기
      </div>
      <div className ="text-3">
        제목 :
      </div>
      <div className = "text-4">
      ~
      </div>
      <div className = "text-5">
      수정하기
      </div>
      <form action ="#">
        <input className = "title" type = "text" placeholder ="제목" name="title" /> 
        <input className = "startyear" type = "text" placeholder = "2021" name = "startyear"/>
        <input className = "startmonth" type = "text" placeholder = "01" name = "startyear"/>
        <input className = "startday" type = "text" placeholder = "01" name = "startyear"/>
        <input className = "starthour" type = "text" placeholder = "18" name = "startyear"/>
        <input className = "startmin" type = "text" placeholder = "00" name = "startyear"/>
        <input className = "endyear" type = "text" placeholder = "2021" name = "startyear"/>
        <input className = "endmonth" type = "text" placeholder = "01" name = "startyear"/>
        <input className = "endday" type = "text" placeholder = "01" name = "startyear"/>
        <input className = "endhour" type = "text" placeholder = "18" name = "startyear"/>
        <input className = "endmin" type = "text" placeholder = "00" name = "startyear"/>
        <button className = "savebutton" type = "submit"> 저장</button>
      </form>
      
      {/* 위치변경 필요*/}

      <div className = "text-6">
      방학 시작
      </div>
      <div className = "text-7">
      2021 02 28 19:00 ~ 2021 02 28 20:00
      </div>      
      <button className="ebtn-1">
      <img src={erasebutton} alt="삭제"></img>
      </button>
      <div className = "text-8">
      방학 종료
      </div>
      <div className = "text-9">
      2021 02 28 19:00 ~ 2021 02 28 20:00
      </div>
      <button className="ebtn-2">
      <img src={erasebutton} alt="삭제"></img>
      </button>
      <div className = "text-10">
      초급반 수업
      </div>
      <div className = "text-11">
      2021 02 28 19:00 ~ 2021 02 28 20:00
      </div>
      <button className="ebtn-3">
      <img src={erasebutton} alt="삭제"></img>
      </button>
      {/* 위치변경 필요*/}
    </div>
  );
}

export default Fixevent;
