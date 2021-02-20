import React, {Component} from 'react';
import './css/Control.css';

class Control extends Component{
    render(){
        let mode = this.props.mode;
        let mark_mode = this.props.mark_mode;
        let data = this.props.data;
        let list=[];
        let markb, marki, marka, mark_style;
        markb={left: "2vw", background: "#C5EB5B"}
        marki={left: "16vw", background: "#FCF25C"}
        marka={left: "30vw", background: "#5E9EFC"}

        const overlay_active = () => {
            document.getElementById("Control-overlay").style.opacity="1";
            document.getElementById("Control-overlay").style.background="rgba(0, 0, 0, 0.3)";
            document.getElementById("Control-Tri").style.opacity="1";
            document.getElementById("Control-list").style.opacity="1";
        }
        const overlay_inactive = () => {
            document.getElementById("Control-overlay").style.opacity="0";
            document.getElementById("Control-overlay").style.background="rgba(0, 0, 0, 0)";
            document.getElementById("Control-Tri").style.opacity="0";
            document.getElementById("Control-list").style.opacity="0";
        }

        for(let i = 0; i < data.length; i++){
            list.push(<li key={i}><a href="#!"
            onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode(mark_mode);
                this.props.onChangeNum(i);
                overlay_inactive();
            }.bind(this)}>{this.props.data[i].title}</a></li>)
        }
        if(mode === 'beginner'){
            mark_style = markb;
        }else if(mode === 'intermediate'){
            mark_style = marki;
        }else if(mode === 'advanced'){
            mark_style = marka;
        }
        return(
            <div>
                <div id="Control-overlay"
                    onClick={function(e){
                        e.preventDefault();
                        overlay_inactive();
                        document.getElementById("Control-mark").style.left=mark_style.left;
                        document.getElementById("Control-mark").style.background=mark_style.background;
                    }}
                ></div>
                <div id="Control-Tri"></div>
                <div id="Control-list"><ol>{list}</ol></div>
                <div className="Control-nav">
                    <div id="Control-mark" style={mark_style} ></div>
                    <a href="#!" className="Control-button" id="beginner_button"
                    onMouseOver={function(e){
                        e.preventDefault();
                        overlay_active();
                        document.getElementById("Control-mark").style.left=markb.left;
                        document.getElementById("Control-mark").style.background=markb.background;
                        document.getElementById("Control-Tri").style.left="505px";
                        document.getElementById("Control-Tri").style.top="240px";
                        this.props.onChangeMark_mode('beginner');
                    }.bind(this)}
                    >초급반</a>
                    <a href="#!" className="Control-button" id="intermediate_button"
                    onMouseOver={function(e){
                        e.preventDefault();
                        overlay_active();
                        document.getElementById("Control-mark").style.left=marki.left;
                        document.getElementById("Control-mark").style.background=marki.background;
                        document.getElementById("Control-Tri").style.left="700px";
                        document.getElementById("Control-Tri").style.top="240px";
                        this.props.onChangeMark_mode("intermediate");
                    }.bind(this)}
                    >중급반</a>
                    <a href="#!" className="Control-button" id="advanced_button"
                    onMouseOver={function(e){
                        e.preventDefault();
                        overlay_active();
                        document.getElementById("Control-mark").style.left=marka.left;
                        document.getElementById("Control-mark").style.background=marka.background;
                        document.getElementById("Control-Tri").style.left="920px";
                        document.getElementById("Control-Tri").style.top="240px";
                        this.props.onChangeMark_mode('advanced');
                    }.bind(this)}
                    >고급반</a>
                </div>
            </div>
        );
    }
}

export default Control;