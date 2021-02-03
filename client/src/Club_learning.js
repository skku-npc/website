import React, {Component} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class Club_learning extends Component{

  constructor(props){
    super(props);
    this.state = {
      mode:'default', /* beginner intermediate advanced*/
      num:-1,
      default:[{title:'Title', desc:'Description'}],
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
    let data = [];
    if(this.state.mode === 'default'){
      data = this.state.default;
    }else if(this.state.mode === 'beginner'){
      console.log('beginner');
      data = this.state.content_beginner;
    }else if(this.state.mode === 'intermediate'){
      console.log('intermediate');
      data = this.state.content_intermediate;
    }else if(this.state.mode === 'advanced'){
      console.log('advanced');
      data = this.state.content_advanced;
    }
    return (
      <div>
        <Content
        data = {data}
        num = {this.state.num}
        onChangeNum={function(_num){
          this.setState({num:_num});
       }.bind(this)}
        onChangeMode={function(_mode){
           this.setState({mode:_mode});
        }.bind(this)}></Content>
      </div>
    );
  }
}
export default Club_learning;
