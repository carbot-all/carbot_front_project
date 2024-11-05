import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [isDealerLogin, setIsDealerLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const toggleLoginMode = () => {
    setIsDealerLogin(!isDealerLogin);
    setErrors({});
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    const newErrors = {};
    if (!username) newErrors.username = '아이디를 입력해 주세요.';
    if (!password) newErrors.password = '비밀번호를 입력해 주세요.';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('로그인 요청');

      // 딜러 또는 일반 사용자에 따른 로그인 데이터 설정
      const loginData = isDealerLogin
        ? { dealer_id: username, dealer_pw: password }
        : { customer_id: username, customer_pw: password };

      axios
        .post(
          `http://localhost:8001/${
            isDealerLogin ? 'dealer_login' : 'customer_login'
          }`,
          loginData
        )
        .then((response) => {
          alert('로그인에 성공했습니다.');
          navigate('/');
        })
        .catch((error) => {
          alert(error.response?.data?.message || '로그인에 실패했습니다.');
        });
    }
  };

  return (
    <div className='page-container'>
      <section className='login-container'>
        <div className='login-box'>
          <div className='login-box-text'>
            <h1>{isDealerLogin ? '딜러 로그인' : '고객 로그인'}</h1>
            <a href='#' className='corporate-login' onClick={toggleLoginMode}>
              {isDealerLogin ? '개인 로그인' : '딜러 로그인'}
            </a>
          </div>

          <div className='login-inputs'>
            <input
              type='text'
              placeholder={isDealerLogin ? '사원번호 입력' : '고객 로그인'}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errors.username ? 'login-error-input' : ''}
            />
            {errors.username && (
              <p className='login-error-message'>{errors.username}</p>
            )}
            <input
              type='password'
              placeholder='비밀번호 입력'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'login-error-input' : ''}
            />
            {errors.password && (
              <p className='login-error-message'>{errors.password}</p>
            )}
            <button className='login-button' onClick={handleLogin}>
              {isDealerLogin ? '딜러 로그인' : '고객 로그인'}
            </button>
          </div>

          <div className='help-links'>
            <Link to='/findID'>아이디 찾기</Link> |{' '}
            <Link to='/findPW'>비밀번호 찾기</Link>
            <p>
              회원이 아니신가요?{' '}
              <Link to='/join' className='signup-link'>
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
