import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import './css/Content.css';

class Content extends Component{
    render(){
        let content = this.props.content[0];
        return(
            <div>
                <div className='Content-title'>{content.title}</div>
                <div className='Content-author'>작성:{content.author}</div>
                <div className='Content-content'>
                    <ReactMarkdown>{content.content}</ReactMarkdown>
                </div>
            </div>
        );
    }
}

export default Content;