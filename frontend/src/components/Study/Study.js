import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import MDEditor, { commands } from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown';
import './Study.css';

const Study = ({ match, history, isLoggedIn }) => {
  const [ studyData, setStudyData ] = useState([]);
  const [ selectedPost, setSelectedPost ] = useState({});
  const [ isAdmin, setIsAdmin ] = useState(true);
  const [ userId, setUserId ] = useState();
  const [ classId, setClassId ] = useState();
  const [ hoverId, setHoverId ] = useState(0);
  const [ params, setParams ] = useState({});
  const [ input, setInput ] = useState({});
  const show = useRef();
  const showPost = useRef();
  const allPosts = useRef();
  const editor = useRef();
  const basic = useRef();
  const intermediate = useRef();
  const advanced = useRef();

  const loadData =  async () => {
    const { data } = await axios.get('/api/study/notes');
    setStudyData(data);
  };

  useEffect(loadData, []);

  useEffect(() => {
    setParams({
      ...match.params
    });
  }, [match.params]);

  const displayShow = () => {
    show.current.style.display = 'block';
    editor.current.style.display = 'none';
  };

  const displayEditor = () => {
    show.current.style.display = 'none';
    editor.current.style.display = 'block';
  };

  useEffect(async () => {
    if (params.index) {
      const { data } = await axios.get(`/api/study/note/${params.index}`);
      if (params.class === 'update') {
        setInput({
          id: data.id,
          author: data.author,
          title: data.title,
          content: data.content,
          class: data.class
        });
        displayEditor();
      } else {
        setSelectedPost({
          title: data.title,
          content: data.content,
          author: data.author.name
        });
        displayShow();
        allPosts.current.style.display = 'none';
        showPost.current.style.display = 'block';
      }
    } else {
      if (params.class === 'write') {
        setInput({
          title: '',
          content: '',
          class: classId
        });
        displayEditor();
      } else {
        setClassId(params.class === 'basic' ? 1 : (params.class === 'advanced' ? 3 : 2));
        params.class === 'basic' ? highlightBasic() : (params.class === 'advanced' ? highlightAdvanced() : highlightIntermediate());
        displayShow();
        allPosts.current.style.display = 'block';
        showPost.current.style.display = 'none';
      }
    }
  }, [params]);

  useEffect(() => {
    const id = hoverId === 0 ? classId : hoverId;
    switch (id) {
    case 1:
      highlightBasic();
      break;
    case 2:
      highlightIntermediate();
      break;
    case 3:
      highlightAdvanced();
    }
  }, [hoverId]);

  useEffect(async () => {
    if (isLoggedIn) {
      const { data } = await axios.get('/api/user/profile');
      if (data.role === 'Admin') {
        setIsAdmin(true);
      }
      setUserId(data.id);
    }
  }, [isLoggedIn]);

  const getFilteredData = (id, hover) => {
    const displayData = studyData.filter(post=>(post.class === id));
    return displayData.length > 0 ?
      displayData.map((data, index) => (
        <div className="post-title row justify-content-center" key={index}>
          <div className={hover ? 'col-12' : 'col-6'}
            onClick={() => history.push(`/study/view/${data.id}`)}>
            {(hover ? '' : '- ') + data.title}
          </div>
          {
            !hover && isAdmin ?
              <div className="col-1 p-0">
                <img src="/icons/pencil.png" alt="edit"
                  onClick={() => history.push(`/study/update/${data.id}`)} />
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

  const uploadNote = () => {
    if (params.class === 'write') {
      axios.post('/api/study/note', {
        userId: userId,
        title: input.title,
        content: input.content,
        class: input.class
      }).then(() => {
        loadData();
        history.go(-1);
      }).catch(error => {
        window.alert(error);
      });
    } else if (params.class === 'update') {
      axios.put(`/api/study/note/${input.id}`, {
        userId: userId,
        title: input.title,
        content: input.content,
        class: input.class
      }).then(() => {
        loadData();
        history.go(-1);
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

  const eraseHighlight = () => {
    basic.current.style.color = 'black';
    basic.current.style.backgroundColor = 'white';
    intermediate.current.style.color = 'black';
    intermediate.current.style.backgroundColor = 'white';
    advanced.current.style.color = 'black';
    advanced.current.style.backgroundColor = 'white';
  };

  const highlightBasic = () => {
    eraseHighlight();
    basic.current.style.backgroundColor = '#c5eb5b';
    intermediate.current.style.color = '#827e7e';
    advanced.current.style.color = '#827e7e';
  };

  const highlightIntermediate = () => {
    eraseHighlight();
    intermediate.current.style.backgroundColor = '#fcf25c';
    basic.current.style.color = '#827e7e';
    advanced.current.style.color = '#827e7e';
  };

  const highlightAdvanced = () => {
    eraseHighlight();
    advanced.current.style.backgroundColor = '#5e9efc';
    basic.current.style.color = '#827e7e';
    intermediate.current.style.color = '#827e7e';
  };

  return (
    <div className="container-fluid study p-0">
      <div className="show" ref={show} style={{display: 'block'}}
        onMouseOut={() => setHoverId(0)}>
        <div className="row class-boxes justify-content-center horizontal-center m-0">
          <div className="col-2 p-0" ref={basic}
            onClick={() => history.push('/study/basic')}
            onMouseOver={() => setHoverId(1)}>
            <div className="class-box">초급반</div>
            <div className="tooltip_arrow"/>
          </div>
          <div className="col-2 p-0" ref={intermediate}
            onClick={() => history.push('/study/intermediate')}
            onMouseOver={() => setHoverId(2)}>
            <div className="class-box">중급반</div>
            <div className="tooltip_arrow"/>
            <span className="tooltip_text" style={{textAlign: 'start'}}>{getFilteredData(hoverId, true)}</span>
          </div>
          <div className="col-2 p-0" ref={advanced}
            onClick={() => history.push('/study/advanced')}
            onMouseOver={() => setHoverId(3)}>
            <div className="class-box">고급반</div>
            <div className="tooltip_arrow"/>
          </div>
        </div>
        {
          isAdmin ?
            <div className="row my-4">
              <div className="col-1 offset-9 horizontal-center">
                <img src="/icons/circled-plus.png" alt="add"
                  onClick={() => history.push('/study/write')} />
              </div>
            </div> : null
        }
        <div className="show-post" ref={showPost} style={{display: 'none'}}>
          <div className="post">
            <div className="title horizontal-center">
              {selectedPost.title}
            </div>
            <br />
            <div className="writer text-right">
                작성: {selectedPost.author}
            </div>
            <br />
            <ReactMarkdown>
              {selectedPost.content}
            </ReactMarkdown>
          </div>
        </div>
        <div className="all-posts" ref={allPosts} style={{display: 'block'}}>
          <div className="m-0">
            {getFilteredData(classId, false)}
          </div>
        </div>
      </div>
      <div className="editor" ref={editor} style={{display: 'none'}}>
        <div className="row justify-content-center">
          <div className="col-7 p-0">
            <div className="card">
              <div className="row">
                <div className="col title p-0">제목</div>
              </div>
              <div className="row mt-2 input-box">
                <div className="col p-0">
                  <input type="text" name="" placeholder="제목을 입력하세요..." value={input.title} onChange={(e) => setInput({...input, title: e.target.value})} required />
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
                <select
                  onChange={(e) => setInput({
                    ...input,
                    class: e.target.options.selectedIndex + 1
                  })}>
                  <option value={1} selected={classId === 1}>초급반</option>
                  <option value={2} selected={classId === 2}>중급반</option>
                  <option value={3} selected={classId === 3}>고급반</option>
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
                  <MDEditor
                    value={input.content}
                    onChange={(value) => setInput({
                      ...input,
                      content: value
                    })}
                    commands={[
                      commands.bold, commands.italic, commands.strikethrough, commands.hr, commands.group(
                        [commands.title1, commands.title2, commands.title3, commands.title4, commands.title5, commands.title6], {
                          name: 'title',
                          groupName: 'title',
                          buttonProps: { 'aria-label': 'Insert title'}
                        }),
                      commands.divider,
                      commands.link, commands.quote, commands.code, //commands.image,
                      commands.divider,
                      commands.unorderedListCommand, commands.orderedListCommand, commands.checkedListCommand,
                      commands.divider,
                      commands.codeEdit, commands.codeLive, commands.codePreview,
                      commands.divider,
                      commands.fullscreen
                    ]}
                  />
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
                history.go(-1);
              }
            }}>돌아가기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Study.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default Study;
