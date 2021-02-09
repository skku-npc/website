import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Control from './components/Control';
import Content from './components/Content';

class Club_learning extends Component{

  constructor(props){
    super(props);
    this.state = {
      mode:'beginner', /* beginner intermediate advanced*/
      mark_mode:'beginner',
      num:-1,
      content_beginner: [],
      content_intermediate: [],
      content_advanced: []
    };
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => {
        this.setState({
          content_beginner: res
        })
      })
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => {
        this.setState({
          content_intermediate: res
        })
      })
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => {
        this.setState({
          content_advanced: res
        })
      })
  }
  
  render(){
    console.log("mode :" + this.state.mode);
    console.log("mark_mode :" + this.state.mark_mode);
    
    let data=[];
    if(this.state.mode === 'beginner'){
      data = this.state.content_beginner;
    }else if(this.state.mode === 'intermediate'){
      data = this.state.content_intermediate;
    }else if(this.state.mode === 'advanced'){
      data = this.state.content_advanced;
    }
    return (
      <div>
        <Control
          mode = {this.state.mode}
          mark_mode = {this.state.mark_mode}
          data = {data}
          onChangeMark_mode={function(_mark_mode){
            this.setState({mark_mode:_mark_mode});
          }.bind(this)}
          onChangeMode={function(_mode){
            this.setState({mode:_mode});
          }.bind(this)}
          onChangeNum={function(_num){
            this.setState({num:_num});
          }.bind(this)}
        >
        </Control>
      </div>
    );
  }
}
export default Club_learning;
