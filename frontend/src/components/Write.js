import React, {Component} from 'react';
import './css/Write.css';
import Slate_plain_text from './Slate_plain_text';
import axios from 'axios';

class Write extends Component{
    constructor(props){
        super(props);
        this.state = {
            mode: 'dafault',
            select_class: 1,
            title: '',
            content: ''
        }
    }
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
                        left: '5vw',
                        top: '53px',
                        fontSize: '24px'
                    }}
                    >제목</div>
                    <div style={{
                        position: 'absolute',
                        left: '45vw',
                        top: '53px',
                        fontSize: '24px'
                    }}
                    >반 선택</div>
                    <select style={{
                        position: 'absolute',
                        left: '45vw',
                        top: '100px',
                        fontSize: '18px'
                    }}
                    onChange="this.state.select_class = this.value"
                    >
                        <option value = '1'>초급반</option>
                        <option value = '2'>중급반</option>
                        <option value = '3'>고급반</option>
                    </select>
                    <div style={{
                        position: 'absolute',
                        left: '5vw',
                        top: '180px',
                        fontSize: '24px'
                    }}
                    >작성</div>
                    <div id='Write-inputtitle'>
                        <Slate_plain_text
                          onChangeString={function(_title){
                            this.setState({title:_title});
                          }.bind(this)}
                        ></Slate_plain_text>
                    </div>
                    <div id='Write-inputcontent'>
                        <Slate_plain_text
                          onChangeString={function(_content){
                            this.setState({content:_content});
                          }.bind(this)}
                        ></Slate_plain_text>
                    </div>
                    <div id='Write-postbutton'
                        onClick={function(e){
                            e.preventDefault();
                            console.log(this.state.title);
                            console.log(this.state.content);
                            console.log(this.state.select_class);
                            axios.post(' http://localhost/api/study/note/' + this.props.new_id, {
                                params: {
                                    title: this.state.title,
                                    content: this.state.content,
                                    userId: this.props.new_id,
                                    class: this.state.select_class
                                }
                            })
                            .catch(function (error) {
                                if (error.response) {
                                  // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                                  console.log(error.response.data);
                                  console.log(error.response.status);
                                  console.log(error.response.headers);
                                }
                                else if (error.request) {
                                  // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                                  // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                                  // Node.js의 http.ClientRequest 인스턴스입니다.
                                  console.log(error.request);
                                }
                                else {
                                  // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                                  console.log('Error', error.message);
                                }
                            });
                            
                            overlay_inactive();
                            document.getElementById("Write-create").style.opacity="0";
                            document.getElementById("Write-create").style.zIndex="0";
                        }.bind(this)}
                    >Post</div>
                    
                </div>
            </div>
        )
    }
}
export default Write;