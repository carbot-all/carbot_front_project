import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  return (
    <div className="AdminLogin-container">
      <div className="AdminLogin-box">
        <h2 className="AdminLogin-title">관리자 로그인</h2>
        <form>
          <div className="AdminLogin-input-group">
            <label htmlFor="username">아이디 입력</label>
            <input
              type="text"
              id="username"
              placeholder="아이디 입력"
              required
            />
          </div>
          <div className="AdminLogin-input-group">
            <label htmlFor="password">비밀번호 입력</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호 입력"
              required
            />
          </div>
          <Link to="/AdminDashboard" className="AdminLogin-login-button">
            로그인
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
