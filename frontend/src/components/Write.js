import React, {Component} from 'react';
import './css/Write.css';
import Slate_plain_text from './Slate_plain_text';
import axios from 'axios';

class Write extends Component{

    constructor(props){
        super(props);
        this.state = {
            mode: 'dafault',
            selected_class: 1,
            selected_id: -1,
            selected_title: 'Default',
            selected_content: 'Default',
            title: '',
            content: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({selected_class: event.target.value});
    }
    render(){
        let content_beginner = this.props.content_beginner;
        let content_intermediate = this.props.content_intermediate;
        let content_advanced = this.props.content_advanced;
        let list1 = [], list2 = [], list3 = [];
        for(let i = 0; i < content_beginner.length; i++){
            list1.push(<li key={content_beginner[i].id}><a href="#!"
            onClick={function(e){
                e.preventDefault();
                this.color='red';
                this.setState(state => ({
                    selected_id: content_beginner[i].id,
                    selected_title: content_beginner[i].title
                }));
            }.bind(this)}>{content_beginner[i].title}</a></li>)
        }
        for(let i = 0; i < content_intermediate.length; i++){
            list2.push(<li key={content_intermediate[i].id}><a href="#!"
            onClick={function(e){
                e.preventDefault();
                this.color='red';
                this.setState({
                    selected_id: content_intermediate[i].id,
                    selected_title: content_intermediate[i].title
                });
            }.bind(this)}>{content_intermediate[i].title}</a></li>)
        }
        for(let i = 0; i < content_advanced.length; i++){
            list3.push(<li key={content_advanced[i].id}><a href="#!"
            onClick={function(e){
                e.preventDefault();
                this.color='red';
                this.setState({
                    selected_id: content_advanced[i].id,
                    selected_title: content_advanced[i].title
                }, () => console.log('updated'))
            }.bind(this)}>{content_advanced[i].title}</a></li>)
        }
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
                        this.setState({
                            selected_title: 'Please enter a title',
                            selected_content: 'Please enter a content',
                            mode: 'Create'
                        });
                    }.bind(this)}
                ></div>
                <div className='Write-UDicon'
                onClick={function(e){
                    e.preventDefault();
                    overlay_active();
                    document.getElementById("Write-allposts").style.opacity="1";
                    document.getElementById("Write-allposts").style.zIndex="11";
                    this.setState({
                        mode: 'Modify'
                    });
                }.bind(this)}
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
                    <div style={{
                        position: 'absolute',
                        left: '45vw',
                        top: '60vh',
                        width: '10vw',
                        heigh: '5vw',
                        fontSize: '18px'

                    }}>{this.state.selected_title}</div>
                    <button style={{
                        position: 'absolute',
                        left: '45vw',
                        top: '70vh',
                        width: '10vw',
                        heigh: '5vw',
                        fontSize: '18px'
                    }}
                    onClick={function(e){
                        e.preventDefault();
                        /*스터디 노트 삭제 (this.state.selected_id에 해당하는 노트) */
                        overlay_inactive();
                        document.getElementById("Write-allposts").style.opacity="0";
                        document.getElementById("Write-allposts").style.zIndex="0";
                    }}
                    >DELETE</button>
                    <button style={{
                        position: 'absolute',
                        left: '55vw',
                        top: '70vh',
                        width: '10vw',
                        heigh: '5vw',
                        fontSize: '18px'
                    }}
                    onClick={function(e){
                        e.preventDefault();
                        document.getElementById("Write-allposts").style.opacity="0";
                        document.getElementById("Write-allposts").style.zIndex="0";
                        document.getElementById("Write-create").style.opacity="1";
                        document.getElementById("Write-create").style.zIndex="11";
                    }.bind(this)}
                    >MODIFY</button>
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
                    value = {this.state.selected_class}
                    onChange={this.handleChange}
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
                        {
                            (function(){
                                if(this.state.mode === 'Create') return(
                                    <div id='Write-postbutton'
                                        onClick={function(e){
                                            e.preventDefault();
                                            console.log('Create');
                                            console.log(this.state.title);
                                            console.log(this.state.content);
                                            console.log(this.state.selected_class);
                                            console.log(this.state.mode);
                                            /*Create
                                            title: this.state.title,
                                            content: this.state.content,
                                            userId: this.props.new_id,
                                            class: this.state.selected_class
                                            */
                                            axios.post(' http://localhost/api/study/note/' + this.props.new_id, {
                                                params: {
                                                    title: this.state.title,
                                                    content: this.state.content,
                                                    userId: this.props.new_id,
                                                    class: this.state.selected_class
                                                }
                                            })
                                            .catch(function (error) {
                                                if (error.response) {
                                                console.log(error.response.data);
                                                console.log(error.response.status);
                                                console.log(error.response.headers);
                                                }
                                                else if (error.request) {
                                                console.log(error.request);
                                                }
                                                else {
                                                console.log('Error', error.message);
                                                }
                                            });          
                                            overlay_inactive();
                                            document.getElementById("Write-create").style.opacity="0";
                                            document.getElementById("Write-create").style.zIndex="0";
                                        }.bind(this)}
                                    >POST</div>
                                );
                                else return (
                                    <div id='Write-postbutton'
                                        onClick={function(e){
                                            e.preventDefault();
                                            console.log('Modify');
                                            console.log(this.state.title);
                                            console.log(this.state.content);
                                            console.log(this.state.selected_class);
                                            console.log(this.state.mode);
                                            /*this.state.selected_id에 해당하는 것 Modify*/
                                            axios.post(' http://localhost/api/study/note/' + this.props.new_id, {
                                                params: {
                                                    title: this.state.title,
                                                    content: this.state.content,
                                                    userId: this.props.new_id,
                                                    class: this.state.selected_class
                                                }
                                            })
                                            .catch(function (error) {
                                                if (error.response) {
                                                console.log(error.response.data);
                                                console.log(error.response.status);
                                                console.log(error.response.headers);
                                                }
                                                else if (error.request) {
                                                console.log(error.request);
                                                }
                                                else {
                                                console.log('Error', error.message);
                                                }
                                            });          
                                            overlay_inactive();
                                            document.getElementById("Write-create").style.opacity="0";
                                            document.getElementById("Write-create").style.zIndex="0";
                                        }.bind(this)}
                                    >POST</div>
                                );
                                
                            }.bind(this))()
                        }
                    <div id='Write-inputtitle'>
                        <Slate_plain_text
                          onChangeString={function(_title){
                            this.setState({title:_title});
                          }.bind(this)}
                          default_text= {this.state.mode}
                        ></Slate_plain_text>
                    </div>
                    <div id='Write-inputcontent'>
                        <Slate_plain_text
                          onChangeString={function(_content){
                            this.setState({content:_content});
                          }.bind(this)}
                          default_text= {this.state.selected_content}
                        ></Slate_plain_text>
                    </div>
                </div>
            </div>
        )
    }
}
export default Write;