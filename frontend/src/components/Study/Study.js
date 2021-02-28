import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import PropTypes from 'prop-types';
import RichText from './RichText';
import axios from 'axios';
import './Study.css';

const Study = ({ isLoggedIn }) => {
  const [ postData, setPostData ] = useState([]);
  const [ mode, setMode ] = useState('create');
  const [ isAdmin, setIsAdmin ] = useState(true);
  const [ selectedClass, setSelectedClass ] = useState(1);
  const [ selectedHoverClass, setSelectedHoverClass ] = useState(1);
  const [ selectedID, setSelectedID ] = useState(1);
  const [ post, setPost ] = useState({});
  const [ userID, setUserID ] = useState(1);
  const show = useRef();
  const write = useRef();
  const showPost = useRef();
  const allPosts = useRef();
  const basic = useRef();
  const intermediate = useRef();
  const advanced = useRef();
  const [ input, setInput ] = useState({
    id: -1,
    title: [{
      children: [
        { text: '제목을 입력하세요...' }
      ]
    }],
    content: [{
      type: 'paragraph',
      children: [
        { text: '본문을 입력하세요...' },
      ],
    }],
    author: '',
    class: 1
  });
  const titleEditor = useMemo(() => withHistory(withReact(createEditor())), []);

  const loadData =  async () => {
    //const { data } = await axios.get('/api/study/notes');
    const data = [
      {
        'id': 1,
        'title': 'C++ STL(1)-vector,list,deque',
        'writer': '최재민',
        'class': 1
      },
      {
        'id': 2,
        'title': 'C++ STL(2)-set,map',
        'writer': '최재민',
        'class': 1
      },
      {
        'id': 3,
        'title': 'C++ DynamicProgramming',
        'writer': '최재민',
        'class': 2
      },
      {
        'id': 4,
        'title': 'C++ Dijkstra',
        'writer': '최재민',
        'class': 2
      },
      {
        'id': 5,
        'title': 'C++ SegmentTree',
        'writer': '최재민',
        'class': 3
      },
      {
        'id': 6,
        'title': 'C++ MaximumFlow',
        'writer': '최재민',
        'class': 3
      }
    ];
    console.log(data);
    setPostData(data);
    setSelectedID(data[0].id);
    setInput({
      ...input,
      id: data[data.length - 1].id + 1
    });
  };

  useEffect(loadData, []);

  const showAllPosts = (classID) => {
    setSelectedClass(classID);
    show.current.style.display = 'block';
    write.current.style.display = 'none';
    showPost.current.style.display = 'none';
    allPosts.current.style.display = 'block';
  };

  const showSelectedPost = (id) => {
    setSelectedID(id);
    show.current.style.display = 'block';
    write.current.style.display = 'none';
    showPost.current.style.display = 'block';
    allPosts.current.style.display = 'none';
  };

  const showWrite = (mode_, id) => {
    if (mode_ === 'edit') {
      setSelectedID(id);
      setInput({
        ...input,
        id: post.id,
      });
    }
    show.current.style.display = 'none';
    write.current.style.display = 'block';
    setMode(mode_);
  };

  useEffect(async () => {
    const { data } = await axios.get(`/api/study/note/${selectedID}`);
    setPost(data[0]);
  }, [selectedID]);

  useEffect(async () => {
    if (isLoggedIn) {
      const { data } = await axios.get('/api/user/profile');
      if (data.role === 'Admin') {
        setIsAdmin(true);
      }
      setUserID(data.id);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    console.log(input);
  }, [input]);

  const uploadNote = () => {
    if (mode === 'create') {
      axios.post('/api/study/note/', {
        userId: userID,
        title: JSON.stringify(input.title),
        content: JSON.stringify(input.content),
        class: input.class
      }).then(() => {
        loadData();
      }).catch(error => {
        window.alert(error);
      });
    }
  };

  const deleteNote = (id) => {
    axios.delete(`/api/study/note/${id}`)
      .then(() => {
        loadData();
      }).catch(error => {
        window.alert(error);
      });
  };

  const getFilteredData = (hover) => {
    const classID = hover ? selectedHoverClass : selectedClass;
    return postData.filter(post=>(post.class === classID)).length > 0 ?
      postData.filter(post=>(post.class === classID)).map((data, index) => (
        <div className="post-title row" key={index}>
          <div className="col-10" onClick={() => showSelectedPost(data.id)}>
            {(hover ? '' : '- ') + data.title}
          </div>
          {
            !hover && isAdmin ?
              <div className="col-1 p-0">
                <img src="/icons/pencil.png" alt="edit" onClick={() => showWrite('edit', data.id)}/>
              </div> : null
          }
          {
            !hover && isAdmin ?
              <div className="col-1 p-0">
                <div className="close" onClick={() => deleteNote(data.id)} />
              </div> : null
          }
        </div>
      )) : (
        <div className="post-title row">
          <div className="col horizontal-center">
          작성된 글이 없습니다.
          </div>
        </div>
      );
  };

  return (
    <div className="container-fluid study p-0">
      <div className="show" ref={show} style={{display: 'block'}}>
        <div className="row class-boxes justify-content-center horizontal-center m-0">
          <div className="col-2 p-0" ref={basic} onClick={() => showAllPosts(1)}
            onMouseOver={() => {
              setSelectedHoverClass(1);
              basic.current.style.backgroundColor = '#c5eb5b';
              intermediate.current.style.color = '#827e7e';
              advanced.current.style.color = '#827e7e';
            }}
            onMouseOut={() => {
              basic.current.style.backgroundColor = 'white';
              intermediate.current.style.color = 'black';
              advanced.current.style.color = 'black';
            }}>
            <div className="class-box">초급반</div>
            <div className="tooltip_arrow"/>
          </div>
          <div className="col-2 p-0" ref={intermediate} onClick={() => showAllPosts(2)}
            onMouseOver={() => {
              setSelectedHoverClass(2);
              intermediate.current.style.backgroundColor = '#fcf25c';
              basic.current.style.color = '#827e7e';
              advanced.current.style.color = '#827e7e';
            }}
            onMouseOut={() => {
              intermediate.current.style.backgroundColor = 'white';
              basic.current.style.color = 'black';
              advanced.current.style.color = 'black';
            }}>
            <div className="class-box">중급반</div>
            <div className="tooltip_arrow"/>
            <span className="tooltip_text" style={{textAlign: 'start', width: '450px', marginLeft: '-225px'}}>{getFilteredData(true)}</span>
          </div>
          <div className="col-2 p-0" ref={advanced} onClick={() => showAllPosts(3)}
            onMouseOver={() => {
              setSelectedHoverClass(3);
              advanced.current.style.backgroundColor = '#5e9efc';
              basic.current.style.color = '#827e7e';
              intermediate.current.style.color = '#827e7e';
            }}
            onMouseOut={() => {
              advanced.current.style.backgroundColor = 'white';
              basic.current.style.color = 'black';
              intermediate.current.style.color = 'black';
            }}>
            <div className="class-box">고급반</div>
            <div className="tooltip_arrow"/>
          </div>
        </div>
        {
          isAdmin ?
            <div className="row my-4">
              <div className="col-1 offset-10 horizontal-center">
                <img src="/icons/circled-plus.png" alt="add" onClick={() => showWrite('create')}/>
              </div>
            </div> : null
        }
        <div className="show-post" ref={showPost} style={{display: 'none'}}>
          <div className="post">
            <div className="title horizontal-center">
              {/*{post.title}*/}
            </div>
            <div className="writer text-right">
                작성: {/*{post.author}*/}
            </div>
            {/*{post.content}*/}
          </div>
        </div>
        <div className="all-posts" ref={allPosts} style={{display: 'block'}}>
          <div className="m-0">
            {getFilteredData(false)}
          </div>
        </div>
      </div>
      <div className="write" ref={write} style={{display: 'none'}}>
        <div className="row justify-content-center">
          <div className="col-7 p-0">
            <div className="card">
              <div className="row">
                <div className="col title p-0">제목</div>
              </div>
              <div className="row mt-2 input-box">
                <div className="col p-0">
                  <Slate editor={titleEditor} value={input.title} onChange={newTitle => setInput({
                    ...input,
                    title: newTitle
                  })}>
                    <Editable />
                  </Slate>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 offset-1 p-0">
            <div className="card">
              <div className="row">
                <div className="col title p-0">반 선택</div>
              </div>
              <div className="row mt-2">
                <select onChange={(e) => setInput({
                  ...input,
                  class: e.target.options.selectedIndex + 1
                })}>
                  <option value='1'>초급반</option>
                  <option value='2'>중급반</option>
                  <option value='3'>고급반</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 p-0">
            <div className="content card">
              <div className="row">
                <div className="col title p-0">작성</div>
              </div>
              <div className="row mt-2 input-box">
                <div className="col px-3">
                  <RichText input={input} setInput={setInput} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <div className="row mt-5">
            <button className="col-2 offset-7" onClick={uploadNote}>저장</button>
            <button className="col-2 offset-1" onClick={() => {
              if (window.confirm('정말 돌아가겠습니까?')) {
                showAllPosts(selectedClass);
              }
            }}>돌아가기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Study.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Study;
