import React, {Component, useEffect} from 'react';
import Control from './components/Control';
import Content from './components/Content';
import Write from './components/Write';
import axios from 'axios';

class Study extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'beginner', /* beginner intermediate advanced*/
      mark_mode:'beginner',
      id: 1,
      tmp: [],
      content_beginner: [],
      content_intermediate: [],
      content_advanced: [],
      content: {}
    };
    axios.get('http://localhost//api/study/notes')
      .then(function(response){
        this.setState({
          tmp: response
        });
    })
     console.log(this.state.tmp);
    this.state.tmp = [
      {
        "id": 1,
        "title": "C++ STL(1)-vector,list,deque",
        "writer": "최재민",
        "class": 1
      },
      {
        "id": 2,
        "title": "C++ STL(2)-set,map",
        "writer": "최재민",
        "class": 1
      },
      {
        "id": 3,
        "title": "C++ DynamicProgramming",
        "writer": "최재민",
        "class": 2
      },
      {
        "id": 4,
        "title": "C++ Dijkstra",
        "writer": "최재민",
        "class": 2
      },
      {
        "id": 5,
        "title": "C++ SegmentTree",
        "writer": "최재민",
        "class": 3
      },
      {
        "id": 6,
        "title": "C++ MaximumFlow",
        "writer": "최재민",
        "class": 3
      }
    ]
    for(let i = 0; i < this.state.tmp.length; i++){
      if(this.state.tmp[i].class === 1){
        this.state.content_beginner.push(this.state.tmp[i]);
      }else if(this.state.tmp[i].class === 2){
        this.state.content_intermediate.push(this.state.tmp[i]);
      }else if(this.state.tmp[i].class === 3){
        this.state.content_advanced.push(this.state.tmp[i]);
      }
    }
    
    this.state.content = 
      {
        "id": "1",
        "title": "1. Brute Force & Divide and Conquer",
        "author": "최재민",
        "content": "# 1. 완전 탐색과 분할 정복\nPS를 할 때 가장 먼저 고려해야할 풀이는 문제에 주어진 그대로 \"무식하게 푸는 것\"입니다. 간과하기 쉬운 것이, 이 무식한 풀이로 풀리는 문제가 꽤 많은데 불구하고 많은 사람들은 쉬운 문제에 너무 어렵게 접근하곤 합니다. 오늘 다룰 알고리즘은 완전 탐색(brute-force)과 분할 정복(divide-and-conquer)입니다.\n\n## 완전 탐색 👊\nPS에서 \"무식하게 푼다\"라고 함은 가능한 경우의 수를 일일이 나열하면서 답은 찾는 방법을 의미합니다.\n이 알고리즘을 <b>완전 탐색(brute-force)</b>이라고 부르죠.",
        "create_time": "2021-02-08T15:00:00Z",
        "modify_time": "2021-02-08T15:00:00Z",
        "class": 1
      }


    }
  render(){
    console.log('mode :' + this.state.mode);
    console.log('mark_mode :' + this.state.mark_mode);
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
        <Content
          content = {this.state.content}
        ></Content>
        <Write
          content_beginner = {this.state.content_beginner}
          content_intermediate = {this.state.content_intermediate}
          content_advanced = {this.state.content_advanced}
          new_id = {this.state.tmp[this.state.tmp.length - 1].id + 1}
        ></Write>
      </div>
    );
  }
}
export default Study;
