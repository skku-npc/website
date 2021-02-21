import React, {Component} from 'react';
import './css/Write.css';
import Slate_plain_text from './Slate_plain_text';

class Write extends Component{
    render(){
        let content_beginner = this.props.content_beginner;
        let content_intermediate = this.props.content_intermediate;
        let content_advanced = this.props.content_advanced;
        let list1 = [], list2 = [], list3 = [], id = -1;
        for(let i = 0; i < content_beginner.length; i++){
            list1.push(<li key={content_beginner[i].id}><a href="#!"
            onClick={function(e){
                e.preventDefault();
                this.color='red';
                id = content_beginner[i].id;
            }.bind(this)}>{content_beginner[i].title}</a></li>)
        }
        for(let i = 0; i < content_intermediate.length; i++){
            list2.push(<li key={content_intermediate[i].id}><a href="#!"
            onClick={function(e){
                e.preventDefault();
                this.color='red';
                id = content_intermediate[i].id;
            }.bind(this)}>{content_intermediate[i].title}</a></li>)
        }
        for(let i = 0; i < content_advanced.length; i++){
            list3.push(<li key={content_advanced[i].id}><a href="#!"
            onClick={function(e){
                e.preventDefault();
                this.color='red';
                id = content_advanced[i].id;
            }.bind(this)}>{content_advanced[i].title}</a></li>)
        }
        console.log(id);
        const overlay_active = () => {
            document.getElementById("Write-overlay").style.opacity="1";
            document.getElementById("Write-overlay").style.background="rgba(0, 0, 0, 0.3)";
            document.getElementById("Write-overlay").style.zIndex="10";
            
        }
        const overlay_inactive = () => {
            document.getElementById("Write-overlay").style.opacity="0";
            document.getElementById("Write-overlay").style.background="rgba(0, 0, 0, 0)";
            document.getElementById("Write-overlay").style.zIndex="0";
        }
        return(
            <div>
                <div id='Write-overlay'
                onClick={function(e){
                    e.preventDefault();
                    overlay_inactive();
                    document.getElementById("Write-allposts").style.opacity="0";
                    document.getElementById("Write-allposts").style.zIndex="0";
                    document.getElementById("Write-create").style.opacity="0";
                    document.getElementById("Write-create").style.zIndex="0";
                }}
                ></div>
                <div className='Write-createicon'
                    onClick={function(e){
                        e.preventDefault();
                        overlay_active();
                        document.getElementById("Write-create").style.opacity="1";
                        document.getElementById("Write-create").style.zIndex="11";
                    }}
                ></div>
                <div className='Write-UDicon'
                onClick={function(e){
                    e.preventDefault();
                    overlay_active();
                    document.getElementById("Write-allposts").style.opacity="1";
                    document.getElementById("Write-allposts").style.zIndex="11";
                }}
                ></div>
                <div id='Write-allposts'>
                    <ul>
                        <div id='Write-beginner'>초급반</div>
                        {list1}
                        <div id='Write-intermediate'>중급반</div>
                        {list2}
                        <div id='Write-advanced'>고급반</div>
                        {list3}
                    </ul>
                </div>
                <div id='Write-create'>
                    <div style={{
                        position: 'absolute',
                        left: '73px',
                        top: '53px',
                        fontSize: '24px'
                    }}
                    >제목</div>
                    <div style={{
                        position: 'absolute',
                        left: '687px',
                        top: '53px',
                        fontSize: '24px'
                    }}
                    >반 선택</div>
                    <div style={{
                        position: 'absolute',
                        left: '73px',
                        top: '180px',
                        fontSize: '24px'
                    }}
                    >작성</div>
                    <div id='Write-inputtitle'><Slate_plain_text ></Slate_plain_text></div>
                    <div id='Write-inputcontent'><Slate_plain_text ></Slate_plain_text></div>
                    
                </div>
            </div>
        )
    }
}
export default Write;