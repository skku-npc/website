import React, {Component} from 'react';

class Content extends Component{
    render(){
        let data = this.props.data;
        let list = [];
        for(let i = 0; i < data.length; i++){
            list.push(<li key={i}>{data[i].body}</li>)
        }
        return(
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default Content;