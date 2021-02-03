import React, {Component} from 'react';
import './css/Content.css';

class Content extends Component{
    render(){
        let lists = [];
        let data = this.props.data;
        let desc;
        if(this.props.num !== -1){
            desc = data[this.props.num].body;
        }
        console.log({data});
        for(let i = 0; i < data.length; i++)
            lists.push(<li key = {data[i].id}><a href = {'/contents/' + data[i].id} onClick={function(e){
                e.preventDefault();
                this.props.onChangeNum(data[i].id);
                console.log('check');
                }.bind(this)}>{data[i].title}</a></li>);
        return(
            <div>
                <div className="Content-word">동아리 학습</div>
                <div className="Content-nav">
                    <a href = {'/beginner'} className="Content-button1" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('beginner');
                    this.props.onChangeNum(-1);
                    }.bind(this)}>초급반</a>
                    <a href = {'/intermediate'} className="Content-button2" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('intermediate');
                    this.props.onChangeNum(-1);
                    }.bind(this)}>중급반</a>
                    <a href = {'/advanced'} className="Content-button3" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('advanced');
                    this.props.onChangeNum(-1);
                    }.bind(this)}>고급반</a>

                </div>
                <div className="Content-content">
                    <div className="Content-content_left">
                        <ol>{lists}</ol>
                    </div>
                    <div className="Content-content_right">
                        {desc}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
