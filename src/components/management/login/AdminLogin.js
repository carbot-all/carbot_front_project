import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const adminLogin = (e) => {
    e.preventDefault();

    const loginData = {
      admin_id: username,
      admin_pw: password,
    };

    axios
      .post('http://localhost:8001/admin_login', loginData)
      .then((response) => {
        alert('로그인에 성공했습니다.');
        navigate('/AdminDashboard'); // 성공 시 관리자 대시보드로 이동
      })
      .catch((error) => {
        setError(error.response?.data?.message || '로그인에 실패했습니다.');
      });
  };

  return (
    <div className='AdminLogin-container'>
      <div className='AdminLogin-box'>
        <h2 className='AdminLogin-title'>관리자 로그인</h2>
        <form onSubmit={adminLogin}>
          <div className='AdminLogin-input-group'>
            <label htmlFor='username'>아이디 입력</label>
            <input
              type='text'
              id='username'
              placeholder='아이디 입력'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='AdminLogin-input-group'>
            <label htmlFor='password'>비밀번호 입력</label>
            <input
              type='password'
              id='password'
              placeholder='비밀번호 입력'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className='AdminLogin-error'>{error}</p>}
          <button type='submit' className='AdminLogin-login-button'>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
