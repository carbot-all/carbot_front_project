import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate 훅
import './ResetPW.css';

const ResetPW = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate(); // 페이지 이동을 위한 훅 초기화

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로드 방지

    if (password === confirmPassword) {
      alert('비밀번호가 변경되었습니다!');
      setPassword('');
      setConfirmPassword('');
      setIsError(false);

      // 로그인 페이지로 이동
      navigate('/login');
    } else {
      setIsError(true); // 비밀번호 불일치 시 오류 표시
    }
  };

  return (
    <div className='resetPW-container'>
      <div className='resetPW-box'>
        <h1>비밀번호 재설정</h1>
        <form onSubmit={handleSubmit}>
          <p>새 비밀번호</p>
          <input
            type='password'
            placeholder='새 비밀번호 입력'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={isError ? 'input-error' : ''}
          />
          <p>새 비밀번호 확인</p>
          <input
            type='password'
            placeholder='새 비밀번호 확인'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={isError ? 'input-error' : ''}
          />
          {isError && (
            <p className='error-message'>
              비밀번호가 일치하지 않습니다. 다시 입력해 주세요.
            </p>
          )}
          <div className='resetPW-button'>
            <button type='submit'>확인</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPW;
