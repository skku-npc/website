import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Profile.css';

const Profile = ({ user, settings }) => {
  const { name, handle, email, bojHandle, codeforcesHandle, createdAt, department, image } = user;
  const profileImage = useRef();

  const imageFromArray = (array) => {
    if (array) {
      const blob = new Blob([new Uint8Array(array.data)]);
      const url = URL.createObjectURL(blob);
      profileImage.current.src = url;
      profileImage.current.onload = () => URL.revokeObjectURL(url);
    } else {
      profileImage.current.src = '/icons/default-profile.jpg';
    }
  };

  const loadImage = () => {
    axios.get('/api/user/profile')
      .then(response => {
        imageFromArray(response.data.image);
      }).catch(error => {
        window.alert(error);
      });
  };

  const uploadImage = (e) => {
    const fd = new FormData();
    fd.append('image', e.target.files[0]);
    axios.patch('api/user/profile/upload-image', fd)
      .then(() => {
        setTimeout(loadImage, 2000);
      }).catch ((error) => {
        window.alert(error);
      });
  };

  const removeImage = () => {
    axios.patch('api/user/profile/remove-image')
      .then(() => {
        setTimeout(loadImage, 1000);
      }).catch ((error) => {
        window.alert(error);
      });
  };

  useEffect(() => {
    if (settings) {
      loadImage();
    } else {
      imageFromArray(image);
    }
  }, []);

  return (
    <div className="profile" style={settings ? {padding: 0, width: '100%', height: '100%'} : {width: '500px', height: '650px', padding: '80px 80px'}}>
      <div className="row mb-3">
        <div className="col p-0">
          <img className="profile-img" ref={profileImage} alt="Profile Image" />
        </div>
      </div>
      { settings ?
        (
          <div className="row mb-5">
            <div className="setting-button col-2 offset-7 p-0">
              <input type="file" id="file" name="file" onChange={uploadImage} style={{display: 'none'}} />
              <label htmlFor="file">upload</label>
            </div>
            <div className="setting-button col-2 p-0" onClick={removeImage}>remove</div>
          </div>
        ) : (
          <div className="row mb-5">
            <a className="col-2 offset-8 p-0" href={bojHandle && `https://www.acmicpc.net/user/${bojHandle}`} target="_blank" rel="noopener noreferrer">
              <li className="tooltip">
                <img
                  className="button-icon"
                  src="/icons/baekjoon.png"
                  alt="baekjoon"
                />
                <span className="tooltip_text">{`(백준) ${bojHandle || '등록되지 않음'}`}</span>
              </li>
            </a>
            <a className="col-2 p-0" href={codeforcesHandle && `https://codeforces.com/profile/${codeforcesHandle}`} target="_blank" rel="noopener noreferrer">
              <li className="tooltip">
                <img
                  className="button-icon"
                  src="/icons/codeforces.png"
                  alt="codeforces"
                />
                <span className="tooltip_text">{`(코포) ${codeforcesHandle || '등록되지 않음'}`}</span>
              </li>
            </a>
          </div>
        )
      }
      <div className="row mb-3">
        <div className="col-4 p-0">이름</div>
        <div className="col-7 offset-1 p-0">{name}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 p-0">닉네임</div>
        <div className="col-7 offset-1 p-0">{handle}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 p-0">이메일</div>
        <div className="col-7 offset-1 p-0">{email}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 p-0">가입연도</div>
        <div className="col-7 offset-1 p-0">{createdAt && (typeof createdAt === 'number' ? createdAt : createdAt.slice(0, 4))}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4 p-0">학과</div>
        <div className="col-7 offset-1 p-0">{department}</div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  settings: PropTypes.bool.isRequired
};

export default Profile;
