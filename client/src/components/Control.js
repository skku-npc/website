import React, {Component} from 'react';
import './css/Control.css';

class Control extends Component{
    render(){
        let mode = this.props.mode;
        return(
            <div>
                <div id="Control-overlay"
                    onClick={function(e){
                        e.preventDefault();
                        document.getElementById("Control-overlay").style.opacity="0";
                        document.getElementById("Control-overlay").style.background="rgba(0, 0, 0, 0)";
                        document.getElementById("Control-Tri").style.opacity="0";
                        document.getElementById("Control-list").style.opacity="0";
                    }}
                ></div>
                <div id="Control-Tri"></div>
                <div id="Control-list"></div>
                <div className="Control-nav">
                        <a href="#!" className="Control-button" id="beginner_button"
                        onMouseOver={function(e){
                            e.preventDefault();
                            document.getElementById("Control-overlay").style.opacity="1";
                            document.getElementById("Control-overlay").style.background="rgba(0, 0, 0, 0.3)";
                            document.getElementById("Control-Tri").style.opacity="1";
                            document.getElementById("Control-Tri").style.left="505px";
                            document.getElementById("Control-Tri").style.top="240px";
                            document.getElementById("Control-list").style.opacity="1";
                        }}
                        >초급반</a>
                        <a href="#!" className="Control-button" id="intermediate_button"
                        onMouseOver={function(e){
                            e.preventDefault();
                            document.getElementById("Control-overlay").style.opacity="1";
                            document.getElementById("Control-overlay").style.background="rgba(0, 0, 0, 0.3)";
                            document.getElementById("Control-Tri").style.opacity="1";
                            document.getElementById("Control-Tri").style.left="700px";
                            document.getElementById("Control-Tri").style.top="240px";
                            document.getElementById("Control-list").style.opacity="1";
                        }}
                        >중급반</a>
                        <a href="#!" className="Control-button" id="advanced_button"
                        onMouseOver={function(e){
                            e.preventDefault();
                            document.getElementById("Control-overlay").style.opacity="1";
                            document.getElementById("Control-overlay").style.background="rgba(0, 0, 0, 0.3)";
                            document.getElementById("Control-Tri").style.opacity="1";
                            document.getElementById("Control-Tri").style.left="920px";
                            document.getElementById("Control-Tri").style.top="240px";
                            document.getElementById("Control-list").opacity="1";
                        }}
                        >고급반</a>
                        <div className="Control-mark" id={mode}></div>
                </div>
            </div>
        );
    }
}

export default Control;